"use client";
import React, { useState } from "react";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    title: "",
    mainCategory: "",
    subCategory: "",
    createdDate: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Perform form submission logic here
  };

  return (
    <div className="p-4 flex flex-col ">
      <h1 className="text-xl font-semibold text-black mb-6">
        Add New Category
      </h1>
      <form
        className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 space-y-4 "
        onSubmit={handleSubmit}
      >
        {/* Category Title and Main Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-black  font-bold mb-2">
              Category Title
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
            <label
              htmlFor="mainCategory"
              className="block text-black font-bold mb-2"
            >
              Select Main Category
            </label>
            <select
              id="mainCategory"
              name="mainCategory"
              value={formData.mainCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option value="">Select Main Category</option>
              <option value="Shirts">Shirts</option>
              <option value="Pants">Pants</option>
            </select>
          </div>
        </div>

        {/* Subcategory and Created Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="subCategory"
              className="block text-black font-bold mb-2"
            >
              Select Subcategory
            </label>
            <select
              id="subCategory"
              name="subCategory"
              value={formData.subCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option value="">Select Subcategory</option>
              <option value="Tees">Tees</option>
              <option value="Jeans">Jeans</option>
            </select>
          </div>
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

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-black font-bold mb-2">
            Select Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 border rounded-md bg-[#F4F4F5] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-2 justify-end">
          <button
            type="submit"
            className=" text-black border border-black px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            cancel
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

export default AddCategory;
