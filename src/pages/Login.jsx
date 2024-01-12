import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function submitHandler(e) {
    e.preventDefault();

    console.log(formData)
  }

  function changeHandler(e) {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="px-4 bg-gray-900 text-white">
      <div className="max-w-[1000px] py-3 min-h-[87vh] mx-auto flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-5">
        <form onSubmit={submitHandler} className="w-full lg:w-1/2 flex flex-col gap-4 justify-center px-4">
          <div className="flex flex-col  gap-3">
            <label className="text-2xl">Enter Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={changeHandler}
              className="py-2 rounded-xl text-xl text-gray-950 bg-gray-300 px-4"
              />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-2xl">Enter Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={changeHandler}
              name="password"
              id="password"
              className="py-2 rounded-xl text-xl text-gray-950 bg-gray-300 px-4"
            />
          </div>
          <button className="bg-orange-500 hover:bg-orange-900 rounded-xl transition-color duration-300 text-white py-2">
            Submit
          </button>
        </form>
        <div className="w-3/4 lg:w-1/2 px-4">
          <img
            className="rounded-xl border-2 borde-orange-900"
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
