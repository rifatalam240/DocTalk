import { useDoctorContext } from "../context/DoctorsProvider";
import React from "react";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineRunningWithErrors } from "react-icons/md";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Booking = () => {
  const { doctors, isDoctorsLoading, updatedoctordata } = useDoctorContext();
  const handlecancleappointed = (id) => {
    // toast("Appointment Cancelled");
    // const updatedoctor = doctors.map((item) =>
    //   item.registrationNumber === id ? { ...item, isAppointed: false } : item
    // );
    // setDoctors(updatedoctor);
    updatedoctordata(id, false);
  };

  if (isDoctorsLoading) {
    return <div className="text-center text-xl py-10">Loading...</div>;
  }

  const searchAppointed = doctors.filter((item) => item.isAppointed === true);

  const data1 = searchAppointed.map((item) => ({
    name: item.name,
    uv: item.fee,
  }));

  const maxFee = Math.max(...data1.map((item) => item.uv));

  const ChartComponent = () => {
    return (
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data1}
            margin={{ top: 40, right: 30, left: 20, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="7 9" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, maxFee + 200]} />
            <Bar
              dataKey="uv"
              shape={<TriangleBar />}
              label={{ position: "top", dy: -10 }}
            >
              {data1.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  if (searchAppointed.length === 0) {
    return (
      <div className="flex justify-center items-center gap-y-8 py-4 flex-col min-h-[81vh] lg:min-h-[50vh]">
        <p className="text-2xl font-bold  px-20">
          You Have Not Booked Any Appointment Yet
        </p>
        <p className="text-gray-700 text-[16px] px-20">
          Our platform contacts with verified,experienced doctors across various
          specialties-all at your convenience
        </p>
        <Link to="/">
          <button className="bg-blue-700 rounded-xl py-2 px-3 text-white font-bold">
            Book Appointment
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="p-6">
      <ChartComponent />

      <div className="mt-10 text-center">
        {searchAppointed.map((item) => (
          <div key={item.name} className="text-lg"></div>
        ))}
      </div>

      <div className="mt-10 bg-gray-100 p-6 rounded-xl shadow text-center">
        <h2 className="text-2xl font-semibold mb-4">My Today Appointments</h2>
        <p className="text-lg text-gray-700">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl border border-gray-300 shadow">
        <div className="grid grid-cols-1  gap-4 bg-white shadow-2xl py-4 rounded-3xl mx-5">
          {searchAppointed.map((doc) => (
            <div
              key={doc.name}
              className="flex flex-col justify-center items-center gap-y-3"
            >
              <div className="md:flex justify-between items-center lg:gap-x-[800px]">
                <h3 className="text-lg font-bold text-indigo-800">
                  {doc.name}
                </h3>

                <p className="text-gray-700 ">Fee: {doc.fee} taka +vat</p>
              </div>
              <p className="text-gray-700 lg:mr-[920px]">
                Education : {doc.education}
              </p>
              <button
                onClick={() => {
                  handlecancleappointed(doc.registrationNumber);
                  toast(
                    <div className="flex gap-x-2 items-center justify-center">
                      <MdOutlineRunningWithErrors className="text-red-500 text-2xl" />
                      <span className="text-red-300 font-bold">
                        Appointment Cancelled
                      </span>
                    </div>
                  );
                }}
                className="bg-red-200 text-red-600 font-bold py-1 lg:w-[800px] w-[200px] rounded-2xl"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <ToastContainer autoClose={4000} ></ToastContainer > */}
    </div>
  );
};

export default Booking;
