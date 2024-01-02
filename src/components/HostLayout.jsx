import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div className="bg-orange-100 px-4">
      <nav className="py-3 max-w-[1000px] mx-auto flex gap-5 text-orange-900">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive
              ? "hover:text-orange-600 text-orange-600 font-semibold transition-color duration-200"
              : " text-orange-900 hover:text-orange-600 font-semibold transition-color duration-200"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive
              ? "hover:text-orange-600 text-orange-600 font-semibold transition-color duration-200"
              : " text-orange-900 hover:text-orange-600 font-semibold transition-color duration-200"
          }
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive
              ? "hover:text-orange-600 text-orange-600 font-semibold transition-color duration-200"
              : " text-orange-900 hover:text-orange-600 font-semibold transition-color duration-200"
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive
              ? "hover:text-orange-600 text-orange-600 font-semibold transition-color duration-200"
              : " text-orange-900 hover:text-orange-600 font-semibold transition-color duration-200"
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
