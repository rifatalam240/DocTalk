import React, { useState } from "react";
import { Link, useParams } from "react-router";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useDoctorContext } from "../context/DoctorsProvider";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineRunningWithErrors } from "react-icons/md";

const DoctorsDetails = () => {
  // const [isAvailable, setIsAvailable] = useState(false);
  const { id } = useParams();
  const { doctors, isDoctorsLoading, updatedoctordata } = useDoctorContext();

  if (isDoctorsLoading) {
    return <div className="text-center text-xl py-10">Loading...</div>;
  }
  console.log({ doctors, id, isDoctorsLoading });
  const singleData = doctors.find((doctor) => doctor.registrationNumber === id);

  const {
    education,
    image,
    name,
    registrationNumber,
    workplace,
    fee,
    availability,
    isAvailable,
  } = singleData;

  const handleclick = () => {
    if (singleData.isAppointed) {
      toast(
        <div className="flex gap-x-2 items-center justify-center">
          <MdOutlineRunningWithErrors className="text-red-500 text-2xl" />
          <span className="text-red-300 font-bold">
            Appointment already scheduled for today
          </span>
        </div>
      );
    } else {
      toast(`Appointment successfully ${name}`);
    }
    updatedoctordata(id, true);
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-4 px-6 shadow-2xl bg-white rounded-3xl my-4 mx-5">
        <p className="md:text-2xl font-bold mb-2 ">Doctor’s Profile Details</p>
        <p className="text-[10px] text-gray-600">
          "Our expert doctors, with years of experience and diverse specialities
          like Dermatology, Cardiology, and Pediatrics, offer professional
          <br />
          consultations and treatments. Trust their expertise for reliable
          healthcare at leading hospitals."
        </p>
      </div>
      <div className="flex  items-center bg-white flex-col lg:flex-row shadow-2xl py-3 lg:px-5 px-0  rounded-2xl mx-5">
        <div className="m-0 lg:ml-4">
          <img
            className="md:w-[300px] w-[400px] h-[250px] rounded-3xl"
            src={image}
            alt=""
          />
        </div>
        <div className=" ml-4">
          <p className="text-sm md:text-xl font-bold mb-2">{name}</p>
          <p className="text-gray-600 text-[12px] mb-2">{education}</p>
          <p className="text-gray-600 text-[12px] mt-4">Working at</p>
          <p className="font-bold mb-3">{workplace}</p>
          <p className="text-gray-600 text-[12px]">
            Reg No: {registrationNumber}
          </p>
          <div className="flex items-center gap-x-1 md:gap-3 mt-3">
            <span className=" font-semibold md:font-bold">Availability:</span>
            {availability.map((available, id) => (
              <p
                key={id}
                className="ml-4 bg-orange-100 text-[#FFA000] text-[10px] py-1 md:px-3 px-1 rounded-3xl"
              >
                {available}
              </p>
            ))}
          </div>
          <p className="mt-3">
            Consultation Fee : <span className="text-blue-700"> {fee}</span>
            <span className="text-blue-700 ml-2">Taka (including Vat)</span>
          </p>
        </div>
      </div>
      <div className=" space-y-5 py-5 my-5 bg-white shadow-2xl rounded-3xl mx-5 ">
        <p className="font-bold md:text-xl text-center">Book an Appointment</p>
        <div className="flex justify-between items-center border border-gray-200 md:ml-56 border-dashed rounded-3xl lg:w-[800px] px-5  py-1">
          <p className="md:font-bold font-semibold text-[12px] md:text-2xl">
            Availability
          </p>
          {isAvailable ? (
            <p className="bg-green-100 text-green-600 rounded-3xl py-1 text-[12px] px-3">
              Doctor Available Today
            </p>
          ) : (
            <p className="bg-red-100 text-red-600 rounded-3xl py-1 text-[12px] px-3">
              Doctor not Available Today
            </p>
          )}
        </div>
        <p className="lg:ml-64 lg:py-2 py-4  rounded-3xl bg-red-100 text-red-900 md:text-center text-[10px] px-3 lg:w-[730px] flex  items-center justify-center">
          <p className="me-2">
            <MdOutlineErrorOutline size={10} />
          </p>{" "}
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>
        {singleData.isAppointed ? (
          <button
            // disabled={singleData.isAppointed}
            onClick={handleclick}
            className="ml-24 px-2 bg-blue-700 text-white md:w-[600px]  py-1 rounded-3xl lg:w-[1030px]"
          >
            Book Appointment Now
          </button>
        ) : (
          <Link to="/booking" className="cursor-pointer">
            <button
              // disabled={singleData.isAppointed}
              onClick={handleclick}
              className="ml-24 px-2 bg-blue-700 text-white md:w-[600px] py-1 rounded-3xl lg:w-[1030px]"
            >
              Book Appointment Now
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DoctorsDetails;
