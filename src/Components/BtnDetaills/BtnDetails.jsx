/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const BtnDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const MyCard = useLoaderData();
  const { _id, name, brand, description, category, price, rating, photo } =
    MyCard;

  const handleAddProduct = (event) => {
    event.preventDefault();

    const addToCart = {
      name: MyCard.name,
      brand: MyCard.brand,
      description: MyCard.description,
      category: MyCard.category,
      price: MyCard.price,
      rating: MyCard.rating,
      photo: MyCard.photo,
      email: user.email,
    };
    console.log(addToCart);

    fetch("https://brand-shop-server-side-beige.vercel.app/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "user add to cart successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-sm mx-auto my-8 rounded overflow-hidden shadow-lg lg:px-0 px-10">
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

          <div className="py-5">
            {/* <Link to={`/myCart/${_id}`}> */}
            <button
              onClick={handleAddProduct}
              className="btn bg-[#EA001E] text-white mr-2"
            >
              Add to Cart
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnDetails;
