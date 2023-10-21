/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#000C21] py-5 md:px-0 px-10">
        <div className="lg:footer lg:text-start text-center py-10  text-white max-w-screen-xl mx-auto ">
          <nav>
            <header className="footer-title text-4xl font-bold text-[#EA001E]">
              Automotive
            </header>

            <p className=" leading-8 text-xl text-[#9999] ">
              Lorem ipsum dolor sit amet, consectetuer<br></br> adipiscing elit.
              Donec odio. Quisque volutpat .<br></br> Nullam malesuada erat ut
              turpis. suscipit, ..
            </p>
          </nav>
          <nav>
            <header className="footer-title text-xl">CONTACT US</header>
            <a className="link link-hover">
              Address :
              <span className="text-[#9999]"> 123 Fake Street, New York</span>
            </a>
            <a className="link link-hover">
              Phone :<span className="text-[#9999]"> (08) 8827 633354</span>
            </a>
            <a className="link link-hover">
              Fax :<span className="text-[#9999]"> (08) 8827 633354</span>
            </a>
            <a className="link link-hover">
              Mail :<span className="text-[#9999]"> contact@yoursite.com</span>
            </a>
            <a className="link link-hover">
              Openning :
              <span className="text-[#9999]"> 8:00 - 19:00, Mon - Sat</span>
            </a>
          </nav>
          <nav>
            <header className="footer-title text-xl">INFORMATION</header>

            <a className="link link-hover">About us</a>
            <a className="link link-hover">Legal Notice</a>
            <a className="link link-hover">Addresses</a>
            <a className="link link-hover">Order</a>
            <a className="link link-hover"> Payment</a>
            <a className="link link-hover">Suppliers</a>
          </nav>
          <nav>
            <header className="footer-title text-xl">MY ACCOUNT</header>
            <a className="link link-hover">Delivery</a>
            <a className="link link-hover">Legal Notice</a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Prices drop</a>
            <a className="link link-hover">New products</a>
            <a className="link link-hover">Best sales</a>
          </nav>
          <nav>
            <header className="footer-title text-xl">COMPANY</header>
            <a className="link link-hover">My account</a>
            <a className="link link-hover">My Cart</a>
            <a className="link link-hover">Identity</a>
            <a className="link link-hover">Order</a>
            <a className="link link-hover">Contact us</a>
            <a className="link link-hover">Addresses</a>
          </nav>
        </div>
        <div className="max-w-screen-xl mx-auto ">
          <hr></hr>
          <div className="text-center mt-5  text-sm font-semibold  text-white ">
            <a className="link link-hover p-3">RETURNS</a>
            <a className="link link-hover p-3">ORDERS HISTORY</a>
            <a className="link link-hover p-3">SITE MAP</a>
            <a className="link link-hover mb-5 p-3">TESTIMONIAL</a>
          </div>
          <p className="text-center my-4 text-gray-500">
            Copyright © 2023 Automotive Car Brand . All Rights Reserved.
          </p>
          <div className="flex justify-center items-center text-4xl gap-3">
            <FaCcVisa className="text-[#fdbb0a]"></FaCcVisa>
            <FaCcPaypal className="text-[#3b7bbf]"></FaCcPaypal>
            <FaCcAmazonPay className="text-white"></FaCcAmazonPay>
            <FaCcApplePay className="text-[#6a262b]"></FaCcApplePay>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
