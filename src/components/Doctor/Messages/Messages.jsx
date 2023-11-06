import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Leftnav from '../LeftNav/Leftnav';

function ChatComponent() {

  const users = [
    {
      id: 1,
      name: 'User 1',
      avatar: 'user1-avatar.jpg',
      messages: [
        { text: 'Hello!', timestamp: '2023-09-01T08:00:00Z', unread: true },
        { text: 'Hi there!', timestamp: '2023-09-01T08:05:00Z', unread: false },
      ],
    },
    {
      id: 2,
      name: 'User 2',
      avatar: 'user2-avatar.jpg',
      messages: [
        { text: 'Hey!', timestamp: '2023-09-02T10:00:00Z', unread: true },
      ],
    },

  ];

  return (
    <div className='w-3/4 h-screen bg-green-100 flex flex-col items-center'>
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <div className="w-3/4 max-w-screen-xl space-y-4 p-4"> 
        {users.map((user) => (
          <Link 
            key={user.id}
            to={`/Chat`} 
          >
            <div
              className="bg-white p-4 rounded-lg flex items-center justify-between shadow-md cursor-pointer mb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{user.name}</h3>
                  <p className="text-gray-500">
                    {user.messages.length > 0
                      ? user.messages[user.messages.length - 1].text
                      : 'No messages yet'}
                  </p>
                </div>
              </div>
              {user.messages.some((message) => message.unread) && (
                <div className="bg-blue-500 text-white px-2 py-1 rounded-full">
                  {user.messages.filter((message) => message.unread).length}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChatComponent;
