"use client";
import { useState, useRef, useEffect } from "react";
import { IoMdChatbubbles, IoMdClose } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { FaStar, FaPrayingHands, FaUserAlt } from "react-icons/fa";
import { GiCash } from "react-icons/gi";

export default function ChatBoard() {
  const [autoPopped, setAutoPopped] = useState(false);
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content: "Namaste! 🙏 I'm your Astro Guide. Ask me about horoscopes, pujas, or anything astrological.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-popup after 10 seconds
  useEffect(() => {
    if (!open && !autoPopped) {
      const timer = setTimeout(() => {
        setOpen(true);
        setAutoPopped(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [open, autoPopped]);

  // Auto-focus input when chat opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 300);
    }
  }, [open]);

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, open]);

  // Categorized quick questions
  const quickQuestionCategories = [
    {
      icon: <FaStar className="text-yellow-500" />,
      title: "Astrology",
      questions: [
        "Today's horoscope?",
        "Kundli analysis?",
        "Planetary transits?"
      ]
    },
    {
      icon: <FaPrayingHands className="text-blue-500" />,
      title: "Puja",
      questions: [
        "Best puja for success?",
        "Muhurat for puja?",
        "Remedies for problems?"
      ]
    },
    {
      icon: <GiCash className="text-green-500" />,
      title: "Offers",
      questions: [
        "Special discounts?",
        "Yearly package?",
        "Free consultation?"
      ]
    },
    {
      icon: <FaUserAlt className="text-purple-500" />,
      title: "Astro Deepak",
      questions: [
        "Experience?",
        "Consultation fees?",
        "Success stories?"
      ]
    }
  ];

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

  const handleQuickQuestion = (question) => {
    setUserInput(question);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-16 md:bottom-10 right-3 md:right-8 z-50 bg-[#800000] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none group"
          aria-label="Open chat"
          style={{ 
            boxShadow: "0 4px 20px rgba(128, 0, 0, 0.3)",
            animation: "pulse 2s infinite"
          }}
        >
          <div className="relative">
            <IoMdChatbubbles
              size={24}
              className="group-hover:rotate-12 transition-transform"
              color="#FFF"
            />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
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
          backgroundColor: "#FFF9E6",
          border: "1px solid #80000033",
          maxHeight: "calc(100vh - 100px)",
        }}
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center justify-between cursor-grab active:cursor-grabbing"
          style={{ 
            background: "linear-gradient(135deg, #800000 0%, #600000 100%)",
            color: "#FFFDD0",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="text-[#800000] font-bold text-sm">AD</span>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#800000]"></span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Astro Deepak</h3>
              <div className="flex items-center gap-1">
                <span className="text-xs opacity-90">Online</span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
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
          className="flex-1 p-4 overflow-y-auto flex flex-col gap-4"
          style={{ 
            backgroundColor: "#FFF9E6",
            backgroundImage: "radial-gradient(#8000000a 1px, transparent 1px)",
            backgroundSize: "15px 15px"
          }}
        >
          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={
                msg.role === "user"
                  ? "flex gap-3 justify-end items-end"
                  : "flex gap-3 items-end"
              }
            >
              {msg.role === "assistant" && (
                <div className="w-9 h-9 rounded-full bg-[#800000] flex-shrink-0 flex items-center justify-center text-white text-sm shadow-md">
                  AD
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl max-w-[85%] shadow-sm ${
                  msg.role === "user" 
                    ? "rounded-br-none bg-[#800000] text-white"
                    : "rounded-bl-none bg-white text-[#800000] border border-[#80000010]"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.content}</p>
                <div className="text-right mt-1">
                  <span className="text-xs opacity-60">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
              {msg.role === "user" && (
                <div className="w-9 h-9 rounded-full bg-[#80000020] flex-shrink-0 flex items-center justify-center text-[#800000] text-sm font-bold shadow-md">
                  You
                </div>
              )}
            </div>
          ))}
          
          {loading && (
            <div className="flex gap-3 items-end">
              <div className="w-9 h-9 rounded-full bg-[#800000] flex-shrink-0 flex items-center justify-center text-white text-sm shadow-md">
                AD
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-white max-w-[85%] shadow-sm border border-[#80000010]">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          {chatHistory.length === 1 && (
            <div className="mt-2">
              {quickQuestionCategories.map((category, i) => (
                <div key={i} className="mb-3">
                  <div className="flex items-center gap-2 mb-1 px-2">
                    <div className="text-lg">
                      {category.icon}
                    </div>
                    <h4 className="text-xs font-semibold text-[#800000]">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.questions.map((question, j) => (
                      <button
                        key={j}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs p-2 rounded-lg bg-white border border-[#80000015] hover:bg-[#80000005] hover:border-[#80000030] text-[#800000] transition-colors"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input Area */}
        <form
          onSubmit={sendMessage}
          className="p-3 border-t bg-white"
          style={{
            borderColor: "#80000022",
          }}
        >
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full rounded-full border pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 text-sm placeholder-[#80000080]"
              style={{
                backgroundColor: "white",
                borderColor: "#80000055",
                color: "#800000",
                boxShadow: "0 2px 8px rgba(128, 0, 0, 0.1)",
                paddingRight: "2.5rem"
              }}
              placeholder="Ask Astro Deepak..."
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) sendMessage(e);
              }}
            />
            <button
              type="submit"
              disabled={loading || !userInput.trim()}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full focus:outline-none transition-colors ${
                userInput.trim() 
                  ? "text-white bg-[#800000] hover:bg-[#700000]" 
                  : "text-[#80000080]"
              }`}
              aria-label="Send message"
            >
              <IoSend size={16} />
            </button>
          </div>
        </form>
      </div>
      
      <style jsx global>{`
        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          height: 20px;
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
          0%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(128, 0, 0, 0.4);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(128, 0, 0, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(128, 0, 0, 0);
          }
        }
      `}</style>
    </>
  );
}







// "use client";
// import { useState, useRef, useEffect } from "react";
// import { IoMdChatbubbles, IoMdClose } from "react-icons/io";
// import { IoSend } from "react-icons/io5";


// export default function ChatBoard() {
//   const [autoPopped, setAutoPopped] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [userInput, setUserInput] = useState("");
//   const [chatHistory, setChatHistory] = useState([
//     {
//       role: "assistant",
//       content:
//         "Welcome to Astrology Chat! Ask me anything about your horoscope, signs, or predictions.",
//     },
//   ]);
//   useEffect(() => {
//     if (!open && !autoPopped) {
//       const timer = setTimeout(() => {
//         setOpen(true);
//         setAutoPopped(true);
//       }, 10000); // 10,000 ms = 10 seconds
//       return () => clearTimeout(timer);
//     }
//   }, [open, autoPopped]);
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [chatHistory, open]);

//   const sendMessage = async (e) => {
//     e?.preventDefault();
//     const message = userInput.trim();
//     if (!message || loading) return;
//     const newHistory = [...chatHistory, { role: "user", content: message }];
//     setChatHistory(newHistory);
//     setUserInput("");
//     setLoading(true);

//     try {
//       const resp = await fetch("/api/ask", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message, chatHistory: newHistory }),
//       });
//       const data = await resp.json();
//       setChatHistory([
//         ...newHistory,
//         {
//           role: "assistant",
//           content: data.reply || "Sorry, I couldn't answer that.",
//           language: data.language,
//         },
//       ]);
//     } catch {
//       setChatHistory([
//         ...newHistory,
//         {
//           role: "assistant",
//           content: "Something went wrong. Please try again.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       {!open && (
//         <button
//           onClick={() => setOpen(true)}
//           className="fixed bottom-16 md:bottom-10 right-3 md:right-8 z-50 bg-[#800000] text-cream p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none group"
//           aria-label="Open chat"
//           style={{ boxShadow: "0 4px 20px rgba(128, 0, 0, 0.3)" }}
//         >
//           <IoMdChatbubbles
//             size={24}
//             className="group-hover:rotate-12 transition-transform"
//             color="#FFF"
//           />
//         </button>
//       )}

//       {/* Chat Board Panel */}
//       <div
//         className={`fixed bottom-6 right-6 h-[500px] w-[350px] rounded-xl overflow-hidden shadow-2xl z-50 flex flex-col transition-all duration-300 ease-in-out ${
//           open
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-4 pointer-events-none"
//         }`}
//         style={{
//           backgroundColor: "#FFFDD0",
//           border: "1px solid #80000033",
//           maxHeight: "calc(100vh - 100px)",
//         }}
//       >
//         {/* Header */}
//         <div
//           className="px-4 py-3 flex items-center justify-between"
//           style={{ backgroundColor: "#800000", color: "#FFFDD0" }}
//         >
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center">
//               <span className="text-[#800000] font-bold text-sm">AI</span>
//             </div>
//             <div>
//               <h3 className="font-semibold">Astrology Chatbot</h3>
//               <p className="text-xs opacity-80">Online now</p>
//             </div>
//           </div>
//           <button
//             onClick={() => setOpen(false)}
//             className="p-1 rounded-full hover:bg-[#700000] focus:outline-none transition-colors"
//             aria-label="Close chat"
//           >
//             <IoMdClose size={20} />
//           </button>
//         </div>

//         {/* Messages Area */}
//         <div
//           className="flex-1 p-4 overflow-y-auto flex flex-col gap-3"
//           style={{ backgroundColor: "#FBF8F5" }}
//         >
//           {chatHistory.map((msg, idx) => (
//             <div
//               key={idx}
//               className={
//                 msg.role === "user"
//                   ? "flex gap-2 justify-end"
//                   : "flex gap-2"
//               }
//             >
//               {msg.role === "assistant" && (
//                 <div className="w-8 h-8 rounded-full bg-[#800000] flex-shrink-0 flex items-center justify-center text-cream text-sm">
//                   AI
//                 </div>
//               )}
//               <div
//                 className="px-3 py-2 rounded-lg max-w-[80%]"
//                 style={{
//                   backgroundColor:
//                     msg.role === "user" ? "#800000" : "#80000022",
//                   color: msg.role === "user" ? "#FFFDD0" : "#800000",
//                   border:
//                     msg.role === "assistant" ? "1px solid #80000011" : "none",
//                 }}
//               >
//                 <p className="text-sm">{msg.content}</p>
//               </div>
//               {msg.role === "user" && <div style={{ width: 32 }} />}
//             </div>
//           ))}
//           {loading && (
//             <div className="flex gap-2">
//               <div className="w-8 h-8 rounded-full bg-[#80000022] flex-shrink-0 flex items-center justify-center">
//                 <div className="typing-indicator">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//               </div>
//               <div className="px-3 py-2 rounded-lg bg-[#80000022] self-start">
//                 <p className="text-sm italic">Typing...</p>
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef}></div>
//         </div>

//         {/* Input Area */}
//         <form
//           onSubmit={sendMessage}
//           className="p-3 border-t relative"
//           style={{
//             backgroundColor: "#FBF8F5",
//             borderColor: "#80000022",
//           }}
//         >
//           <input
//             type="text"
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             className="w-full rounded-full border pl-4 pr-10 py-2 focus:outline-none focus:ring-1 text-sm"
//             style={{
//               backgroundColor: "white",
//               borderColor: "#80000055",
//               color: "#800000",
//             }}
//             placeholder="Type your astrology question..."
//             disabled={loading}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && !e.shiftKey) sendMessage(e);
//             }}
//           />
//           <button
//             type="submit"
//             disabled={loading || !userInput.trim()}
//             className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#800000] hover:text-[#600000] focus:outline-none"
//             aria-label="Send message"
//           >
//             <IoSend size={18} />
//           </button>
//         </form>
//       </div>
//       <style jsx>{`
//         .typing-indicator {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 2px;
//         }
//         .typing-indicator span {
//           width: 6px;
//           height: 6px;
//           background-color: #800000;
//           border-radius: 50%;
//           display: inline-block;
//           opacity: 0.4;
//         }
//         .typing-indicator span:nth-child(1) {
//           animation: bounce 1s infinite ease-in-out;
//         }
//         .typing-indicator span:nth-child(2) {
//           animation: bounce 1s infinite ease-in-out 0.2s;
//         }
//         .typing-indicator span:nth-child(3) {
//           animation: bounce 1s infinite ease-in-out 0.4s;
//         }
//         @keyframes bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//             opacity: 0.4;
//           }
//           50% {
//             transform: translateY(-3px);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </>
//   );
// }
