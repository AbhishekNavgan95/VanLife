import React from "react";

const Card = ({ image, name, price, type }) => {
  return (
    <div className="max-w-[450px] py-3">
      <div className="flex flex-col gap-4">
        <img className="w-full h-full object-cover rounded-xl" src={image} alt="" />
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">{name}</h1>
          <h4 className="text-lg font-bold">{price}$ / Day</h4>
        </div>
        <div className="text-center text-xl bg-orange-100 font-semibold py-2 rounded-xl">{type}</div>
      </div>
    </div>
  );
};

export default Card;
