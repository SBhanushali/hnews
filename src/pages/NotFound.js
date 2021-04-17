import React from "react";

const NotFound = () => {
  return (
    <div className="mx-5 lg:w-full lg:max-h-full overflow-y-auto h-156 lg:h-168">
      <div className="border border-gray-400 dark:border-gray-50 shadow rounded-md p-4 max-w-full w-full mx-auto">
        <div className="flex space-x-4">
          <div className="flex-1 space-y-4 py-1 dark:text-white text-center">
            <h3>Cannot find the page you are looking for 😕</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
