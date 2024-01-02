import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Van = () => {
  const params = useParams();
  const [vanData, seVanData] = useState([]);

  async function fetchCardData() {
    const res = await fetch(`/api/vans/${params.id}`);
    const data = await res.json();
    seVanData(data.vans);
  }

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div>
      {vanData.length === 0 ? (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className=" text-2xl font bold ">Loading...</h1>
        </div>
      ) : (
        <div className="max-w-[1000px] mx-auto px-5 py-5 flex flex-col gap-3">
          <div className="">
            <img
              className="w-full h-[600px] object-cover rounded-xl"
              src={vanData.imageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-2xl">
              <h2 className="text-5xl font-semibold flex-1 text-orange-900">
                {vanData.name}
              </h2>
              <h4 className="font-bold text-orange-900">
                {vanData.price}$ / Day
              </h4>
            </div>
            <p className="text-xl">{vanData.description}</p>
          </div>
          <div className="my-4 flex justify-between items-center text-2xl gap-4">
            <h4 className="border-2 border-orange-500 text-orange-500 py-1 w-full text-center px-6 rounded-xl font-bold">
              {vanData.type.toUpperCase()}
            </h4>
          </div>
          <div className="flex flex-row-reverse justify-center md:justify-start items-center">
            <button className="bg-orange-500 text-white rounded-full px-5 py-2 font-bold hover:bg-orange-800 transiton-color duration-300">
              Rent this van
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Van;
