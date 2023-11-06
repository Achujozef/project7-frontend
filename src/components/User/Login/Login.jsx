import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserloginUser } from "../../../action/User/UserloginAction";
import { setAuth } from "../../../action/User/UserauthAction";
// import { registerUserWithGoogle } from "../../../action/User/GoogleRegisterAction";
// import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode'

export default function LoginPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const responseGoogle = (response) => {
  //   console.log(response);
  // }
  // const logout = (response) => {
  //   console.log(response);
  // }

  // const googlelog=((res)=>{
  //     console.log(res.credential);
  //     let userdata= jwt_decode(res.credential);
  //     console.log("decoded in Loging Page",userdata);
  //     dispatch(registerUserWithGoogle(res.credential))
      
  // })
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(UserloginUser(user));
  };


  useEffect(() => {
    if (success) {
      navigate("/userhome");
      dispatch(setAuth());
    }
  }, [ success,navigate,dispatch]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-4">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          User Sign in to your account
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 border-gray-300 placeholder-gray-500 text-lg rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 border-gray-300 placeholder-gray-500 text-lg rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
               href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Don't have an account? Sign Up
                
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Logging in..." : "Sign in"}
            </button>
          </div>
        </form>
        <div className="">
      {/* <GoogleLogin
        shape="rectangular"
        useOneTap
        onSuccess={googlelog}
        onError={() => {
          console.log('Login Failed');
        }} 
      />; */}
      </div>

      </div>

    </div>
  );
}
