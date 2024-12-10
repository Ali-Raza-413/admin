"use client";
import React, { useState } from "react";

const AdminProfile = () => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+123456789",
    location: "San Francisco, California",
    firstName: "John",
    lastName: "Doe",
    dob: { date: "15", month: "July", year: "1990" },
    gender: "Male",
    nationality: "American",
    city: "San Francisco",
    country: "us",
    zipcode: "22344",
    state: "California",
    street1: "123 Market St",
    street2: "Apt 456",
  });

  const [shopDetails] = useState({
    image: "/b2.png",
    name: "Tech Store",
  });

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", { personalDetails });
  };

  return (
    <>
      <div className="flex gap-8 p-2">
        {/* Personal Details Card */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex-grow grid grid-cols-10 gap-4 space-y-6"
          >
            <h3 className="col-span-10 text-lg font-semibold text-black">
              Basic Information
            </h3>
            <div className="col-span-5">
              <label className="text-md font-semibold text-black">First Name</label>
              <input
                type="text"
                name="firstName"
                value={personalDetails.firstName}
                onChange={handlePersonalDetailsChange}
                className="w-full border rounded-md p-2  bg-[#F4F4F5] text-black"
              />
            </div>
            <div className="col-span-5">
              <label className="text-md font-semibold text-black">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={personalDetails.lastName}
                onChange={handlePersonalDetailsChange}
                className="w-full border rounded-md p-2  bg-[#F4F4F5] text-black"
              />
            </div>
            <div className="col-span-5">
              <label className="text-md font-semibold text-black">Email</label>
              <input
                type="email"
                name="email"
                value={personalDetails.email}
                onChange={handlePersonalDetailsChange}
                className="w-full border rounded-md p-2  bg-[#F4F4F5] text-black"
              />
            </div>
            <div className="col-span-5">
              <label className="text-md font-semibold text-black">Phone</label>
              <input
                type="text"
                name="phone"
                value={personalDetails.phone}
                onChange={handlePersonalDetailsChange}
                className="w-full border rounded-md p-2  bg-[#F4F4F5] text-black"
              />
            </div>
            <div className="col-span-10">
              <label className="text-md font-semibold text-black">
                Date of Birth (Date)
              </label>
              <input
                type="text"
                name="dob.date"
                value={personalDetails.dob.date}
                onChange={handlePersonalDetailsChange}
                className="w-full border rounded-md p-2  bg-[#F4F4F5] text-black"
              />
            </div>
            <div className="col-span-5">
              <label className="text-md font-semibold text-black">Street Address 1</label>
              <input
                type="text"
                name="street1"
                value={personalDetails.street1}
                onChange={handlePersonalDetailsChange}
                className="w-full border rounded-md p-2  bg-[#F4F4F5] text-black"
              />
            </div>
            <div className="col-span-5">
              <label className="text-md font-semibold text-black">Street Address 2</label>
              <input
                type="text"
                name="street2"
                value={personalDetails.street2}
                onChange={handlePersonalDetailsChange}
                className="w-full border rounded-md p-2  bg-[#F4F4F5] text-black"
              />
            </div>
            <div className="col-span-5">
              <label className="text-md font-semibold text-black">City</label>
              <input
                type="text"
                name="city"
                value={personalDetails.city}
                onChange={handlePersonalDetailsChange}
                className="w-full border rounded-md p-2 bg-[#F4F4F5] text-black"
              />
            </div>
            <div className="col-span-5">
              <label className="text-md font-semibold text-black">State</label>
              <input
                type="text"
                name="state"
                value={personalDetails.state}
                onChange={handlePersonalDetailsChange}
                className="w-full border rounded-md p-2  bg-[#F4F4F5] text-black"
              />
            </div>
            <div className="col-span-10 text-right bg-[#EEF2F7] p-5 runded-lg">
              <button
                type="submit"
                className="bg-black text-white px-8 py-2 rounded-lg"
              >
                Save 
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white text-black rounded-lg p-6 shadow-md space-y-4 flex-none">
          <div className="flex items-center gap-4">
            <img
              src={shopDetails.image}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-bold">Jackob Gerrald</h2>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 space-y-5 ">
            <div className="flex justify-between border-b py-2">
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-sm">Jackob Gerrald</p>
            </div>

            <div className="flex justify-between border-b py-2">
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-sm">{personalDetails.phone}</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-sm">{personalDetails.email}</p>
            </div>
            <div className="flex justify-between gap-10 ">
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-sm">{personalDetails.location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
