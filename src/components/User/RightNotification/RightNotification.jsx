import React from 'react'
import { useNavigate } from 'react-router-dom';
import { clearAuth } from "../../../action/User/UserauthAction";
import { useDispatch } from 'react-redux';
import { userlogout } from '../../../action/User/UserloginAction';
import { GoogleLogout } from 'react-google-login';


	
export default function RightNotification() {
  const clientId="1088461503927-ksv9cft2vh6ced1f7kclk4jr6l37dcac.apps.googleusercontent.com"

    const dispatch = useDispatch()
    const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userlogout())
    dispatch(clearAuth());
    
  }
const notification=[
  {
    id: 1,
    type: 'message',
    content: 'New messages from doctors',
  },
  {
    id: 2,
    type: 'reminder',
    content: 'Diet time reminder',
  },
  {
    id: 3,
    type: 'post',
    content: 'New posts from followed doctors',
  },
  {
    id: 4,
    type: 'message',
    content: 'New messages from doctors',
  },
  {
    id: 5,
    type: 'reminder',
    content: 'Diet time reminder',
  },
  {
    id: 6,
    type: 'post',
    content: 'New posts from followed doctors',
  },
]

const clearNotifications =()=>{

}

  return (
    <div className=' w-1/4 p-4 bg-gray-100'>
    <h1 className='text-xl font-bold mb-4'> Notifications</h1>
    <div className='space-y-4'>
      {notification.map((notification) =>(
        <div key={notification.id} className='bg-white p-4 rounded-lg shadow-md'>
          {notification.type ==='message' && (
            <div className='text-blue-500'> Message:{notification.content}</div>
          )}
          {notification.type === 'reminder' && (
              <div className="text-green-500">Reminder: {notification.content}</div>
            )}
            {notification.type === 'post' && (
              <div className="text-indigo-500">New Post: {notification.content}</div>
            )}
        </div>
      ))}
    </div>
    <button
        className='my-4 p-2 rounded-md hover:bg-blue-200 border cursor-pointer bg-yellow-200'
        onClick={clearNotifications}
      >
        Clear Notifications
      </button>
    {/* <button
                    className='my-2 p-2 rounded-md hover:bg-blue-200 border cursor-pointer bg-yellow-200'
                    onClick={handleLogout}
                >
                    Logout
                </button>
                <div id="signOutButton">

                </div> */}
    </div>
  )
}
