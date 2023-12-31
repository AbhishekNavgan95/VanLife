import React from "react";

const Home = () => {
  return (
    <div className="bg-hero h-[90vh] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col px-4 items-start max-w-[1000px] mx-auto justify-center h-full py-[6rem]">
        <h2 className="text-6xl py-1 text-orange-100 font-semibold lg:w-[80%]">
          You got the travel plans,
          we got the travel vans.
        </h2>
        <div className="my-[2rem] text-2xl text-white">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            cumque aut necessitatibus maxime in at architecto vero
            voluptate eum.
          </p>
        </div>

        <button className="border border-orange-100 py-2 px-7 text-orange-100 hover:bg-orange-100 hover:text-black transition-color duration-100">Find your Van</button>
      </div>
    </div>
  );
};

export default Home;
