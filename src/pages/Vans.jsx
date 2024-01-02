import React from "react";
import { useEffect, useState } from "react";
import "../server";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  async function fetchData() {
    let res = await fetch("/api/vans");
    let data = await res.json();
    setVans(data.vans);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto flex flex-wrap justify-evenly my-3 gap-3">
      {vans.length === 0 ? (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className=" text-2xl font bold ">Loading...</h1>
        </div>
      ) : (
        vans.map((van) => (
          <Link to={`/vans/${van.id}`}>
            <div className="">
              <Card
                image={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
              />
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Vans;
