"use client"; // Marking this file for client-side only

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import BackButton from "../components/BackButton";
import { useRouter } from "next/navigation"; // Ensure correct import based on your Next.js version

const plans = [
  {
    title: "Basic",
    image: "/p3.png",
    users: "05 User",
    price: "$20",
    detail: "/1 Month",
    icon: "/c2.png",
    features: [
      "Daily Content Updates",
      "15 User",
      "Access to all design resources",
      "10 downloads per day",
      "every categories 5 download per day",
      "single assets 20 download per day",
      "User personal and commercial",
      "Unlimited support",
    ],
  },
  {
    title: "Standard",
    image: "/p3.png",
    price: "$27.99",
    users: "15 Users",
    detail: "/3 Month",
    icon: "/c2.png",
    features: [
      "Daily Content Updates",
      "15 User",
      "Access to all design resources",
      "10 downloads per day",
      "every categories 5 download per day",
      "single assets 20 download per day",
      "User personal and commercial",
      "Unlimited support",
    ],
  },
  {
    title: "Premium",
    image: "/p3.png",
    price: "$50",
    users: "Unlimited Users",
    detail: "/1 Year",
    icon: "/c2.png",
    features: [
      "Daily Content Updates",
      "Unlimited User",
      "Access to all design resources",
      "50 downloads per day",
      "Every category 10 downloads per day",
      "Single assets 50 downloads per day",
      "User personal and commercial",
      "Priority support",
    ],
  },
  // Other plans go here...
];

const SubscriptionPlans = () => {
  const router = useRouter();

  // Function to handle the edit action
  const handleEdit = (planTitle) => {
    console.log("Editing", planTitle);
    // Additional logic for editing
  };

  // Function to handle the delete action
  const handleDelete = (planTitle) => {
    console.log("Deleting", planTitle);
    // Additional logic for deleting
  };

  return (
    <>
      <div className="flex justify-between mt-5 p-4">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-2xl font-bold text-black">Subscription Plans</h1>
        </div>
        <button
          className="bg-gray-600 text-white px-6 py-2 rounded-lg mt-2"
          onClick={() => {
            router.push("/subscription/addnewplan");
          }}
        >
          Add New Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-6 p-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-white border border-black"
          >
            <div className="flex items-center justify-between mb-4">
              {/* Checkbox */}
              {/* Image */}
              <img
                src={plan.image}
                alt={`${plan.title} Image`}
                className="w-10 h-10 object-cover rounded-md"
              />
              <input type="checkbox" className="w-5 h-5" />
            </div>

            {/* Title and Actions */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-black">{plan.title}</h3>

              {/* Edit and Delete Icons */}
              <div className="flex gap-2">
                <FaEdit
                  onClick={() => handleEdit(plan.title)} // Calling handleEdit function
                  className="text-black cursor-pointer"
                />
                <FaTrash
                  onClick={() => handleDelete(plan.title)} // Calling handleDelete function
                  className="text-red-500 cursor-pointer"
                />
              </div>
            </div>

            <p className="text-sm text-black">{plan.users}</p>

            {/* Price and Detail */}
            <p className="text-xl font-semibold mt-3 text-black">
              {plan.price}
            </p>
            <p className="text-sm text-black">{plan.detail}</p>

            {/* Button */}
            <button className="px-4 py-2 rounded-lg font-semibold mt-3 w-full text-center bg-black text-white">
              UPGRADE NOW
            </button>

            {/* Features */}
            <ul className="mb-6 space-y-2 mt-6 text-sm text-[#555964]">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center gap-2 text-black"
                >
                  <img src={plan.icon} className="w-6 h-6" alt="Feature Icon" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubscriptionPlans;
