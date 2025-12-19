
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, SKILLS, EXPERIENCES } from '../constants';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `User asks: ${userMessage}. Answer based on this profile context: 
          Name: ${PERSONAL_INFO.name}, 
          Bio: ${PERSONAL_INFO.bio},
          Skills: ${SKILLS.hard.join(', ')},
          Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company}`).join('; ')}.
          Be concise and friendly. Roleplay as Ihzra's digital assistant.`,
      });
      
      const aiText = response.text || "I'm having trouble connecting right now, but Ihzra is awesome!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, the AI brain is resting. You can contact Ihzra directly via email!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 glass w-[300px] sm:w-[400px] h-[500px] rounded-3xl border-white/10 flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="p-6 bg-blue-600/10 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Ihzra's Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-1">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-4 text-sm">
              <div className="bg-gray-900 border border-white/5 p-4 rounded-2xl text-gray-300">
                Hi! I'm Ihzra's digital twin. Ask me anything about his projects or skills!
              </div>
              {messages.map((m, idx) => (
                <div key={idx} className={`${m.role === 'user' ? 'ml-auto bg-blue-600 text-white' : 'mr-auto bg-gray-900 border border-white/5 text-gray-300'} p-4 rounded-2xl max-w-[85%] break-words`}>
                  {m.text}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-1 p-4 bg-gray-900 border border-white/5 rounded-2xl w-20">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask something..."
                className="flex-1 bg-gray-900 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-50"
              >
                <MessageSquare size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-900/50 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        {isOpen ? <MessageSquare /> : <Sparkles />}
      </motion.button>
    </div>
  );
};
