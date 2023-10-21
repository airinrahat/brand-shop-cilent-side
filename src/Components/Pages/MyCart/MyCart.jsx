/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  // const addToCarts = useLoaderData();
  const [Carts, setCarts] = useState([]);

  console.log(Carts);

  const url = "https://brand-shop-server-side-beige.vercel.app/addtocart";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [url]);

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-side-beige.vercel.app/addtocart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "This Toy has been deleted.", "success");

              const remaining = Carts.filter((toyy) => toyy._id !== _id);
              setCarts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-5">
        Total car on This Marketplace{Carts.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-2xl font-bold text-zinc-600">
              <th>Car-Img</th>
              <th>Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th> Available-Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {Carts.map((myCart) => (
              <tr key={myCart._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={myCart.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-xl">{myCart.name}</td>
                <td className="text-xl">
                  {myCart.category}
                  <br />
                </td>
                <td> {myCart.price}</td>
                <td> {myCart.rating}</td>
                <td>
                  <button
                    onClick={() => handleDelete(myCart._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
