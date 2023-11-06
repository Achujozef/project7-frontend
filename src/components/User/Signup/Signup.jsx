import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserAsync } from "../../../action/User/UserregisterAction";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const { loading, success, error } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handlePhoneNumberChange = (event) => {
    const phonenumberValue = event.target.value;
    setPhonenumber(phonenumberValue);

    // Regular expression for validating a phone number
    const phoneNumberRegex = /^\d{10}$/;

    if (phoneNumberRegex.test(phonenumberValue)) {
      setPhoneNumberError(false);
    } else {
      setPhoneNumberError(true);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      phonenumber,
      password,
    };
    dispatch(saveUserAsync(user));
  };

  useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setPassword("");
      navigate("/userlogin");
    }
  }, [success, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-4">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign up
        </h2>
        <form className="mt-8 space-y-6" onSubmit={HandleSubmit}>
          {error && (
            <div style={{ color: "red" }}>
              {Object.values(error).map((value) => (
                <p key={value}>{value}</p>
              ))}
            </div>
          )}
          <div>
            <input
              autoComplete="given-name"
              name="fullName"
              required
              className="appearance-none w-full px-3 py-2 border rounded-md text-gray-900 border-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              required
              className="appearance-none w-full px-3 py-2 border rounded-md text-gray-900 border-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Phone Number"
              type="tel"
              value={phonenumber}
              onChange={handlePhoneNumberChange}
              error={phoneNumberError}
            />
            {phoneNumberError && (
              <p className="text-red-500">Please enter a valid phone number</p>
            )}
          </div>
          <div>
            <input
              required
              className="appearance-none w-full px-3 py-2 border rounded-md text-gray-900 border-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              required
              className="appearance-none w-full px-3 py-2 border rounded-md text-gray-900 border-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
