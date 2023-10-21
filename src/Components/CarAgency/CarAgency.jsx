/* eslint-disable no-unused-vars */
import React from "react";

const CarAgency = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-5 py-16 lg:px-0 px-10">
      <p className="lg:text-2xl text-xl text-center">Best Car Agency</p>
      <h2 className="lg:text-5xl text-3xl font-bold text-center mb-10 mt-2">
        Why Only Choose Drivco
      </h2>
      <div className="grid lg:grid-cols-3 gap-10  grid-cols-1">
        <div className="card glass w-full shadow-xl border">
          <div className="card-body p-10">
            <h2 className="card-title text-xl font-bold ">
              {" "}
              <img src="/src/assets/affordable.svg" alt="" />
              <span className="text-[#EA001E] ml-2">Affordable</span> Price
            </h2>
            <p className="text-xl">
              An affordable price for a luxury car may be significantly higher
              than an affordable price for a budget car...
            </p>
          </div>
        </div>
        <div className="card glass w-full shadow-xl border">
          <div className="card-body p-10">
            <h2 className="card-title text-xl font-bold py-2 ">
              {" "}
              <img src="/src/assets/guarantee.svg" alt="" />
              Money Back
              <span className="text-[#EA001E] ml-2">Guarantee</span>
            </h2>
            <p className="text-xl">
              Some may offer a full refund with no questions asked, others may
              require the customer to provide...
            </p>
          </div>
        </div>
        <div className="card glass w-full shadow-xl border">
          <div className="card-body p-10">
            <h2 className="card-title text-xl font-bold py-2 ">
              {" "}
              <img src="/src/assets/warranty.svg" alt="" />8 Month
              <span className="text-[#EA001E] ">Warranty</span>
            </h2>
            <p className="text-xl">
              During this 8-month period, if the product fails to function
              properly due to a defect or malfunction...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAgency;
