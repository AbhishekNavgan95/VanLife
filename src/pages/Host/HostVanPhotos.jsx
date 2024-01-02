import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <div className="max-w-[1000px] mx-auto py-5">
      <div className="flex flex-wrap gap-3 justify-evenly">
        <img src={currentVan.imageUrl} className=" border-2 border-orange-500 rounded-xl sm:w-[200px]" alt="" />
        <img src={currentVan.imageUrl} className=" border-2 border-orange-500 rounded-xl sm:w-[200px]" alt="" />
        <img src={currentVan.imageUrl} className=" border-2 border-orange-500 rounded-xl sm:w-[200px]" alt="" />
        <img src={currentVan.imageUrl} className=" border-2 border-orange-500 rounded-xl sm:w-[200px]" alt="" />
        <img src={currentVan.imageUrl} className=" border-2 border-orange-500 rounded-xl sm:w-[200px]" alt="" />
        <img src={currentVan.imageUrl} className=" border-2 border-orange-500 rounded-xl sm:w-[200px]" alt="" />
      </div>
    </div>
  );
};

export default HostVanPhotos;
