import React from "react";
import { CloudDownloadIcon } from "@heroicons/react/outline";

const Loader = () => {
  return (
    <div className="flex justify-center ">
      <CloudDownloadIcon className="w-8 h-8 m-4 animate-bounce" />
    </div>
  );
};

export default Loader;
