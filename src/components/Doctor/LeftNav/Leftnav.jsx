import React from "react";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import Logout from "../Logout/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../action/Doctor/userAction";

export default function Leftnav() {


  const navigate = useNavigate();
  const user = useSelector((state) => state.login.user);
  const users = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUser(user.id));
  }, [user.id]);



  useEffect(() => {
    setName(users.name);
    setImage(users.image);
  }, [users]);



  const handleButtonClick = (buttonName) => {
    switch (buttonName) {
      case "Home":
        navigate("/");
        break;
      case "Appointment":
        navigate("/Appointment");
        break;
      case "MyClient":
        navigate("/Myclient");
        break;
      case "DoctorTimeSlot":
        navigate("/DoctorTimeSlot");
        break;
      case "EarningsPage":
        navigate("/EarningsPage");
        break;
      case "MessagesPage":
        navigate("/MessagesPage");
        break;
    }
  };

  
  return (
    <div className="w-1/4 h-screen bg-rose-300 shadow-lg">
      <div className="p-4 h-800 flex flex-col items-center justify-between">
        <div className="mb-8">
          <div className="mb-4">
            <Avatar src={image} sx={{ width: 280, height: 280 }} />
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Dr .{name}</h1>
        </div>
        <div className="space-y-2">
          <button
            className="w-full py-2 px-4 rounded-full bg-white hover:bg-green-800 text-green-800 hover:text-white border border-green-800 hover:border-transparent transition duration-300"
            onClick={() => handleButtonClick("Home")}
          >
            Home
          </button>
          <button
            className="w-full py-2 px-4 rounded-full bg-white hover:bg-green-800 text-green-800 hover:text-white border border-green-800 hover:border-transparent transition duration-300"
            onClick={() => handleButtonClick("Appointment")}
          >
            Appointments
          </button>
          <button
            className="w-full py-2 px-4 rounded-full bg-white hover:bg-green-800 text-green-800 hover:text-white border border-green-800 hover:border-transparent transition duration-300"
            onClick={() => handleButtonClick("MyClient")}
          >
            My Clients
          </button>
          <button
            className="w-full py-2 px-4 rounded-full bg-white hover:bg-green-800 text-green-800 hover:text-white border border-green-800 hover:border-transparent transition duration-300"
            onClick={() => handleButtonClick("DoctorTimeSlot")}
          >
            Set My Free Slots
          </button>
          <button
            className="w-full py-2 px-4 rounded-full bg-white hover:bg-green-800 text-green-800 hover:text-white border border-green-800 hover:border-transparent transition duration-300"
            onClick={() => handleButtonClick("EarningsPage")}
          >
            My Earnings
          </button>
          <button
            className="w-full py-2 px-4 rounded-full bg-white hover:bg-green-800 text-green-800 hover:text-white border border-green-800 hover:border-transparent transition duration-300"
            onClick={() => handleButtonClick("MessagesPage")}
          >
            Message
          </button>
          <button
            className="w-full py-2 px-4 rounded-full bg-white hover:bg-green-800 text-green-800 hover:text-white border border-green-800 hover:border-transparent transition duration-300"
            onClick={() => handleButtonClick("Item !")}
          >
            Settings
          </button>
        </div>
        <Logout />
      </div>
    </div>
  );
}
