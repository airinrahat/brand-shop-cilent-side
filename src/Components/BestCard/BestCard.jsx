/* eslint-disable no-unused-vars */
import React from "react";

const BestCard = () => {
  return (
    <div className="bg-[#000C21] text-white ">
      <div className="flex  justify-around items-center max-w-screen-xl mx-auto">
        <div>
          <p className="text-xl text-[#EA001E]  mb-2">Recommended Car</p>
          <h2 className="text-4xl font-bold ">Not Sure, Which Car is Best?</h2>
        </div>
        <div>
          <img src="/src/assets/recommended-img.png" alt="" />
        </div>

        <div>
          <h4 className="text-xl ">
            A car that is dependable and has a low risk <br></br> breakdowns is
            highly desirable.
          </h4>
          <button className="btn bg-[#EA001E] text-white mt-5 ">
            Show Me Best Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestCard;
