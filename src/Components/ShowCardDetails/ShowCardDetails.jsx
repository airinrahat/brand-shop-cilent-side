/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ShowCardDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const detail = details.find((detail) => detail.id === idInt);
  console.log(detail);

  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="card my-10 card-side bg-base-100  flex justify-center items-center shadow-xl">
        <figure>
          <img src={detail.img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {detail.name}</h2>
          <h2 className="card-title">Brand Name : {detail.brandName}</h2>
          <p>Price : {detail.price}</p>
          <p>Rating : {detail.rating}</p>

          <div className="card-actions ">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCardDetails;
