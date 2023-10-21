/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Allcard from "../Allcard/Allcard";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("car.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="my-10 py-20 mx-auto max-w-screen-xl">
      <h2 className="text-center text-6xl font-bold">
        {" "}
        Our Vehicles Brand : {cards.length}
      </h2>
      <p className="text-center mx-auto mb-5 w-2/4 text-xl mt-3">
        Mauris cursus quis lorem sed cursus. Aenean aliquam pellentesque magna,
        ut dictum ex pellentesque
      </p>
      <div className="grid lg:grid-cols-3  grid-cols-1 my-10 gap-12">
        {cards.map((card) => (
          <Allcard key={card.id} card={card}></Allcard>
        ))}
      </div>
    </div>
  );
};

export default Card;