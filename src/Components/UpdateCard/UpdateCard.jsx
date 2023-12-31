/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCard = () => {
  const updateCard = useLoaderData();
  const { _id, name, brand, description, category, price, rating, photo } =
    updateCard;

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const description = form.description.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updateProduct = {
      name,
      brand,
      description,
      category,
      price,
      rating,
      photo,
    };
    console.log(updateProduct);

    fetch(`https://brand-shop-server-side-beige.vercel.app/cart/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: " updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="text-4xl max-w-screen-xl mx-auto lg:px-0 px-10">
      <h2 className="text-4xl font-bold text-center mt-10">Update Card</h2>
      <form onSubmit={handleUpdateProduct} className="my-10">
        {/* form name and quantity row */}
        <div className="md:flex gap-5 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl font-bold"> Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl font-bold">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="Brand Name"
                defaultValue={brand}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form supplier row */}
        <div className="md:flex gap-5 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl font-bold">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl font-bold">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex gap-5 mb-5">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text text-2xl font-bold">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="rating"
                defaultValue={rating}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text text-2xl font-bold">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form Photo url row */}
        <div className="mb-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-2xl font-bold">
                Short description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Short description"
                className="input input-bordered w-full h-20"
              ></input>
            </label>
          </div>
        </div>

        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2 ml-4">
            <label className="">
              <input
                type="submit"
                value="Update Product"
                className="btn btn-block text-white bg-[#EA001E]"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className=" ">
              <input
                type="reset"
                value="RESET"
                className="btn btn-block text-white bg-[#575757]"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCard;
