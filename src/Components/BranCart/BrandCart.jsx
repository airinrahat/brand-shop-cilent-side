/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const BrandCart = ({ item }) => {
  const { _id, name, brand, description, category, price, rating, photo } =
    item;

  return (
    <div>
      <div>
        <div className="rounded h-full overflow-hidden shadow-lg ">
          <img className="w-[100%] h-52" src={photo} alt="" />
          <div className="p-3">
            <h3 className="text-xl mb-1">
              <b>Name</b> : {name}
            </h3>
            <h2 className="text-lg">
              <b>Brand Name</b> : {brand}
            </h2>
            <p>
              <b>Category Type</b> : {category}
            </p>
            <p>
              <b>Price</b> : {price}
            </p>
            <p>
              <b>Rating</b> :
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </p>

            <p className="text-gray-700 text-base">
              <b>Description</b> : {description.slice(0, 100)}
            </p>
          </div>

          <div>
            <div className="btn-group py-5 px-3  ">
              <Link to={`/updateCard/${_id}`}>
                <button className="btn bg-[#EA001E] text-white mr-2">
                  Update
                </button>
              </Link>

              <div>
                <Link to={`/btnDtails/${_id}`}>
                  <button className="btn bg-[#EA001E] text-white rounded-l-lg ">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCart;
