import React from "react";
import doctor from "../../public/assets/success-doctor.png";
import patient from "../../public/assets/success-patients.png";
import review from "../../public/assets/success-review.png";
import staff from "../../public/assets/success-staffs.png";
import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa6";
const Count = () => {
  const data = [
    {
      id: 1,
      title: "Total Doctors",
      count: 100,
      image: doctor,
    },
    {
      id: 2,
      title: "Total Reviews",
      count: 467,
      image: review,
    },
    {
      id: 3,
      title: "Total Patients",
      count: 1900,
      image: patient,
    },
    {
      id: 4,
      title: "Total Staffs",
      count: 300,
      image: staff,
    },
  ];

  return (
    <div>
      <p className="text-center font-semibold md:font-bold text-[12px] md:text-2xl">
        We Provide Best Medical Services
      </p>
      <p className="text-center text-[10px] text-gray-600">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>

      <div className="w-full flex justify-center items-center gap-x-9 flex-wrap my-2 lg:my-7">
        {data.map((singledata) => {
          const { id, title, count, image } = singledata;
          return (
            <div
              key={id}
              className="bg-white shadow-2xl w-[150px] h-[160px] rounded-3xl p-2 space-y-2 mb-2 pl-4 py-3"
            >
              <img src={image} alt="" />
              <div className="flex items-center gap-x-2">
                <CountUp
                  className="font-bold text-3xl"
                  enableScrollSpy
                  end={count}
                  duration={5}
                />
                <FaPlus className="font-bold text-2xl" />
              </div>
              <p className="text-gray-600 text-[12px]">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Count;
