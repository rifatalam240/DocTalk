import React from "react";
import img1 from "../../public/assets/banner-img-1.png";

const Banner = () => {
  return (
    <div className=" border-l-2 border-l-white text-center lg:w-[900px] rounded-2xl mx-auto shadow-2xs  bg-gradient-to-t from-white via-white/50 to-white/30 md:py-4">
      <p className="text-sm md:text-2xl lg:text-3xl font-bold mt-5">
        Dependable Care, Backed by Trusted <br />
        Professionals.
      </p>
      <p className="text-sm text-gray-400 mt-5 px-3">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>
      <form className="space-x-2 mt-5">
        <input
          className="border border-gray-400 bg-white rounded-3xl py-1 md:py-2 px-3 w-[200px] lg:w-[550px]"
          type="text"
          placeholder="Search any doctor..."
        />
        <button
          type="submit"
          className="bg-blue-600 rounded-3xl p-1 md:py-2 md:px-3 text-white font-bold"
        >
          Search Now
        </button>
      </form>
      <div className="p-2 md:flex gap-5 justify-center items-center mt-5 space-y-1">
        <img className="rounded-2xl md:w-[250px] lg:w-[400px]" src={img1} alt="" />
        <img className=" rounded-2xl md:w-[250px] lg:w-[400px]" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Banner;
