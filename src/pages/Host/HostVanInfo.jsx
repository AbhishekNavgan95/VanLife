import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();

  return (
    <div className="max-w-[1000px] mx-auto pb-5 min-h-[50vh]">
      <div className="flex flex-col justify-center gap-3 text-lg">
        <h4 className="font-bold text-2xl">{currentVan.name}</h4>
        <h4 className="font-bold">Type: <span className="font-normal">{currentVan.type}</span></h4>
        <h4 className="font-bold">Description: <span className="font-normal">{currentVan.description}</span></h4>
        <h4 className="font-bold">Visibility: <span className="font-normal">Public</span></h4>
      </div>
    </div>
  );
};

export default HostVanInfo;
