import React from 'react'
import Avatar from "@mui/material/Avatar";


import { useEffect, useState } from 'react'
// import Logout from '../Login/Logout'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../action/User/UseruserAction';
import mylogo from '../../../images/mylogo.jpg'
import Logout from '../Logout/Logout';


export default function Leftnav() {
    const navigate = useNavigate()
    const user = useSelector(state=>state.userlogin.patient)

    const users = useSelector((state)=>state.userusers)
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {

      dispatch(fetchUser(user.id));
    }, []);
    useEffect(() => {

      setName(users.name);
      setImage(users.image);
    }, [users]);
    const handleButtonClick = (buttonName) => {
      switch (buttonName) {
        case "Home":
          navigate("/userhome");
          break;
        case "Doctors":
          navigate("/DoctorList");
          break;
        case "MyClient":
          navigate("/DoctorProfilepage");
          break;
        case "DoctorTimeSlot":
          navigate("");
          break;
        case "EarningsPage":
          navigate("");
          break;
        case "MessagesPage":
          navigate("");
          break;
      }
    };
  return (
    <div className='w-1/4 p-4 bg-gray-100'>
    
    <div className='flex items-center justify-between'>
        <img src={mylogo} alt="Logo" className="m-4 h-80" style={{ borderRadius: '500%' }} />


        
      </div>

        <div className='p-4  flex flex-col justify-center ' >
        
                <div className='my-2 p-2 rounded-md  bg-white hover:bg-green-600 cursor-pointer'>
                <Avatar src={image}></Avatar>
                  <button onClick={()=>handleButtonClick("Home")}>
                   <h1 className='my-2 p-2 rounded-md  bg-white hover:bg-gray-200 border cursor-pointer text-xl font-semibold mb-4'>Welcome {name}</h1>
                   </button>
                </div>
        
                <button
                className='my-2 p-2 rounded-md  bg-white hover:bg-green-600 border cursor-pointer'
                onClick={()=>handleButtonClick("MyClient")}
                ><h1 className='text-xl font-semibold mb-4'>My Diet</h1></button>
                <button
                className='my-2  p-2 rounded-md  bg-white hover:bg-green-600 border cursor-pointer'
                onClick={()=>handleButtonClick("Item !")}
                ><h1 className='text-xl font-semibold mb-4'>Messages</h1></button>
                <button
                className='my-2 p-2 rounded-md bg-white hover:bg-green-600 border cursor-pointer'
                onClick={()=>handleButtonClick('Doctors')}
                ><h1 className='text-xl font-semibold mb-4'>Doctors</h1></button>
                   <button
                className='my-2 p-2 rounded-md bg-white hover:bg-green-600 border cursor-pointer'
                onClick={()=>handleButtonClick("Item !")}
                ><h1 className='text-xl font-semibold mb-4'>Communities</h1></button>
                   <button
                className='my-2 p-2 rounded-md bg-white  hover:bg-green-600 border cursor-pointer'
                onClick={()=>handleButtonClick("Item !")}
                ><h1 className='text-xl font-semibold mb-4'>Settings</h1></button>
                   <button
                className='my-2 p-2 rounded-md bg-white   hover:bg-green-600 border cursor-pointer'
                onClick={()=>handleButtonClick("Item !")}
                ><h1 className='text-xl font-semibold mb-4'>Contact Us</h1></button>
 
        </div>

<Logout/>
    </div>
  )
}
