"use client";
import React, { useState } from "react";
import BackButton from "@/app/components/BackButton";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    location: "",
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
        <h1 className="text-2xl font-bold text-black">Add New Customer</h1>
      </div>
      <h1 className="text-xl font-semibold text-black mb-4">
        Customer Information
      </h1>
      <form
        className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-black font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-black font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="number" className="block text-black font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-black font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block text-black font-bold mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
          ></textarea>
        </div>
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

export default AddCustomer;
