import React from "react";
import { NavLink } from "react-router-dom";
import {
  FireIcon,
  SortAscendingIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";

const SideMenu = () => {
  return (
    <div className="bg-gray-100 w-full lg:w-60 lg:p-10 flex flex-row lg:flex-col items-center lg:items-start justify-around lg:justify-start space-y-0 lg:space-y-6 sticky top-24 h-20 lg:h-52">
      <NavLink
        to="/top"
        className="flex text-gray-600 font-medium"
        activeClassName="font-black text-gray-800"
      >
        <FireIcon className="h-6 w-6 mr-2" /> Top
      </NavLink>
      <NavLink
        to="latest"
        className="flex text-gray-600 font-medium"
        activeClassName="font-black text-gray-800"
      >
        <SortAscendingIcon className="h-7 w-7 mr-2" /> Latest
      </NavLink>
      <NavLink
        to="jobs"
        className="flex text-gray-600 font-medium"
        activeClassName="font-black text-gray-800"
      >
        <BriefcaseIcon className="h-6 w-6 mr-2" /> Jobs
      </NavLink>
    </div>
  );
};

export default SideMenu;
