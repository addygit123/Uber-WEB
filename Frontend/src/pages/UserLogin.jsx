import React, { useState } from "react";
import uberlogo from "../assets/uberlogo.png";
import { Link } from "react-router-dom";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });
    console.log(userData.email, userData.password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 mb-10 " src={uberlogo} alt="" />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg mb-2 font-medium">What's your email</h3>
          <input
            required
            className="text-lg placeholder:text-base bg-[#ededed] mb-7 rounded px-4 py-2 w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            type="text"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-lg placeholder:text-base bg-[#ededed] mb-7 rounded px-4 py-2 w-full"
          />
          <button className="bg-[#111] font-semibold text-white mb-3 rounded py-2 px-4 border w-full">
            Login
          </button>
        </form>
        <p className="text-center font-medium">
          New Here?{" "}
          <Link to="/signup" className="mb-3 text-blue-600">
            Create an Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#ffef00] hover:bg-zinc-700 hover:text-[#ffef00] hover:bg-[#CCCC00] flex items-center justify-center font-semibold text-zinc-700 mb-7 rounded py-2 px-4 border w-full"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
