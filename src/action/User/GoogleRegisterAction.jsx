import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import useraxios from "../../useraxios";


export  const registerUserWithGoogle=createAsyncThunk(
    "register/registerUserWithGoogle",
    
    async(googleData)=>{
        const response = await useraxios.post("/api/users/register/google/", googleData);
        const data =await response.data;
        console.log("Iam here")
        if (response.status===200){
            console.log("Iam here and Sucess 200")
            console.log(data.token);
            localStorage.setItem("authToken",data.token);
            return jwt_decode(data.token)
        }else{
            throw new Error("Registration with Google OAuth failed")
        }
    }
)
// ... Other code for loginUser and setUser actions ...

const initialState={

}

const loginAction= createSlice({
    name:'login',
    initialState,
    reducers: {
        setUser: (state, action) => {
          state.user = action.payload;
          console.log(action.payload)
    
        },
        logout: (state) => {
          state.user = null;
          state.token = null;
          state.success = false
          localStorage.removeItem("authToken");
        },
      },
    // ... Other reducers and extraReducers ...
})

export const {setUser,logout}=loginAction.actions;
export default loginAction.reducer