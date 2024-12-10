"use client";
import React, { useState } from "react";
import BackButton from "@/app/components/BackButton";

const AddSeller = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerEmail: "",
    storeName: "",
    businessAddress: "",
    phoneNumber: "",
    createdDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Perform API call or form submission logic here
  };

  return (
    <div className="p-4 flex flex-col pt-10">
      <div className="flex items-center gap-2 mb-6">
        <BackButton />
        <h1 className="text-2xl font-bold text-black">Add New Seller</h1>
      </div>
      <h1 className="text-xl font-semibold text-black mb-4">
        Seller Information
      </h1>
      <form
        className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Owner Name */}
          <div>
            <label
              htmlFor="ownerName"
              className="block text-black font-bold mb-2"
            >
              Owner Name
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter owner's name"
            />
          </div>

          {/* Owner Email */}
          <div>
            <label
              htmlFor="ownerEmail"
              className="block text-black font-bold mb-2"
            >
              Owner Email
            </label>
            <input
              type="email"
              id="ownerEmail"
              name="ownerEmail"
              value={formData.ownerEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter owner's email"
            />
          </div>

          {/* Store Name */}
          <div>
            <label
              htmlFor="storeName"
              className="block text-black font-bold mb-2"
            >
              Store Name
            </label>
            <input
              type="text"
              id="storeName"
              name="storeName"
              value={formData.storeName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter store name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-black font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Enter phone number"
            />
          </div>

          {/* Created Date */}
          <div>
            <label
              htmlFor="createdDate"
              className="block text-black font-bold mb-2"
            >
              Created Date
            </label>
            <input
              type="date"
              id="createdDate"
              name="createdDate"
              value={formData.createdDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        </div>

        {/* Business Address */}
        <div>
          <label
            htmlFor="businessAddress"
            className="block text-black font-bold mb-2"
          >
            Business Address
          </label>
          <textarea
            id="businessAddress"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Enter business address"
          ></textarea>
        </div>

        {/* Action Buttons */}
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
  );
};

export default AddSeller;
