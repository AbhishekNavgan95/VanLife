import React from "react";
import { NavLink } from "react-router-dom";

export const HostVanNav = () => {
  return (
    <div className="">
      <nav className="max-w-[1000px] mx-auto flex gap-5 my-3 py-2">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-semibold hover:text-orange-500 transition-color duration-300"
              : "text-orange-900 hover:text-orange-500 font-semibold transition-color duration-300"
          }
        >
          <h2>Details</h2>
        </NavLink>
        <NavLink
          to="pricing"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-semibold hover:text-orange-500 transition-color duration-300"
              : "text-orange-900 hover:text-orange-500 font-semibold transition-color duration-300"
          }
        >
          <h2>Pricing</h2>
        </NavLink>
        <NavLink
          to="photos"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-semibold hover:text-orange-500 transition-color duration-300"
              : "text-orange-900 hover:text-orange-500 font-semibold transition-color duration-300"
          }
        >
          <h2>Photos</h2>
        </NavLink>
      </nav>
    </div>
  );
};
