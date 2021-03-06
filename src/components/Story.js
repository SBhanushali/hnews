import React from "react";

import { HeartIcon, UserIcon, ClockIcon } from "@heroicons/react/solid";
import getTimeFromNow from "../helpers/getTimeFromNow";

const Story = ({ story }) => {
  return (
    <div className="w-full p-6 rounded border border-gray-300 dark:border-gray-50">
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-lg tracking-wide cursor-pointer dark:text-white"
      >
        {story.title}
      </a>
      <div className="flex justify-between lg:space-x-6 lg:justify-start mt-3">
        <div className="flex items-center text-gray-400 dark:text-gray-50">
          <HeartIcon className="h-5 w-5 mr-1" />
          {story.score}
        </div>
        <div className="flex items-center text-gray-400 dark:text-gray-50">
          <UserIcon className="h-5 w-5 mr-1" />
          {story.by}
        </div>
        <div className="flex items-center text-gray-400 dark:text-gray-50">
          <ClockIcon className="h-5 w-5 mr-1" />
          {getTimeFromNow(story.time)}
        </div>
      </div>
    </div>
  );
};

export default Story;
