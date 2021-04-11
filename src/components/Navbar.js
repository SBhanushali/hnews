import React from "react";
import { NewspaperIcon, SunIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className="py-5 flex h-24 px-2 md:px-6 lg:px-12 justify-between sticky top-0 bg-gray-100">
      <div className="flex">
        <NewspaperIcon className="h-12 w-12 text-indigo-800" />
        <div className="text-3xl self-center font-semibold">HNews</div>
      </div>
      <div className="flex">
        <button className="p-2 self-center bg-gray-300 hover:bg-gray-400 rounded">
          <SunIcon className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
