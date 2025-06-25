import React from "react";
import Navbar from "./Navbar";
import { CiCirclePlus } from "react-icons/ci";
import { NavLink } from "react-router";

const Errorpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center py-8 gap-y-3 bg-white shadow-2xl rounded-3xl mx-5 mt-2">
        <p className="font-bold text-2xl">No Doctor Found!!</p>
        <p className="text-gray-600 text-[16px]">
          No Doctor Found with this registration No-
        </p>
        <p className="font-semibold flex items-center gap-x-2">
          <CiCirclePlus className="font-bold" />
          BD-dvfgrhhftddf{" "}
        </p>
        <NavLink
          className="bg-blue-800 text-white text-[12px] py-2 px-3 rounded-xl"
          to="/"
        >
          View All Doctors
        </NavLink>
      </div>
    </div>
  );
};

export default Errorpage;
