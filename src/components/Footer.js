import React from "react";

const Footer = () => {
  return (
    <footer className="sticky space-y-5 top-28 h-20 hidden lg:block text-sm text-gray-600 w-80 dark:text-gray-50">
      <p>
        This main motivation behind this project was to learn tailwindcss, setup
        react app from scratch and use external APIs.
      </p>
      <p>Built using HackerNews API, tailwindcss & !CRA</p>
      <p>
        <a
          href="https://github.com/SBhanushali/hnews"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
