"use client";
import { useState, useRef, useEffect } from "react";
import { IoMdChatbubbles, IoMdClose } from "react-icons/io";
import { IoSend } from "react-icons/io5";


export default function ChatBoard() {
  const [autoPopped, setAutoPopped] = useState(false);
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content:
        "Welcome to Astrology Chat! Ask me anything about your horoscope, signs, or predictions.",
    },
  ]);
  useEffect(() => {
    if (!open && !autoPopped) {
      const timer = setTimeout(() => {
        setOpen(true);
        setAutoPopped(true);
      }, 10000); // 10,000 ms = 10 seconds
      return () => clearTimeout(timer);
    }
  }, [open, autoPopped]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, open]);

  const sendMessage = async (e) => {
    e?.preventDefault();
    const message = userInput.trim();
    if (!message || loading) return;
    const newHistory = [...chatHistory, { role: "user", content: message }];
    setChatHistory(newHistory);
    setUserInput("");
    setLoading(true);

    try {
      const resp = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, chatHistory: newHistory }),
      });
      const data = await resp.json();
      setChatHistory([
        ...newHistory,
        {
          role: "assistant",
          content: data.reply || "Sorry, I couldn't answer that.",
          language: data.language,
        },
      ]);
    } catch {
      setChatHistory([
        ...newHistory,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-16 md:bottom-10 right-3 md:right-8 z-50 bg-[#800000] text-cream p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none group"
          aria-label="Open chat"
          style={{ boxShadow: "0 4px 20px rgba(128, 0, 0, 0.3)" }}
        >
          <IoMdChatbubbles
            size={24}
            className="group-hover:rotate-12 transition-transform"
            color="#FFF"
          />
        </button>
      )}

      {/* Chat Board Panel */}
      <div
        className={`fixed bottom-6 right-6 h-[500px] w-[350px] rounded-xl overflow-hidden shadow-2xl z-50 flex flex-col transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          backgroundColor: "#FFFDD0",
          border: "1px solid #80000033",
          maxHeight: "calc(100vh - 100px)",
        }}
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{ backgroundColor: "#800000", color: "#FFFDD0" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center">
              <span className="text-[#800000] font-bold text-sm">AI</span>
            </div>
            <div>
              <h3 className="font-semibold">Astrology Chatbot</h3>
              <p className="text-xs opacity-80">Online now</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-full hover:bg-[#700000] focus:outline-none transition-colors"
            aria-label="Close chat"
          >
            <IoMdClose size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div
          className="flex-1 p-4 overflow-y-auto flex flex-col gap-3"
          style={{ backgroundColor: "#FBF8F5" }}
        >
          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={
                msg.role === "user"
                  ? "flex gap-2 justify-end"
                  : "flex gap-2"
              }
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-[#800000] flex-shrink-0 flex items-center justify-center text-cream text-sm">
                  AI
                </div>
              )}
              <div
                className="px-3 py-2 rounded-lg max-w-[80%]"
                style={{
                  backgroundColor:
                    msg.role === "user" ? "#800000" : "#80000022",
                  color: msg.role === "user" ? "#FFFDD0" : "#800000",
                  border:
                    msg.role === "assistant" ? "1px solid #80000011" : "none",
                }}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
              {msg.role === "user" && <div style={{ width: 32 }} />}
            </div>
          ))}
          {loading && (
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#80000022] flex-shrink-0 flex items-center justify-center">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-[#80000022] self-start">
                <p className="text-sm italic">Typing...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input Area */}
        <form
          onSubmit={sendMessage}
          className="p-3 border-t relative"
          style={{
            backgroundColor: "#FBF8F5",
            borderColor: "#80000022",
          }}
        >
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full rounded-full border pl-4 pr-10 py-2 focus:outline-none focus:ring-1 text-sm"
            style={{
              backgroundColor: "white",
              borderColor: "#80000055",
              color: "#800000",
            }}
            placeholder="Type your astrology question..."
            disabled={loading}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) sendMessage(e);
            }}
          />
          <button
            type="submit"
            disabled={loading || !userInput.trim()}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#800000] hover:text-[#600000] focus:outline-none"
            aria-label="Send message"
          >
            <IoSend size={18} />
          </button>
        </form>
      </div>
      <style jsx>{`
        .typing-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        .typing-indicator span {
          width: 6px;
          height: 6px;
          background-color: #800000;
          border-radius: 50%;
          display: inline-block;
          opacity: 0.4;
        }
        .typing-indicator span:nth-child(1) {
          animation: bounce 1s infinite ease-in-out;
        }
        .typing-indicator span:nth-child(2) {
          animation: bounce 1s infinite ease-in-out 0.2s;
        }
        .typing-indicator span:nth-child(3) {
          animation: bounce 1s infinite ease-in-out 0.4s;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
