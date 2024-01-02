import React from "react";
import { useState, useEffect } from "react";
import HostVan from "../../components/HostVan";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  async function fetchData() {
    let res = await fetch("/api/host/vans");
    let data = await res.json();
    setVans(data.vans);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {vans.length === 0 ? (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className=" text-2xl font bold">Loading...</h1>
        </div>
      ) : (
        <div className="max-w-[1000px] min-h-screen mx-auto py-5 flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-orange-900 py-2">
            Your Listed vans
          </h1>
          {console.log(vans)}
          {vans.map((van) => (
            <Link key={van.id} to={`/host/vans/${van.id}`}>
              <HostVan
                name={van.name}
                price={van.price}
                imageUrl={van.imageUrl}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HostVans;
