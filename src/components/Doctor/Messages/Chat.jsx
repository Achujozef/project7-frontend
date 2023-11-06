
import React, { useState, useRef, useEffect } from 'react';

function MessageListComponent() {
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'user' },
    { text: 'Hi there!', sender: 'other' },

  ]);

  const [newMessage, setNewMessage] = useState('');
  const chatAreaRef = useRef(null);

  useEffect(() => {

    chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div className='w-3/4 h-screen bg-green-100 flex flex-col items-center'>

      <div className="w-1/4 p-4 bg-white border-r border-gray-300">

      </div>


      <div className="w-3/4 p-4 bg-white">
        <div className="flex flex-col h-[800px]">

          <div className="p-2 bg-gray-200">
            <p className="text-xl font-bold">Chat with John</p>
          </div>


          <div
            ref={chatAreaRef}
            className="flex-1 overflow-y-auto p-4"
            style={{ maxHeight: 'calc(100% - 40px)' }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`bg-${
                    message.sender === 'user' ? 'green' : 'blue'
                  }-400 rounded-lg p-2 inline-block max-w-xs`}
                >
                  <p className="text-white">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 border-t border-gray-300">
            <div className="flex">
              <input
                type="text"
                className="flex-1 p-2 border rounded-full mr-2"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded-full"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageListComponent;
