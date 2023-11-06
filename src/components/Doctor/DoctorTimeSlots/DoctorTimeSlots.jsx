import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSlots } from '../../../action/Doctor/slotActions'

export default function DoctorSlots() {
  const [day, setDay] = useState('today');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const slots = useSelector((state) => state.slots.slots);

  const handleAddSlots = async () => {
    try {
      const newSlots = [];
      let currentTime = startTime;
      while (currentTime < endTime) {
        newSlots.push(currentTime);
        currentTime = addMinutes(currentTime, 20);
      }
      await dispatch(addSlots({day,newSlots,user}));

      setStartTime('');
      setEndTime('');
    } catch (error) {
      console.error('Error adding slots:', error);
    }
  };
const addMinutes = (time, minutesToAdd) => {
  const [hour, minute] = time.split(':');
  let totalMinutes = parseInt(hour, 10) * 60 + parseInt(minute, 10);
  totalMinutes += minutesToAdd;
  const newHour = Math.floor(totalMinutes / 60);
  const newMinute = totalMinutes % 60;
  return `${String(newHour).padStart(2, '0')}:${String(newMinute).padStart(2, '0')}`;
};

  return (
<div className='w-3/4 h-screen p-20 bg-green-100 flex flex-col items-center'>
  <h1 className="text-3xl font-bold mb-6">Set Free Time Slots</h1>
  <div className="mb-6">
    <label htmlFor="day" className="block text-lg font-medium text-gray-700 mb-2">
      Select Day:
    </label>
    <select
      id="day"
      value={day}
      onChange={(e) => setDay(e.target.value)}
      className="mt-2 block w-full pl-4 pr-12 py-3 text-xl border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md"
    >
      <option value="today">Today</option>
      <option value="tomorrow">Tomorrow</option>
    </select>
  </div>
  <div className="mb-6">
    <label htmlFor="startTime" className="block text-lg font-medium text-gray-700 mb-2">
      Start Time:
    </label>
    <input
      type="time"
      id="startTime"
      value={startTime}
      onChange={(e) => setStartTime(e.target.value)}
      className="mt-2 block w-full pl-4 pr-12 py-3 text-xl border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md"
    />
  </div>
  <div className="mb-6">
    <label htmlFor="endTime" className="block text-lg font-medium text-gray-700 mb-2">
      End Time:
    </label>
    <input
      type="time"
      id="endTime"
      value={endTime}
      onChange={(e) => setEndTime(e.target.value)}
      className="mt-2 block w-full pl-4 pr-12 py-3 text-xl border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md"
    />
  </div>
  <button
    onClick={handleAddSlots}
    className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white py-4 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-xl font-semibold"
  >
    Save
  </button>
  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4">Available Slots:</h2>
    <ul>
      {slots.map((slot, index) => (
        <li key={index} className="text-gray-700 text-xl">{slot}</li>
      ))}
    </ul>
  </div>
</div>

  );
}
