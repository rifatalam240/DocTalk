import React from "react";
import { NavLink } from "react-router";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 py-5 px-4">
      <div className="bg-white shadow-2xl rounded-3xl flex justify-center items-center w-[350px] h-[300px] mx-auto">
        {" "}
        <img
          className="w-[300px] h-[250px] rounded-3xl"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
          alt="404 Robot"
        />
      </div>

      <p className="text-2xl text-center text-red-500 font-bold">404 - Page Not Found</p>
      <p className="text-xl font-bold text-center">Oops! The Page You're Looking for doesn't exist</p>
      <NavLink to="/" className="bg-blue-700 rounded-xl py-2 px-3 text-white font-bold">Go Back Home</NavLink>
    </div>
  );
};

export default Contact;
