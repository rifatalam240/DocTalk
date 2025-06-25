import React, { useEffect, useState } from "react";
import { LuBookHeart } from "react-icons/lu";

const Blogs = () => {
  const [blogdata, setBlogdata] = useState([]);
  useEffect(() => {
    fetch("/blogdata.json")
      .then((res) => res.json())
      .then((data) => setBlogdata(data));
  }, []);

  return (
    <div>
      <p className="text-center py-3 lg:text-3xl font-bold">Blogs</p>
      <p className="text-gray-600 text-center p-2">Let's explore some basic concept that will make you good developer</p>
      <div className="space-y-4 py-2 px-3 rounded-3xl">
        {blogdata.map((blog, id) => {
          const { question, answer, date } = blog;
          return (
            <div key={id} className="bg-white shadow-2xl  rounded-3xl p-3 ">
              <p className="font-semibold text-[10px] border-b border-gray-300 border-dashed mb-2 mt-4 py-2">
                {question}?
              </p>
              <p className="text-blue-700 text-[12px] pt-2">Answer:</p>
              <p className="pb-2 text-gray-600 text-[10px]  border-b border-gray-300 border-dashed mb-2">
                {answer}
              </p>
              <p className="flex items-center text-gray-600 text-[12px]">
                <span>
                  <LuBookHeart />
                </span>
                Added at{date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
