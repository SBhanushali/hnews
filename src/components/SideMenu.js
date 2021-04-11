import React from "react";
import {
  FireIcon,
  SortAscendingIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";

const SideMenu = () => {
  return (
    <div className="bg-gray-100 flex flex-row lg:flex-col items-center lg:items-start justify-around lg:justify-start space-y-0 lg:space-y-6 sticky top-24 h-20 lg:h-32">
      <a className="flex text-gray-800 font-medium">
        <FireIcon className="h-6 w-6 mr-2" /> Top
      </a>
      <a className="flex text-gray-800 font-medium">
        <SortAscendingIcon className="h-7 w-7 mr-2" /> Latest
      </a>
      <a className="flex text-gray-800 font-medium">
        <BriefcaseIcon className="h-6 w-6 mr-2" /> Jobs
      </a>
    </div>
  );
};

export default SideMenu;
