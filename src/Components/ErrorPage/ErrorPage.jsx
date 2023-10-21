/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
// import errorImg from "../../assets/error.png";
import { useEffect } from "react";

const ErrorPage = () => {
  const error_para = { width: "60%", margin: "auto" };

  useEffect(() => {
    document.title = "Brand-Shop | Error";
  }, []);

  return (
    <div
      className="mx-auto max-w-screen-xl flex items-center justify-center text-center"
      style={{ height: "100vh" }}
    >
      <div>
        <img
          src="https://pawwy-animals-toy-marketplace.web.app/assets/error-cdcf6cf4.png"
          className="img-fluid inline"
          alt=""
        />
        <h1 className="text-5xl font-semibold py-3">
          We Are Sorry, Page Not Found
        </h1>
        <p style={error_para}>
          Unfortunately the page you were looking for could not be found. It may
          be temporarily unavailable, moved or no longer exist. Check the Url
          you entered for any mistakes and try again.
          <Link to="/" className="ms-2 text-primary">
            <u>Back to Home</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
