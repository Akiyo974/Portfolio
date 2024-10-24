import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, MinusSquare, Maximize2 } from 'lucide-react';
import { ChatMessage, MessageType } from './ChatMessage';
import { handleMessage } from './botLogic/messageHandler';

interface ChatbotProps {
  botName?: string;
  welcomeMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
}

export const Chatbot: React.FC<ChatbotProps> = ({
  botName = 'Assistant',
  welcomeMessage = 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
  position = 'bottom-right',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    {
      content: welcomeMessage,
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: MessageType = {
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await handleMessage(userMessage.content);
      const botResponse: MessageType = {
        content: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const errorResponse: MessageType = {
        content: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setMessages([
      {
        content: welcomeMessage,
        isBot: true,
        timestamp: new Date(),
      },
    ]);
  };

  const positionClass = position === 'bottom-right' ? 'right-4' : 'left-4';

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed ${positionClass} bottom-4 p-3 bg-black border border-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:bg-gray-900`}
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div
      className={`fixed ${positionClass} bottom-4 w-80 md:w-96 ${
        isMinimized ? 'h-12' : 'h-[480px]'
      } bg-black border border-white/10 rounded-lg shadow-lg flex flex-col transition-all duration-300 z-50`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="font-medium text-white">{botName}</span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Minimiser le chat"
          >
            {isMinimized ? <Maximize2 size={16} className="text-white" /> : <MinusSquare size={16} className="text-white" />}
          </button>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Fermer le chat"
          >
            <X size={16} className="text-white" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-black">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'bg-white text-black'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-50 mt-1 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-100 text-gray-900 rounded-2xl px-3 py-2 border border-white">
                  <p className="text-sm">En train de taper...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
                aria-label="Envoyer"
                disabled={!inputMessage.trim() || isTyping}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
