import React from "react";
import img from "../../public/assets/logo.png";
import { NavLink } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-white shadow-2xl md:py-10">
      <div className=" py-4 flex items-center justify-center">
        <div className="dropdown"></div>
        <img className="w-[20px]" src={img} alt="" />
        {/* <FaCirclePlus className="" /> */}
        <a className="text-xl">DocTalk</a>
      </div>
      <div className="navbar-center flex justify-center items-center lg:flex pb-2 lg:pb-3">
        <ul className="space-x-5 text-sm text-gray-500 flex justify-center items-center">
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
      <div className="flex justify-center items-center gap-x-3 mb-2 py-3 border-t border-gray-300 border-dashed ">
        <a
          className="bg-blue-700 p-1 rounded-full"
          href="https://www.facebook.com/profile.php?id=100058565890011"
        >
          <FaFacebookF className="text-white " />
        </a>

        <a
          className="bg-red-400 p-1 rounded-full"
          href="https://www.instagram.com/muhammadrifat240?igsh=YzljYTk1ODg3Zg=="
        >
          <FaSquareInstagram className="text-white" />
        </a>
        <a
          className="bg-purple-700 p-1 rounded-full"
          href="https://www.linkedin.com/in/md-jaber-hossain-chowdhury-543335252/"
        >
          <FaLinkedin className=" text-white shadow" />
        </a>
        <a
          className="bg-green-900 p-1 rounded-full"
          href="https://x.com/Rifatalam240?t=iVbtCbNZ9u7bInYGUsIhzQ&s=07"
        >
          <FaTwitter className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
