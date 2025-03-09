import React from "react";
import { useState, useContext } from "react";
import uberdriverlogo from "../assets/uber-driver.png";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        vehicleType: vehicleType,
        capacity: vehicleCapacity,
      },
    };
    // setUserData(NewUserData);

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    // console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
    setVehicleCapacity("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 mb-3" src={uberdriverlogo} alt="" />
        <form onSubmit={submitHandler}>
          <h3 className="text-base mb-2 font-medium">What's your name?</h3>
          <div className="flex gap-4 mb-3">
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
            className="text-base placeholder:text-sm bg-[#ededed] mb-3 rounded px-4 py-2 w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h3 className="text-base mb-1 font-medium">Enter Password</h3>
          <input
            type="text"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-base placeholder:text-sm bg-[#ededed] mb-3 rounded px-4 py-2 w-full"
          />
          <h3 className="text-base mb-2 font-medium">Vehicle Information</h3>
          <div className="flex gap-4 mb-3">
            <input
              required
              className="text-base placeholder:text-sm bg-[#ededed] rounded px-4 py-2 w-1/2"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type="text"
            />
            <input
              required
              className="text-base placeholder:text-sm bg-[#ededed] rounded px-4 py-2 w-1/2"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type="text"
            />
          </div>
          <div className="flex gap-4 mb-6">
            <select
              required
              className="text-base placeholder:text-sm bg-[#ededed] rounded px-4 py-2 w-1/2"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
            <input
              required
              className="text-base placeholder:text-sm bg-[#ededed] rounded px-4 py-2 w-1/2"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
            />
          </div>
          <button className="bg-[#111] font-semibold text-white mb-2 rounded py-2 px-4 border w-full">
            Create Captain Account
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
};

export default CaptainSignup;
