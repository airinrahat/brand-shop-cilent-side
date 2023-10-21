/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Navbar/Navbar";

import Card from "../Card/Card";
import Slider from "../Slider/Slider";
import CarAgency from "../CarAgency/CarAgency";
import BestCard from "../BestCard/BestCard";
import Counter from "../Counter/Counter";
import Partner from "../Partner/Partner.JSX";

const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Slider></Slider>
      <Card></Card>
      <BestCard></BestCard>
      <CarAgency></CarAgency>
      {/* <Counter></Counter> */}
      <Partner></Partner>
    </div>
  );
};

export default Home;
