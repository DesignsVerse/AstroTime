import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
  language?: "hindi" | "english";
}

// Helper to robustly detect Hindi/Hinglish/English user intent
function detectUserLanguage(messages: ChatMessage[], lastMessage: string): "hindi" | "english" | undefined {
  const hindiPattern = /\b(hindi|hinglish|हिंदी|हिंग्लिश|hindi me|hindime|mujhe hindi|reply in hindi|हिन्दी)\b/i;
  const englishPattern = /\b(english|इंग्लिश|अंग्रेज़ी|angrezi|english me|please in english|reply in english)\b/i;

  for (let i = messages.length - 1; i >= 0; --i) {
    const msg = messages[i];
    if (msg.role === "assistant" && msg.language) return msg.language;
    if (msg.role === "user") {
      if (hindiPattern.test(msg.content)) return "hindi";
      if (englishPattern.test(msg.content)) return "english";
    }
  }
  if (hindiPattern.test(lastMessage)) return "hindi";
  if (englishPattern.test(lastMessage)) return "english";
  return undefined;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { message, chatHistory } = body as { message: string; chatHistory?: ChatMessage[] };
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (!message) {
    return NextResponse.json({ error: "Message required" }, { status: 400 });
  }

  // 1. Detect user language, treat Hinglish as Hindi
  const userLanguage = detectUserLanguage(chatHistory || [], message);

  // 2. Only prompt for language if not set yet
  const isFirstInteraction =
    !userLanguage &&
    !(chatHistory || []).some((msg) =>
      msg.role === "user" && detectUserLanguage([msg], msg.content)
    );

  // 3. Receptionist prompt: mention number only IF appropriate
  const promptHeading = `
You are a polite, attentive, helpful receptionist and virtual assistant for Astrologer Astro Deepak Goutam on the website astroank.com.

Your duties:
- Greet new users and politely assist with queries about astrology and Astro Deepak Goutam's services.
- Always use the user's chosen language: Hindi (including informal "Hinglish") or English. Once a language is chosen, continue ONLY in that language for all answers.
- Do NOT mention or include the phone number in every reply.
- ONLY share the contact number for Astro Deepak Goutam (+919153164444) if:
    - The user asks for more information/details
    - The user asks how to contact, book, call, WhatsApp, or speak to Astro Deepak
    - The user's query needs a followup with the astrologer (complex, confidential, or not answerable in chat)
    - Otherwise, do NOT mention or append the phone number; just answer helpfully in 1-2 sentences.
- Always keep answers short (1-2 lines, unless asked for more detail); speak with the warmth and restraint of a human receptionist, not like an AI.

If the user mixes Hindi and English or says "Hinglish", treat it as Hindi.
`;

  let prompt = promptHeading;

  if (isFirstInteraction) {
    prompt += `
Greet the user, then ask: "Which language would you like to continue in: Hindi (हिंदी/हिंग्लिश) or English (अंग्रेज़ी)?".
Also show: "कृपया बताएं, आप किस भाषा में जारी रखना चाहते हैं: हिंदी (हिंदी/हिंग्लिश) या अंग्रेज़ी?".
Do not answer any astrology queries before the user chooses a language. If a user chooses 'hindi', 'hinglish', mixes Hindi/English, or writes Hindi in Roman script, assume 'Hindi' for the rest of the conversation.
`;
  } else if (userLanguage === "hindi") {
    prompt += `
From now on, reply ONLY in Hindi (formal/informal, Hinglish is OK). Do not mention the phone number unless appropriate (see above). Keep answers short and polite.
`;
  } else {
    prompt += `
From now on, reply ONLY in English. Do not mention the phone number unless appropriate (see above). Keep answers short and polite.
`;
  }

  const fullPrompt: ChatMessage[] = [
    { role: "system", content: prompt, language: userLanguage },
    ...((chatHistory || []) as ChatMessage[]),
    { role: "user", content: message, language: userLanguage },
  ];

  const promptText = fullPrompt
    .map((m) =>
      m.role === "system"
        ? m.content
        : `${m.role === "user" ? "User" : "AI"}: ${m.content}`
    )
    .join("\n");

  try {
    const geminiResp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] }),
      }
    );
    const result = await geminiResp.json();
    const reply =
      result.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not find an answer.";

    // Infer bot's language for further retention
    let assistantLanguage = userLanguage;
    if (!assistantLanguage) {
      if (/अधिक जानकारी|एस्ट्रो दीपक|हिंदी|हिंग्लिश|कृपया/i.test(reply)) assistantLanguage = "hindi";
      if (/For more enquiries|call|Deepak|contact/i.test(reply)) assistantLanguage = "english";
    }

    return NextResponse.json({ reply, language: assistantLanguage });
  } catch (err) {
    console.error("Gemini API error:", err);
    return NextResponse.json(
      { error: "Failed to get response from Gemini." },
      { status: 500 }
    );
  }
}
