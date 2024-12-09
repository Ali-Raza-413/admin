"use client";
import React, { useState, useRef } from "react";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    title: "",
    mainCategory: "",
    subCategory: "",
    createdDate: "",
    createdBy: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file }); // Save image in formData
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const categories = {
    Shirts: ["Tees", "Formal Shirts", "Casual Shirts"],
    Pants: ["Jeans", "Chinos", "Shorts"],
    Accessories: ["Belts", "Hats", "Scarves"],
  };

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
        <h1 className="text-2xl font-bold text-black">Add New Category</h1>
      </div>
      <form
        className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Category Title and Main Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-black font-bold mb-2">
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
              {Object.keys(categories).map((mainCategory) => (
                <option key={mainCategory} value={mainCategory}>
                  {mainCategory}
                </option>
              ))}
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
              disabled={!formData.mainCategory}
            >
              <option value="">Select Subcategory</option>
              {formData.mainCategory &&
                categories[formData.mainCategory].map((subCategory) => (
                  <option key={subCategory} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
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

        {/* Created By */}
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

        {/* Image Upload */}
        <div className="border-2 border-dotted border-gray-300 rounded-lg p-4">
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelected}
              ref={fileInputRef}
              className="hidden"
            />
          </div>
          <div
            className="flex flex-col justify-center items-center py-4 cursor-pointer"
            onClick={handleIconClick}
          >
            <Image
              src="/b6.png"
              alt="filesicon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            <p className="text-[16px] text-[#AB9E7D] text-center mt-8">
              <span className="font-bold text-black">
                Drop your images here
              </span>
              , or click to browse
            </p>
          </div>
          {imagePreview && (
            <div className="mt-4">
              <Image
                src={imagePreview}
                alt="Preview"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex gap-2 justify-end">
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

export default AddCategory;
