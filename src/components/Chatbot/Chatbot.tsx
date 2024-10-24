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
        <MessageCircle className="w-5 h-5 text-white" />
      </button>
    );
  }

  return (
    <div
      className={`fixed ${positionClass} bottom-4 w-[320px] ${
        isMinimized ? 'h-12' : 'h-[480px]'
      } bg-white rounded-lg shadow-xl transition-all duration-300 z-50 flex flex-col border border-gray-200`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 rounded-t-lg bg-black">
        <h3 className="text-sm text-white font-medium">{botName}</h3>
        <div className="flex gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 text-gray-400 hover:text-white transition-colors rounded"
          >
            {isMinimized ? <Maximize2 size={16} /> : <MinusSquare size={16} />}
          </button>
          <button
            onClick={handleClose}
            className="p-1 text-gray-400 hover:text-white transition-colors rounded"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 bg-white">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
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
          <div className="p-3 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black bg-white text-black"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 rounded-lg text-white bg-black hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputMessage.trim() || isTyping}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
