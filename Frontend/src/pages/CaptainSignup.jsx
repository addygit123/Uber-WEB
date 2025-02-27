import React from "react";
import { useState } from "react";
import uberdriverlogo from "../assets/uber-driver.png";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userData, setUserData] = useState({});
    const submitHandler = (e) => {
      e.preventDefault();
      const NewUserData = {
        email: email,
        password: password,
        fullName: {
          firstName: firstName,
          lastName: lastName,
        },
      };
      setUserData(NewUserData);

      // console.log(userData);
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    };
    return (
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img className="w-20 mb-10 " src={uberdriverlogo} alt="" />
          <form onSubmit={submitHandler}>
            <h3 className="text-base mb-2 font-medium">What's your name?</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                className="text-base placeholder:text-sm bg-[#ededed]  rounded px-4 py-2x w-1/2 "
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
              />
              <input
                required
                className="text-base placeholder:text-sm bg-[#ededed]  rounded px-4 py-2 w-1/2 "
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
              />
            </div>
            <h3 className="text-base mb-2 font-medium">What's your email</h3>
            <input
              required
              className="text-base placeholder:text-sm bg-[#ededed] mb-6 rounded px-4 py-2 w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <h3 className="text-base mb-2 font-medium">Enter Password</h3>
            <input
              type="text"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-base placeholder:text-sm bg-[#ededed] mb-6 rounded px-4 py-2 w-full"
            />
            <button className="bg-[#111] font-semibold text-white mb-3 rounded py-2 px-4 border w-full">
              Signup
            </button>
          </form>
          <p className="text-center font-medium">
            Already have an account?{" "}
            <Link to="/captain-login" className="mb-3 text-blue-600">
              Login Here
            </Link>
          </p>
        </div>
        <p className="text-[10px] leading-tight">
          This page is protected by reCAPTCHA to ensure security and prevent
          abuse. Google’s{" "}
          <Link
            to="https://policies.google.com/privacy"
            className="underline text-blue-700"
          >
            {" "}
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            className="underline text-blue-700"
            to="https://policies.google.com/terms"
          >
            Terms of Service
          </Link>{" "}
          apply.
        </p>
        <div></div>
      </div>
    );
  }
};

export default CaptainSignup;
