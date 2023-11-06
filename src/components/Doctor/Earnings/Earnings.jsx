import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Earnings() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDownloadReport = () => {

  };

  const handleWithdrawal = () => {

  };

  return (
    <div className='w-3/4 h-screen p-20 bg-green-100 flex flex-col items-center'>
      <h2 className="text-3xl font-bold mb-4">My Earnings</h2>
      

      <div className="mb-6">
        <label className="block text-gray-600">Select Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          className="border p-2 rounded-md"
        />
        {selectedDate && (
          <p className="mt-2">Selected Date: {selectedDate.toDateString()}</p>
        )}
      </div>


      {selectedDate && (
        <div className="mb-6">
          <p className="text-xl font-bold">Earnings for {selectedDate.toDateString()}</p>

        </div>
      )}


      <button
        onClick={handleDownloadReport}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Download Report
      </button>


      <div className="mb-6">
        <p className="text-xl font-bold">Total Account Balance:  ₹ 89768</p>

      </div>


      <button
        onClick={handleWithdrawal}
        className="bg-red-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Withdraw
      </button>


      <div className="flex justify-center space-x-4">
        <button className="bg-gray-400 text-white px-4 py-2 rounded-md">
          Option 1
        </button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded-md">
          Option 2
        </button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded-md">
          Option 3
        </button>
      </div>


      <div className="mt-8 p-4 border border-gray-300 rounded-md">
        <h3 className="text-xl font-bold mb-2">Terms and Conditions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultrices tristique odio, id euismod leo laoreet et.
        </p>
    
      </div>
    </div>
  );
}

export default Earnings;
