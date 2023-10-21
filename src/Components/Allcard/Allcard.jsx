/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Allcard = ({ card }) => {
  const { id, brandName, name, img } = card;

  return (
    <div>
      <Link to={`/card/${name}`}>
        <div className="block  rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg w-[100%]  " src={img} alt="" />
          </div>
          <div className="p-6">
            <p className=" text-4xl font-bold text-neutral-600 dark:text-neutral-200">
              {brandName}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Allcard;
