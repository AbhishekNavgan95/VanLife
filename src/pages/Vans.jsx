import React from "react";
import { useEffect, useState } from "react";
import "../server";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useSearchParams, useLoaderData } from "react-router-dom";
import getVans from "../api";

export function loader() {
  return getVans();
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const vans = useLoaderData();

  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <div className="max-w-[1000px] mx-auto min-h-[100vh]">
      <div className="flex gap-4 px-4 pt-3 text-xl justify-start items-center">
        <button
          onClick={() => setSearchParams({})}
          to="."
          className={
            typeFilter === null
              ? "bg-orange-500 px-4 rounded-lg text-white py-1 hover:bg-orange-500 transition-color duration-300"
              : "bg-orange-900 px-4 rounded-lg text-white py-1 hover:bg-orange-900 transition-color duration-300"
          }
        >
          All
        </button>
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={
            typeFilter === "simple"
              ? "bg-orange-500 px-4 rounded-lg text-white py-1 hover:bg-orange-500 transition-color duration-300"
              : "bg-orange-900 px-4 rounded-lg text-white py-1 hover:bg-orange-900 transition-color duration-300"
          }
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={
            typeFilter === "luxury"
              ? "bg-orange-500 px-4 rounded-lg text-white py-1 hover:bg-orange-500 transition-color duration-300"
              : "bg-orange-900 px-4 rounded-lg text-white py-1 hover:bg-orange-900 transition-color duration-300"
          }
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={
            typeFilter === "rugged"
              ? "bg-orange-500 px-4 rounded-lg text-white py-1 hover:bg-orange-500 transition-color duration-300"
              : "bg-orange-900 px-4 rounded-lg text-white py-1 hover:bg-orange-900 transition-color duration-300"
          }
        >
          Rugged
        </button>
      </div>
      <div className=" flex flex-wrap justify-evenly my-3 gap-3">
        {displayVans.map((van) => (
          <Link
            to={van.id}
            key={van.id}
            state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
          >
            <div className="">
              <Card
                image={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vans;
