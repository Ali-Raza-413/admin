"use client";
import React, { useState, useRef } from "react";
import BackButton from "@/app/components/BackButton";

const AddAttribute = () => {
  const [formData, setFormData] = useState({
    title: "",
    mainCategory: "",
    subCategory: "",
    createdDate: "",
    createdBy: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Perform form submission logic here
  };

  return (
    <div className="p-4 flex flex-col pt-10">
      <div className="flex items-center gap-2 mb-6">
        <BackButton />
        <h1 className="text-2xl font-bold text-black">Add New Attribute</h1>
      </div>
      <form
        className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Category Title and Main Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-black font-bold mb-2">
              Attribute Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
          <label htmlFor="title" className="block text-black font-bold mb-2">
            Attribute Value
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        </div>

        
        <div>
          <label
            htmlFor="createdBy"
            className="block text-black font-bold mb-2"
          >
            Created By
          </label>
          <input
            type="text"
            id="createdBy"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <button
            type="button"
            className="text-black border border-black px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
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

export default AddAttribute;
