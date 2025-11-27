import React, { useState, useEffect, useRef } from 'react';
import { getToolRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Nexus. I am your AI concierge. What tool are you looking for today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getToolRecommendation(userMsg.text);
      const aiMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'System offline. Please browse manually.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-96 h-[500px] bg-black border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="p-4 bg-zinc-900 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <h3 className="font-bold text-white text-sm tracking-wide uppercase">Nexus Concierge</h3>
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
            >
                ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                    className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed border ${
                        msg.role === 'user' 
                        ? 'bg-white text-black border-white' 
                        : 'bg-zinc-900 text-gray-300 border-zinc-800'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-0" />
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150" />
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-300" />
                    </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-zinc-900 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Describe your task..."
                className="flex-1 bg-black border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white placeholder-zinc-600 focus:border-white/50 focus:outline-none transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-white hover:bg-gray-200 text-black rounded-lg px-3 transition-colors disabled:opacity-50"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-white hover:bg-gray-200 text-black rounded-full p-4 shadow-xl shadow-white/5 transition-all hover:scale-105"
      >
        <span className={`${isOpen ? 'hidden' : 'block'} text-xs font-bold uppercase tracking-wider max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap pl-0 group-hover:pl-2`}>
            Concierge
        </span>
        {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        )}
      </button>
    </div>
  );
};

export default Concierge;