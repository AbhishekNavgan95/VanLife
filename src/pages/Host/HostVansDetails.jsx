import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { HostVanNav } from "../../components/HostVanNav";

const HostVansDetails = () => {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState([]);

  async function fetchData() {
    const res = await fetch(`/api/vans/${params.id}`);
    const data = await res.json();
    setCurrentVan(data.vans);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {currentVan.length === 0 ? (
        <div>Loading</div>
      ) : (
        <div className="">
          <div className="max-w-[1000px] mx-auto ">
            <div className="py-2 px-2 bg-orange-500 my-3 rounded-xl">
              <Link to=".." relative="path">
                <h3 className="text-center text-white">Back to all vans</h3>
              </Link>
            </div>
            <div className="flex gap-5 items-center bg-white p-5 rounded-xl">
              <img
                className="w-[150px] md:w-[300px] rounded-xl"
                src={currentVan.imageUrl}
                alt=""
              />
              <div className="flex flex-col items-start gap-2">
                <h1 className="font-semibold text-md bg-orange-500 text-center rounded-xl text-white py-1 px-4">
                  {currentVan.type}
                </h1>
                <h1 className="text-3xl font-bold">{currentVan.name}</h1>
                <h2 className="text-xl font-bold">{currentVan.price}$ / day</h2>
              </div>
              {console.log(currentVan)}
            </div>
          </div>
        </div>
      )}
      <HostVanNav />
      <Outlet context={{currentVan}} />
    </div>
    
  );
};

export default HostVansDetails;
