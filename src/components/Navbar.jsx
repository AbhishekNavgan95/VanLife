import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="bg-orange-100  sticky top-0 ">
      <div className="max-w-[1000px] px-4 mx-auto flex items-center justify-between py-6">
        <div className="text-4xl font-bold text-gray-700">
          <Link to="/">
            <h1 className="text-orange-900">VanLife</h1>
          </Link>
        </div>
        {/* " text-black hover:text-gray-700 font-semibold" */}
        <div className="flex gap-4 text-xl items-center ">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive
                ? "hover:text-orange-600 text-orange-600 font-bold transition-color duration-200"
                : " text-orange-900 hover:text-orange-600 font-semibold transition-color duration-200"
            }
          >
            <h2>Host</h2>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "hover:text-orange-600 text-orange-600 font-bold transition-color duration-200"
                : " text-orange-900 hover:text-orange-600 font-semibold transition-color duration-200"
            }
          >
            <h2>About</h2>
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive
                ? "hover:text-orange-600 text-orange-600 font-bold transition-color duration-200"
                : " text-orange-900 hover:text-orange-600 font-semibold transition-color duration-200"
            }
          >
            <h2>Vans</h2>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "hover:text-orange-600 text-orange-600 font-bold transition-color duration-200"
                : " text-orange-900 hover:text-orange-600 font-semibold transition-color duration-200"
            }
          >
              <CgProfile />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
