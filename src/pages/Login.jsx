import React from "react";

const Login = () => {
  return (
    <div className="px-4  bg-orange-100">
      <div className="max-w-[1000px] min-h-[87vh] mx-auto flex justify-start items-center">
        <form className="w-full border-2 border-black flex flex-col gap-4 justify-center ">
          <div className="flex flex-col ">
            <label className="text-2xl">Enter Email</label>
            <input type="email" />
          </div>
          <div className="flex flex-col" >
            <label className="text-2xl">Enter Password</label>
            <input type="password" />
          </div>
          <button className="bg-orange-500 hover:bg-orange-900 transition-color duration-300 text-white py-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
