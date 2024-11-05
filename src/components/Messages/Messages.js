import React, { useState, useEffect } from 'react';
import './Messages.css';

const initialMessages = [
  { id: 1, text: "Happy Birthday! Wishing you a day filled with love and laughter." },
  { id: 2, text: "Hope your birthday is as amazing as you are!" },
  { id: 3, text: "Cheers to many more wonderful years to come!" }
];

const Messages = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : initialMessages;
  });
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      const newEntry = { id: messages.length + 1, text: newMessage };
      setMessages([...messages, newEntry]);
      setNewMessage('');
    }
  };

  return (
    <div className="messages-container">
      <h2>Birthday Messages 💌</h2>
      <div className="messages-list">
        {messages.map((message) => (
          <div key={message.id} className="message-item">
            {message.text}
          </div>
        ))}
      </div>

      <div className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Write a birthday message..."
        />
        <button onClick={handleAddMessage}>Add Message</button>
      </div>
    </div>
  );
};

export default Messages;
