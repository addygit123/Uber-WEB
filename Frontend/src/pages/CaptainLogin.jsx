import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import uberdriverlogo from "../assets/uber-driver.png";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setcaptainData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setcaptainData({ email: email, password: password });
    console.log(captainData.email, captainData.password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 mb-10 " src={uberdriverlogo} alt="" />
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
          Want to join us?{" "}
          <Link to="/captain-signup" className="mb-3 text-blue-600">
            Create an Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#00FFFF] hover:bg-zinc-700 hover:text-[#00FFFF] flex items-center justify-center font-semibold text-zinc-700 mb-7 rounded py-2 px-4 border w-full"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
