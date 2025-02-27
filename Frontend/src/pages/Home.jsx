import React from "react";
import uberlogo from "../assets/uberlogo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1604344865130-b8c0c7f6c9fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-screen  flex  justify-between flex-col w-full">
      <img className="w-24 pl-8 mt-5" src={uberlogo} alt="" />
      <div className="bg-white py-5 px-5 ">
        <h2 className="text-[23px] font-bold text-center ">
          Get Started With Uber
        </h2>
        <Link
          to="/login"
          className="flex justify-center items-center w-full bg-black text-white rounded py-3 mt-5"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
