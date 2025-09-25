import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

// Utility function to detect URLs and emails in text
const detectLinksAndEmails = (text) => {
    // Enhanced URL regex that captures URLs but excludes trailing punctuation
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    // Function to clean URL by removing trailing punctuation
    const cleanUrl = (url) => {
        return url.replace(/[.,;:!?)\]}>\s]+$/, '');
    };

    const parts = [];
    let lastIndex = 0;

    // Find all URLs and emails
    const matches = [];

    // Find URLs
    let match;
    while ((match = urlRegex.exec(text)) !== null) {
        const cleanedUrl = cleanUrl(match[0]);
        matches.push({
            type: 'url',
            text: cleanedUrl,
            index: match.index,
            endIndex: match.index + match[0].length
        });
    }

    // Find emails
    emailRegex.lastIndex = 0; // Reset regex
    while ((match = emailRegex.exec(text)) !== null) {
        matches.push({
            type: 'email',
            text: match[0],
            index: match.index,
            endIndex: match.index + match[0].length
        });
    }

    // Sort matches by index
    matches.sort((a, b) => a.index - b.index);

    // Remove overlapping matches (prioritize URLs over emails)
    const filteredMatches = [];
    for (let i = 0; i < matches.length; i++) {
        const current = matches[i];
        const hasOverlap = filteredMatches.some(existing =>
            (current.index >= existing.index && current.index < existing.endIndex) ||
            (current.endIndex > existing.index && current.endIndex <= existing.endIndex)
        );

        if (!hasOverlap) {
            filteredMatches.push(current);
        }
    }

    // Build parts array
    filteredMatches.forEach(match => {
        // Add text before the match
        if (lastIndex < match.index) {
            parts.push({
                type: 'text',
                content: text.slice(lastIndex, match.index)
            });
        }

        // Add the link/email
        parts.push({
            type: match.type,
            content: match.text,
            url: match.type === 'email' ? `mailto:${match.text}` : match.text
        });

        lastIndex = match.endIndex;
    });

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push({
            type: 'text',
            content: text.slice(lastIndex)
        });
    }

    return parts.length > 1 ? parts : [{ type: 'text', content: text }];
};

// Component to render message content with clickable links
const MessageContent = ({ text }) => {
    const parts = detectLinksAndEmails(text);

    return (
        <div className="message-text">
            {parts.map((part, index) => {
                if (part.type === 'text') {
                    return <span key={index}>{part.content}</span>;
                } else if (part.type === 'url' || part.type === 'email') {
                    return (
                        <a
                            key={index}
                            href={part.url}
                            target={part.type === 'url' ? '_blank' : '_self'}
                            rel={part.type === 'url' ? 'noopener noreferrer' : undefined}
                            className={`message-link ${part.type}`}
                        >
                            {part.content}
                        </a>
                    );
                }
                return null;
            })}
        </div>
    );
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm here to help you. How can I assist you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState('web-session-' + Date.now());
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const windowRef = useRef(null);

    // Check if this is the first interaction (only initial bot message exists)
    const isFirstInteraction = messages.length === 1 && messages[0].sender === 'bot';

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && windowRef.current && !windowRef.current.contains(event.target) && !event.target.closest('.chatbot-toggle')) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleOptionClick = (optionText) => {
        setInputValue(optionText);
        sendMessage(optionText);
    };

    const sendMessage = async (messageText = null) => {
        const textToSend = messageText || inputValue;
        if (!textToSend.trim() || isLoading) return;

        const userMessage = {
            id: Date.now(),
            text: textToSend,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('https://ai.revennt.com/webhook/d4920b9e-7781-43c5-ad37-f17fbdd6353c/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chatInput: textToSend,
                    sessionId: sessionId
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            const botMessage = {
                id: Date.now() + 1,
                text: data.response || data.output || "I'm sorry, I couldn't process your request right now.",
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = {
                id: Date.now() + 1,
                text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const clearChat = () => {
        setMessages([
            {
                id: 1,
                text: "Hello! I'm here to help you. How can I assist you today?",
                sender: 'bot',
                timestamp: new Date()
            }
        ]);
        setSessionId('web-session-' + Date.now());
    };

    const closeChat = () => {
        setIsOpen(false);
    };

    return (
        <div className="chatbot-container">
            {/* Chat Button */}
            <button
                className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
                onClick={toggleChat}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            <div ref={windowRef} className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <div className="chatbot-title">
                        <div className="chatbot-avatar">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h3>AI Assistant</h3>
                            <p>Online</p>
                        </div>
                    </div>
                    <div className="chatbot-actions">
                        <button
                            className="chatbot-clear"
                            onClick={clearChat}
                            aria-label="Clear chat"
                            title="Clear chat"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            className="chatbot-close"
                            onClick={closeChat}
                            aria-label="Close chat"
                            title="Close chat"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="chatbot-messages">
                    {messages.map((message) => (
                        <div key={message.id} className={`message ${message.sender}`}>
                            <div className="message-content">
                                <MessageContent text={message.text} />
                                <div className="message-time">
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Initial option buttons - only show on first interaction */}
                    {isFirstInteraction && (
                        <div className="initial-options">
                            <button
                                className="option-button"
                                onClick={() => handleOptionClick("How can I schedule a demo")}
                            >
                                Schedule a Demo
                            </button>

                            <button
                                className="option-button"
                                onClick={() => handleOptionClick("Can it connect to my existing systems?")}
                            >
                                Can it connect to my existing systems?
                            </button> <button
                                className="option-button"
                                onClick={() => handleOptionClick("How fast can I get started?")}
                            >
                                How fast can I get started?
                            </button>
                            <button
                                className="option-button"
                                onClick={() => handleOptionClick("Is it secure and compliant?")}
                            >
                                Is it secure and compliant?
                            </button>





                        </div>
                    )}

                    {isLoading && (
                        <div className="message bot">
                            <div className="message-content">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chatbot-input">
                    <div className="input-container">
                        <textarea
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            rows="1"
                            disabled={isLoading}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!inputValue.trim() || isLoading}
                            className="send-button"
                            aria-label="Send message"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
