/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandCart from "../BranCart/BrandCart";
import { AuthContext } from "../../providers/AuthProvider";

const CardDetails = () => {
  const { user } = useContext(AuthContext);
  const cards = useLoaderData();
  // const [card, setCart] = useState(cards);

  const { name } = useParams();
  console.log(name);
  const filter = cards.filter((card) => card.brand == name);
  console.log(filter.map((item) => item._id));

  // console.log(cards);

  return (
    <div>
      <div className="bg-[url(https://i.ibb.co/YjygLnD/pexels-tyler-clemmensen-8375817-1.jpg)] bg-center bg-no-repeat bg-cover    lg:py-26 md:pt-44 pt-40">
        <div className="card-body flex items-center justify-center pb-36 ">
          <div>
            <h2 className=" justify-center card-title lg:text-5xl md:text-4xl text-base font-bold text-white">
              Car buying shaped to your life
            </h2>

            <div className="text-center mt-8 ">
              <input
                type="text"
                placeholder="Search here...."
                className="input bg-transparent border-slate-500   rounded-none rounded-l-lg md:w-80 sm:w-44 w-40"
              />
              <button className="bg-[#EA001E] rounded-r-lg text-white p-3 px-6">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        {filter.length ? (
          <div className="grid lg:grid-cols-4  grid-cols-1 mt-20 mb-10 gap-8 lg:px-0 px-10">
            {filter.slice(0, 4).map((item) => (
              <BrandCart key={item._id} item={item}></BrandCart>
            ))}
          </div>
        ) : (
          <div className=" my-20">
            <div className="text-4xl text-center font-bold">
              <span>No Data Found!!!</span>
              <span>
                <img
                  src="https://i.ibb.co/FHRthX9/cloud.png"
                  className="h-10 w-10 ml-3 inline"
                  alt=""
                />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
