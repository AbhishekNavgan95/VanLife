import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-w-[1000px] bg-orange-100">
      <div className="flex min-h-[88vh] justify-center items-center">
        <div className="flex flex-col items-center gap-7">
          <h1 className="text-3xl font-semibold text-orange-900">
            Sorry, the page you are looking for does not exist
          </h1>
          <Link to="/">
            <h2 className="py-3 px-5 bg-orange-500 rounded-xl text-white text-xl hover:bg-orange-900 transition-color duration-300">
            Go to Home page
            </h2>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
