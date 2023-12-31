/* eslint-disable no-unused-vars */
import React from "react";
import { FaFile, FaRegClock, FaUserFriends, FaUserTie } from "react-icons/fa";
import CountUp from "react-countup";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-24">
      <div className="counter-bg bg-fixed flex justify-center items-center">
        <div className="md:flex justify-between items-center text-center text-gray-50 bg-gray-700 bg-opacity-70 py-16 lg:px-56 px-16 gap-5">
          <div
            className="bg-gray-200 w-48 px-4 py-8 bg-opacity-30"
            data-aos="zoom-in-up"
            style={{ border: "4px solid gray-300" }}
          >
            <FaUserFriends className="text-4xl text-white inline"></FaUserFriends>
            <h2 className="text-2xl my-3">
              <CountUp start={0} end={1327} duration={15} />
            </h2>
            <h5 className="text-sm">STUDENTS</h5>
          </div>
          <div
            className="bg-gray-200 w-48 px-4 py-8 bg-opacity-30 md:my-0 my-5"
            data-aos="zoom-in-up"
            style={{ border: "4px solid gray-300" }}
          >
            <FaFile className="text-4xl text-white inline"></FaFile>
            <h2 className="text-2xl my-3">
              <CountUp start={0} end={36} duration={15} />
            </h2>
            <h5 className="text-sm">LEARNING CLASSES</h5>
          </div>
          <div
            className="bg-gray-200 w-48 px-4 py-8 bg-opacity-30"
            data-aos="zoom-in-up"
            style={{ border: "4px solid gray-300" }}
          >
            <FaUserTie className="text-4xl text-white inline"></FaUserTie>
            <h2 className="text-2xl my-3">
              <CountUp start={0} end={182} duration={15} />
            </h2>
            <h5 className="text-sm">INSTRUCTORS</h5>
          </div>
          <div
            className="bg-gray-200 w-48 px-4 py-8 bg-opacity-30 md:my-0 my-5"
            data-aos="zoom-in-up"
            style={{ border: "4px solid gray-300" }}
          >
            <FaRegClock className="text-4xl text-white inline"></FaRegClock>
            <h2 className="text-2xl my-3">
              <CountUp start={0} end={3} duration={15} />
            </h2>
            <h5 className="text-sm">DURATION MONTH</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
