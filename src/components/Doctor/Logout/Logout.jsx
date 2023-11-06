import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../../../action/Doctor/authAction';
import { logout } from '../../../action/Doctor/loginAction';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(logout());
      dispatch(clearAuth());
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="w-1/4 p-4 bg-gray-200">
      <p>RightNotification</p>
      <button
        className="my-2 p-2 rounded-md hover:bg-blue-200 border cursor-pointer bg-yellow-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
