/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div>
      <div className="oops">
        <h2>Oops!!</h2>
        <div>
          <h4 className="text-3xl text-center  ">404 - PAGE NOT FOUND</h4>
        </div>
        <div>
          <h2 className="text-sm text-gray-600 text-center mt-7 ">
            The page you are looking for might have been removed<br></br> had
            its name changed or is temporarily unavailable.<br></br>
            <Link to="/">
              <button className="btn btn-accent mt-3 text-bold text-white">
                Go To Home
              </button>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
