import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-orange-100">
      <div className="max-w-[1000px] px-4 mx-auto flex items-center justify-between py-6">
        <div className="text-4xl font-bold text-gray-700">
          <Link to="/">
            <h1>VanLife</h1>
          </Link>
        </div>
        <div className="flex gap-4 text-xl">
          <Link to="/about">
            <h2 className=" text-black hover:text-gray-700 font-semibold">About</h2>
          </Link>
          <h2 className=" text-black hover:text-gray-700 font-semibold">Vans</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
