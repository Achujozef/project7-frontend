import React from 'react';

export default function Appointment() {
  const appointment = [
    {
      id: 1,
      time: '09:00 AM',
      clientName: 'John Doe',
      status: 'Scheduled',
    },
    {
      id: 2,
      time: '10:30 AM',
      clientName: 'Jane Smith',
      status: 'In Progress',
    },
    {
      id: 3,
      time: '02:15 PM',
      clientName: 'Alice Johnson',
      status: 'Completed',
    },
    {
      id: 4,
      time: '02:15 PM',
      clientName: 'Alice Johnson',
      status: 'Completed',
    },
    {
      id: 5,
      time: '02:15 PM',
      clientName: 'Alice Johnson',
      status: 'Completed',
    },
    {
      id: 6,
      time: '02:15 PM',
      clientName: 'Alice Johnson',
      status: 'Completed',
    },
    {
      id: 7,
      time: '02:15 PM',
      clientName: 'Alice Johnson',
      status: 'Completed',
    },
    {
      id: 8,
      time: '02:15 PM',
      clientName: 'Alice Johnson',
      status: 'Completed',
    },
    {
      id: 9,
      time: '02:15 PM',
      clientName: 'Alice Johnson',
      status: 'Completed',
    },
  ];

  return (
    <div className='w-3/4 h-screen p-20 bg-green-100 flex flex-col items-center'>
      <h1 className='text-2xl font-semibold text-green-800 mb-4'>
        Today's Appointments for Online Consulting
      </h1>
      <div className='grid grid-cols-5 gap-4'>
        {appointment.map((appointment) => (
          <div
            key={appointment.id}
            className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center'>
            <p className='text-xl font-semibold'>{appointment.time}</p>
            <p className='text-gray-600'>{`Client: ${appointment.clientName}`}</p>
            <p
              className={`text-${
                appointment.status === 'Completed' ? 'green' : 'blue'
              }-600 font-semibold`}>
              {appointment.status}
            </p>
            <div className='space-x-2'>
              <button className='py-2 px-4 rounded-full flex items-center text-blue-600 hover:underline'>
                View Profile
              </button>
              <button className='text-blue-600 hover:underline'>
                Start Consultation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
