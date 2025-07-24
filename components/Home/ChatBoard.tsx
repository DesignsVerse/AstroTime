"use client"
import { useState } from 'react';
import { IoMdChatbubbles, IoMdClose } from 'react-icons/io';
import { IoSend } from 'react-icons/io5';

export default function ChatBoard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button - More Premium Look */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-16 md:bottom-10 right-3 md:right-8 z-50 bg-[#800000] text-cream p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none group"
          aria-label="Open chat"
          style={{
            boxShadow: '0 4px 20px rgba(128, 0, 0, 0.3)'
          }}
        >
          <IoMdChatbubbles size={24} className="group-hover:rotate-12 transition-transform" color="#FFF" />
          
        </button>
      )}

      {/* Chat Board Panel - Compact and Premium */}
      <div
        className={`fixed bottom-6 right-6 h-[500px] w-[350px] rounded-xl overflow-hidden shadow-2xl z-50 flex flex-col transition-all duration-300 ease-in-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{
          backgroundColor: '#FFFDD0',
          border: '1px solid #80000033',
          maxHeight: 'calc(100vh - 100px)'
        }}
      >
        {/* Header */}
        <div 
          className="px-4 py-3 flex items-center justify-between"
          style={{
            backgroundColor: '#800000',
            color: '#FFFDD0'
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center">
              <span className="text-[#800000] font-bold text-sm">AI</span>
            </div>
            <div>
              <h3 className="font-semibold">Premium Support</h3>
              <p className="text-xs opacity-80">Typically replies in minutes</p>
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
          style={{ backgroundColor: '#FBF8F5' }}
        >
          {/* Welcome Message */}
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-[#800000] flex-shrink-0 flex items-center justify-center text-cream text-sm">
              AI
            </div>
            <div 
              className="px-3 py-2 rounded-lg max-w-[80%]"
              style={{
                backgroundColor: '#80000022',
                border: '1px solid #80000011'
              }}
            >
              <p className="text-sm">Hello! Welcome to our premium support. How can we help you today?</p>
              <p className="text-xs text-gray-600 mt-1">2:45 PM</p>
            </div>
          </div>

          {/* User Message Placeholder */}
          <div className="flex gap-2 justify-end">
            <div 
              className="px-3 py-2 rounded-lg max-w-[80%]"
              style={{
                backgroundColor: '#800000',
                color: '#FFFDD0'
              }}
            >
              <p className="text-sm">I have a question about...</p>
              <p className="text-xs opacity-70 mt-1 text-right">2:46 PM</p>
            </div>
          </div>

          {/* Typing Indicator */}
          {open && (
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
        </div>

        {/* Input Area */}
        <div 
          className="p-3 border-t relative"
          style={{
            backgroundColor: '#FBF8F5',
            borderColor: '#80000022'
          }}
        >
          <input
            type="text"
            className="w-full rounded-full border pl-4 pr-10 py-2 focus:outline-none focus:ring-1 text-sm"
            style={{
              backgroundColor: 'white',
              borderColor: '#80000055',
              color: '#800000'
            }}
            placeholder="Type your message..."
          />
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#800000] hover:text-[#600000] focus:outline-none"
            aria-label="Send message"
          >
            <IoSend size={18} />
          </button>
        </div>
      </div>

      {/* Custom CSS for typing indicator */}
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
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-3px); opacity: 1; }
        }
      `}</style>
    </>
  );
}