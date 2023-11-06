import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './Doctor/authAction';
import loginSlice from './Doctor/loginAction'
import userSlice from './Doctor/userAction'
import slotReducer from './Doctor/slotActions'; 
import fetchDoctorPosts  from "./Doctor/postActions";
import UserauthSlice from './User/UserauthAction'
import userloginSlice from './User/UserloginAction'
import UseruserSlice from './User/UseruserAction'
import registerSlice from './User/UserregisterAction'
const rootReducer = combineReducers({
  auth: authSlice,
  login:loginSlice,
  users:userSlice,
  
  slots: slotReducer,
  posts: fetchDoctorPosts ,

  userauth:UserauthSlice,
  userlogin:userloginSlice,
  userusers:UseruserSlice,
  register:registerSlice,
});

export default rootReducer;
