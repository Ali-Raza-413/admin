import React from "react";
import StoreTabbar  from "../components/Storecomponents/StoreTabbar";
import BackButton from "../components/BackButton";

const StoreApproval = () => {
  return (
    <>
    <div className="flex justify-between py-5 p-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-2xl font-bold text-black">Stores List</h1>
      </div>
      <button
        className="bg-gray-600 text-white px-6 py-2 rounded-lg mt-2"
        //   onClick={() => router.push("/customers/addcustomer")}
      >
        Add Store
      </button>
      </div>
      <div className="flex gap-5 py-5 p-4">
      <div className="">
        <input
          placeholder="Search..."
          className=" text-black p-2 border border-black  rounded-lg"
        />
      </div>
    
      </div>
      <div className="p-4">
      <StoreTabbar />
      </div>
      
    </>
  );
};

export default StoreApproval;
