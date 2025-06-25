import { useEffect, useState, useContext, createContext } from "react";

const DoctorContext = createContext();

const DoctorsProvider = ({ children }) => {
  const [doctors, setDoctors] = useState(() => {
    const savedDoctors = localStorage.getItem("doctors");
    return savedDoctors ? JSON.parse(savedDoctors) : [];
  });
  const [isDoctorsLoading, setIsDoctorsLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  const checkAvailable = (availability) => {
    let result = false;
    const today = new Date().toDateString().split(" ")[0].toUpperCase();

    for (let day of availability) {
      if (day.slice(0, 3).toUpperCase() === today) {
        result = true;
      }
    }

    return result;
  };

  useEffect(() => {
    if (doctors.length > 0) {
      localStorage.setItem("doctors", JSON.stringify(doctors));
    }
  }, [doctors]);

  useEffect(() => {
    if (!hasFetched && doctors.length === 0) {
      const fetchData = async () => {
        setIsDoctorsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await fetch("../data.json");
        // const response = await fetch();
        // "https://gist.githubusercontent.com/JaberChowdhury/b2e5e5133c35977f11b85cf11d5b3777/raw/9556eb0d688dc880507d66aac8f01c8eb75c1ca6/gistfile1.txt"
        const data = await response.json();
        setDoctors(data);
        setIsDoctorsLoading(false);
        setHasFetched(true);
        console.log("data fetched");
      };
      fetchData();
    } else {
      setIsDoctorsLoading(false);
    }
  }, [hasFetched, doctors]);
  useEffect(() => {
    const mappedData = doctors.map((item) => {
      return {
        ...item,
        isAvailable: checkAvailable(item.availability),
      };
    });
    setDoctors(mappedData);
  }, []);
  const updatedoctordata = (id, value) => {
    const updatedDoctors = doctors.map((item) =>
      item.registrationNumber === id ? { ...item, isAppointed: value } : item
    );
    setDoctors(updatedDoctors);
  };

  const value = { doctors, isDoctorsLoading, updatedoctordata, setDoctors };

  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
};

export default DoctorsProvider;

const useDoctorContext = () => {
  return useContext(DoctorContext);
};

export { useDoctorContext };
