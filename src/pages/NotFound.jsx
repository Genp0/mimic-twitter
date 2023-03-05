import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-900 rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current text-white w-12 h-12"
        >
          <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zM14 7h-4v9h4V7z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mt-8">404 Not Found</h1>
      <p className="text-gray-600 mt-4">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <a
        href="/"
        className="bg-blue-500 text-white rounded-full px-6 py-3 mt-8 transition-all hover:bg-blue-600"
      >
        Go back home
      </a>
    </div>
  );
};

export default NotFound;
