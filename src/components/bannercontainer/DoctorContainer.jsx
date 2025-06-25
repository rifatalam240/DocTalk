import React from "react";
import { NavLink } from "react-router";

const DoctorContainer = ({ singledata }) => {
  const { education, experience, image, name, registrationNumber } = singledata;
  return (
    <div className=" bg-white p-3 rounded-2xl">
      <img
        className="md:w-[300px] w-[410px] h-[250px] rounded-2xl"
        src={image}
        alt=""
      />
      <div className=" flex gap-3 mt-3">
        <button className="bg-green-100 text-green-600 py-1 px-3 font-semibold border border-green-800 rounded-2xl">
          available
        </button>{" "}
        <p className="bg-blue-100 text-blue-600 py-1  border border-blue-800 px-2 font-semibold rounded-2xl">
          {experience} Experience
        </p>
      </div>
      <p className="font-bold text-xl mt-2">{name}</p>
      <p className="text-gray-600 mt-1 text-[12px]">{education}</p>
      <p className="text-gray-600 mt-1 mb-2 text-[12px]">
        Reg No : {registrationNumber}
      </p>
      <NavLink
        to={`doctordetail/${registrationNumber}`}
        className=" text-blue-600 text-[12px] border border-blue-600 w-[400px]   bg-blue-100 px-2 py-1 rounded-3xl mt-2"
      >
        View Details
      </NavLink>
    </div>
  );
};

export default DoctorContainer;
