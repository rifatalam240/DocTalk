import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import DoctorsProvider from "../context/DoctorsProvider";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const [loading, setLoading] = useState(true);

  const currentroute = useLocation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [currentroute]);

  const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  };
  useEffect(() => {
    document.title = "Doc-Talk";
  }, []);
  return (
    <div className="bg-[#ecf0f5]">
      <Navbar></Navbar>
      <DoctorsProvider>
        {loading ? <LoadingSpinner /> : <Outlet />}
      </DoctorsProvider>
      <Footer></Footer>
    </div>
  );
};

export default Root;
