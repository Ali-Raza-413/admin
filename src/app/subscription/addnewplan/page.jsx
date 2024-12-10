"use client";

import React, { useState } from "react";
import BackButton from "@/app/components/BackButton";

export default function AddPlanForm() {
  // States for form fields
  const [planTitle, setPlanTitle] = useState("");
  const [planSubtitle, setPlanSubtitle] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [planTime, setPlanTime] = useState("");
  const [planIcon, setPlanIcon] = useState(null);

  // Handle file input change (for Plan Icon)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPlanIcon(URL.createObjectURL(file));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send to API)
    console.log({
      planTitle,
      planSubtitle,
      planPrice,
      planTime,
      planIcon,
    });
  };

  return (
    <>
      <div className="flex items-center gap-2 mt-5 p-4">
        <BackButton />
        <h1 className="text-2xl font-bold text-black">Add New Plan</h1>
      </div>

      <div className="max-w-3xl  p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row (Plan Title and Plan Subtitle) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {/* Plan Title */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-700"
                htmlFor="planTitle"
              >
                Plan Title
              </label>
              <input
                type="text"
                id="planTitle"
                value={planTitle}
                onChange={(e) => setPlanTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter Plan Title"
                required
              />
            </div>

            {/* Plan Subtitle */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-700"
                htmlFor="planSubtitle"
              >
                Plan Subtitle
              </label>
              <input
                type="text"
                id="planSubtitle"
                value={planSubtitle}
                onChange={(e) => setPlanSubtitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter Plan Subtitle"
                required
              />
            </div>
          </div>

          {/* Second Row (Plan Price and Plan Time) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Plan Price */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-700"
                htmlFor="planPrice"
              >
                Plan Price
              </label>
              <input
                type="text"
                id="planPrice"
                value={planPrice}
                onChange={(e) => setPlanPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter Plan Price"
                required
              />
            </div>

            {/* Plan Time */}
            <div>
              <label
                className="block text-sm font-semibold text-gray-700"
                htmlFor="planTime"
              >
                Plan Time
              </label>
              <input
                type="text"
                id="planTime"
                value={planTime}
                onChange={(e) => setPlanTime(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                placeholder="Enter Plan Time"
                required
              />
            </div>
          </div>

          {/* Plan Icon Upload */}
          <div>
            <label
              className="block text-sm font-semibold text-gray-700"
              htmlFor="planIcon"
            >
              Upload Plan Icon
            </label>
            <input
              type="file"
              id="planIcon"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            />
            {planIcon && (
              <img
                src={planIcon}
                alt="Plan Icon"
                className="mt-4 w-20 h-20 object-cover"
              />
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className="text-black border border-black px-6 py-2 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
