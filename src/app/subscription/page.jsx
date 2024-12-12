"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import BackButton from "../components/BackButton";
import { useRouter } from "next/navigation";

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
const Modal = ({ isOpen, onClose, plan, type, onConfirm }) => {
  const [editablePlan, setEditablePlan] = useState(plan || {});

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setEditablePlan({ ...editablePlan, [field]: value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4  text-black">
          {type === "edit" ? "Edit Plan" : "Delete Plan"}
        </h2>

        {type === "edit" ? (
          <div>
            <p className="text-sm mb-4  text-black">
              You are editing the plan: <strong>{editablePlan.title}</strong>.
            </p>
            {/* Editable Fields */}
            <div className="space-y-4">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black"
                value={editablePlan.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Plan Title"
              />
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black"
                value={editablePlan.price}
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder="Plan Price"
              />
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black"
                value={editablePlan.users}
                onChange={(e) => handleChange("users", e.target.value)}
                placeholder="Number of Users"
              />
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black"
                value={editablePlan.detail}
                onChange={(e) => handleChange("detail", e.target.value)}
                placeholder="Plan Detail"
              ></textarea>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={onClose}
                className="border border-black bg-white text-black px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => onConfirm(editablePlan)}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm mb-4 font-semibold  text-black">
              Are you sure you want to delete the plan:{" "}
              <strong>{plan.title}</strong>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={onClose}
                className="border border-black bg-white text-black px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => onConfirm(plan)}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SubscriptionPlans = () => {
  const [modalType, setModalType] = useState(null); // "edit" or "delete"
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = (type, plan) => {
    setModalType(type);
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setModalType(null);
  };

  const handleEdit = (plan) => {
    console.log("Editing Plan:", plan);
    closeModal();
    // Add logic to handle edit
  };

  const handleDelete = (plan) => {
    console.log("Deleting Plan:", plan);
    closeModal();
    // Add logic to handle delete
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
          onClick={() => router.push("/subscription/addnewplan")}
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
              <img
                src={plan.image}
                alt={`${plan.title} Image`}
                className="w-10 h-10 object-cover rounded-md"
              />
              <input type="checkbox" className="w-5 h-5" />
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-black">{plan.title}</h3>
              <div className="flex gap-2">
                <FaEdit
                  onClick={() => openModal("edit", plan)}
                  className="text-black cursor-pointer"
                />
                <FaTrash
                  onClick={() => openModal("delete", plan)}
                  className="text-red-500 cursor-pointer"
                />
              </div>
            </div>

            <p className="text-sm text-black">{plan.users}</p>
            <p className="text-xl font-semibold mt-3 text-black">
              {plan.price}
            </p>
            <p className="text-sm text-black">{plan.detail}</p>

            <button className="px-4 py-2 rounded-lg font-semibold mt-3 w-full text-center bg-black text-white">
              UPGRADE NOW
            </button>

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

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        plan={selectedPlan}
        type={modalType}
        onConfirm={modalType === "edit" ? handleEdit : handleDelete}
      />
    </>
  );
};

export default SubscriptionPlans;
