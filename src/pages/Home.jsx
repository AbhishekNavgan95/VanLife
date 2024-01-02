import React from "react";

const Home = () => {
  return (
    <div className="bg-hero h-[90vh] bg-center bg-no-repeat bg-cover">
      <div className="text-center md:text-start flex flex-col px-5 items-center md:items-start max-w-[1000px] mx-auto justify-center h-full py-[6rem]">
        <h2 className="text-5xl py-1 text-orange-100 font-semibold lg:w-[80%]">
          You got the travel plans, we got the travel vans.
        </h2>
        <div className="my-3 text-2xl text-white">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            cumque aut necessitatibus maxime in at architecto vero voluptate
            eum.
          </p>
        </div>
        <button className="bg-orange-500 rounded-xl py-2 mt-4 px-7 text-orange-100 hover:bg-orange-800 transition-color duration-300">
          Find your Van
        </button>
      </div>
    </div>
  );
};

export default Home;
