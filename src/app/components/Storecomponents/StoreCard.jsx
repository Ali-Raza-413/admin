"useclient";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const StoreCard = ({ store, isChecked, onEdit }) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
      {/* Top Section */}
      <div className="bg-gray-200 h-[100px] p-4 rounded-t-lg relative flex items-center justify-center">
        {/* Checkbox in the top-left corner */}
        <input
          type="checkbox"
          checked={isChecked}
          className="w-5 h-5 accent-black absolute top-4 left-4"
          onChange={() => {}}
        />

        {/* Centered Text */}
        <h1 className="text-2xl font-bold text-black">ZARA</h1>
      </div>

      {/* Store Info Section */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-black">{store.title}</h3>
          <p
            className={`text-md font-bold ${
              store.status === "Approved" ? "text-green-600" : "text-red-600"
            }`}
          >
            {store.status}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-6">{store.description}</p>

        {/* Location */}
        <div className="flex items-center text-gray-700 mt-3">
          <FaMapMarkerAlt className="w-4 h-4 mr-2" />
          <span className="text-sm text-gray-700">{store.location}</span>
        </div>

        {/* Contact Info */}
        <div className="flex items-center text-gray-700 mt-2">
          <FaEnvelope className="w-4 h-4 mr-2" />
          <span className="text-sm text-gray-700">{store.email}</span>
        </div>
        <div className="flex items-center text-gray-700 mt-2">
          <FaPhoneAlt className="w-4 h-4 mr-2" />
          <span className="text-sm text-gray-700">{store.phone}</span>
        </div>

        {/* Product and Item Stats */}
        <div className="flex justify-between mt-6">
          <div className="bg-gray-100 p-2 rounded-md flex-1 text-center mr-2">
            <p className="text-md font-bold text-black">
              {store.totalProducts}
            </p>
            <p className="text-sm font-semibold text-black">Total Products</p>
          </div>
          <div className="bg-gray-100 p-2 px-0 rounded-md flex-1 text-center ml-2">
            <p className="text-md font-bold text-black">{store.totalItems}</p>
            <p className="text-sm font-semibold text-black">Total Items</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 justify-between mt-6">
          <button
            className="bg-gray-200 text-sm text-black py-2 px-2 rounded-md font-semibold"
            onClick={onEdit}
          >
            Edit Profile
          </button>
          <button className="bg-black text-sm text-white py-2 px-2 rounded-md font-semibold"
           onClick={() => router.push("/storeapproval/viewprofile")} 
           >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
