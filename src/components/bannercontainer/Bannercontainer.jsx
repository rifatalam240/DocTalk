import React, { useState } from "react";
import Banner from "../Banner";
import DoctorContainer from "./DoctorContainer";
import { useDoctorContext } from "../../context/DoctorsProvider";

import Count from "../Count";

const Bannercontainer = () => {
  const [showall, setShowall] = useState(false);

  const { doctors, isDoctorsLoading } = useDoctorContext();
  if (isDoctorsLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-col justify-center items-center pt-5 mt-5">
        <p className="font-bold md:text-2xl ">Our Best Doctors</p>
        <p className="text-gray-600 text-[12px] px-2">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl md:py-4 md:px-10
       lg:mx-auto mt-2 md:gap-x-4 gap-y-1.5  md:gap-y-4 rounded-3xl "
      >
        {doctors.slice(0, showall ? 12 : 6).map((singledata, id) => (
          <DoctorContainer key={id} singledata={singledata}></DoctorContainer>
        ))}
      </div>
      <div className="flex justify-center items-center pb-4">
        <button
          onClick={() => setShowall(!showall)}
          className="py-2 px-3 bg-blue-600 text-white font-bold rounded-3xl mt-2 "
        >
          {showall ? "Less Show All Doctors" : "Show All Doctors"}
        </button>
      </div>
      <div>
        <Count></Count>
      </div>
    </div>
  );
};

export default Bannercontainer;
