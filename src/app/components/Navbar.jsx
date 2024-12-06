import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md rounded-xl">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/download.png"
            alt="Logo"
            className="w-10 h-10 object-cover mr-2"
          />
          <h1 className="text-lg font-bold text-gray-800">MyWebsite</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="absolute top-2.5 right-3 w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M14.5 10.5a4 4 0 10-8 0 4 4 0 008 0z"
              />
            </svg>
          </div>
        </div>

        {/* Icons and Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>

          {/* Profile Image */}
          <img
            src="/b2.png"
            alt="Profile"
            className="w-10 h-10 object-cover rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
