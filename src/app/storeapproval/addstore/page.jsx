"use client";
import React from "react";
import BackButton from "@/app/components/BackButton";

const Addstore = () => {
  return (
    <div className="min-h-screen k text-white flex items-center justify-center px-6">
      <div className="w-full max-w-4xl  p-8 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <BackButton />

          <h1 className="text-xl font-bold  text-left text-black">
            Add Store
          </h1>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Store Name */}
            <div>
              <label
                className="block text-sm font-medium mb-2 text-black"
                htmlFor="storeName"
              >
                Store Name
              </label>
              <input
                type="text"
                id="storeName"
                className="w-full px-4 py-2 rounded bg-gray-100 text-black outline-none focus:ring-2 focus:ring-[#4d0362]"
                placeholder="Enter store name"
              />
            </div>

            {/* Description */}
            <div>
              <label
                className="block text-sm font-medium mb-2 text-black"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                className="w-full px-4 py-2 rounded bg-gray-100 text-black outline-none focus:ring-2 focus:ring-[#4d0362]"
                placeholder="Enter store description"
              ></textarea>
            </div>

            {/* Location */}
            <div>
              <label
                className="block text-sm font-medium mb-2 text-black"
                htmlFor="location"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full px-4 py-2 rounded bg-gray-100 text-black outline-none focus:ring-2 focus:ring-[#4d0362]"
                placeholder="Enter location"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium mb-2 text-black"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded bg-gray-100 text-black outline-none focus:ring-2 focus:ring-[#4d0362]"
                placeholder="Enter email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                className="block text-sm font-medium mb-2 text-black"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-2 rounded bg-gray-100 text-black outline-none focus:ring-2 focus:ring-[#4d0362]"
                placeholder="Enter phone number"
              />
            </div>

            {/* Upload Image */}
            <div>
              <label
                className="block text-sm font-medium mb-2 text-black"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                className="w-full px-4 py-2 bg-gray-100 text-black rounded cursor-pointer file:cursor-pointer file:mr-4 file:bg-black file:text-white file:py-2 file:px-4 file:rounded "
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              className="bg-white text-black border border-black py-2 px-6 rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded-lg transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addstore;
