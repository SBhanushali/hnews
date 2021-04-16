import React from "react";
import { ThemeContext } from "./themeContext";
import { NewspaperIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <nav className="py-5 flex h-24 px-2 md:px-6 lg:px-12 justify-between sticky top-0 ">
      <div className="flex">
        <NewspaperIcon className="h-12 w-12 text-orange" />
        <div className="text-3xl self-center font-semibold dark:text-white">
          HNews
        </div>
      </div>
      <div className="flex">
        <button
          className="p-2 self-center bg-gray-100 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600 rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 text-gray-300" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
