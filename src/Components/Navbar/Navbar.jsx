/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCar } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";
import ReactSwitch from "react-switch";

const Navbar = ({ onChange, checked, theme }) => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="ml-3">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li className="lg:mx-2 ">
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <nav className="bg-[#000C21] py-2">
        <div className="lg:flex items-center justify-between mx-auto max-w-screen-xl bg-[#000C21] text-white">
          <div className=" py-3">
            <div className="dropdown z-10">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-red-600 rounded-box w-52"
              >
                {links}
              </ul>
            </div>

            <Link className="btn btn-ghost p-0  text-4xl uppercase font-bold">
              <FaCar className="text-[#EA001E]"></FaCar>{" "}
              <img
                src="https://i.ibb.co/9t3TnyC/2014-mazda-cx-5-pic-1160917971215308174-1024x768.jpg"
                alt="logo"
                className="w-60 h-12 rounded-md"
              />
            </Link>
          </div>

          <div className="lg:flex justify-center items-center gap-3  md:pb-0">
            <div>
              <ul className="menu menu-horizontal px-1 py-1 text-lg font-semibold">
                {links}
                <div className="switch flex justify-center gap-2 mt-2 ml-3">
                  <ReactSwitch onChange={onChange} checked={checked} />
                  <label className="m-0">{theme}</label>
                </div>
              </ul>
            </div>

            {user ? (
              <div className="flex justify-center gap-3 items-center">
                <p className="font-semibold text-xl">{user.displayName}</p>
                <img className="rounded-full h-12 w-12" src={user.photoURL} />
              </div>
            ) : (
              <img
                className="rounded-full h-12 w-12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHTAJPlLEQwOQG_g-WNP0WayMmnpM-Nq9ZA&usqp=CAU"
              />
            )}

            {user ? (
              <button
                onClick={handleLogOut}
                variant="secondary"
                className='text-lg font-bold bg-[#EA001E] flex justify-center text-white py-1.5 px-6 rounded-md"'
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button
                  className='text-lg font-bold bg-[#EA001E] text-white py-1.5 px-6 rounded-md"'
                  variant="secondary"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
