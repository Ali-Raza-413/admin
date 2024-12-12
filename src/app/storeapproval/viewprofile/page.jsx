import React from "react";
import BackButton from "@/app/components/BackButton";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ViewProfile = () => {

 

  return (
    <div className="p-4">
      <div className="flex justify-between mt-5">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-2xl font-bold text-black">Store Details</h1>
        </div>
      </div>

      {/* Store Details Section */}
      <div className="flex gap-2 items-center mt-8">
        <div>
          <img src="/s2.png" alt="image" className="w-[200px]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">SuperMart</h3>
          <h1 className="text-md font-bold text-green-500">Approved</h1>
          <p className="text-sm text-gray-600 mt-6">
            A one-stop shop for all your grocery needs.
          </p>
          <div className="flex items-center text-gray-700 mt-3">
            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
            <span className="text-sm">4604, Philli Lane Kiowa IN 47404</span>
          </div>

          <div className="flex items-center text-gray-700 mt-2">
            <FaEnvelope className="w-4 h-4 mr-2" />
            <span className="text-sm">zarafashionworld@dayrep.com</span>
          </div>

          <div className="flex items-center text-gray-700 mt-2">
            <FaPhoneAlt className="w-4 h-4 mr-2" />
            <span className="text-sm text-gray-700">+11111111111</span>
          </div>
        </div>
      </div>

      {/* Fabric Details Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-black">Fabric Details</h2>
        <p className="text-sm text-gray-600 mt-4">
          Fabric Type: <strong>Cotton</strong>
        </p>
        <p className="text-sm text-gray-600">
          Fabric Color: <strong>Red</strong>
        </p>
        <p className="text-sm text-gray-600">
          Fabric Quality: <strong>Premium</strong>
        </p>
        <p className="text-sm text-gray-600">
          Available Stock: <strong>500 Units</strong>
        </p>
      </div>

      {/* Delete Button */}
      <div className="mt-6 flex justify-start">
        <button
      
          className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold"
        >
          Delete Store
        </button>
      </div>
    </div>
  );
};

export default ViewProfile;
