import React from "react";
import { NavLink } from "react-router";
import { FaCirclePlus } from "react-icons/fa6";
import img from "../../public/assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar md:px-16  mx-auto">
      <div className="navbar-start">
        {/* <div className="dropdown"></div> */}
        <img className="w-[16px] md:w-[20px]" src={img} alt="" />
        {/* <FaCirclePlus className="" /> */}
        <a className="text-[12px] lg:text-xl">DocTalk</a>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="md:space-x-5 text-sm text-gray-500 *:text-[10px] space-x-2 ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-green-800" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) => (isActive ? "text-green-800" : "")}
          >
            My-Bookings
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-green-800" : "")}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-green-800" : "")}
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="md:px-3 py-1 md:py-2 text-white md:font-bold bg-blue-600 px-2 text-[12px]  rounded-4xl">
          Emergency
        </button>
      </div>
    </div>
  );
};

export default Navbar;
