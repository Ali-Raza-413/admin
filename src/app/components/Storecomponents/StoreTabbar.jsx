"use client";
import React, { useState } from "react";
import ApprovedStore from "./ApprovedStore";
import PendingStore from "./PendingStore";
import NewStore from "./NewStore";
import DeletedStore from "./DeletedStore";

const StoreTabbar = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const buttonClasses = (index) =>
    `px-4 py-2 font-semibold transition ease-in-out duration-300 text-[14px] font-plus rounded-md ${
      activeButton === index
        ? "bg-black text-white"
        : "bg-gray-200 text-black"
    }`;

  const buttons = [
    { label: "Approved", id: 1 },
    { label: "Pending", id: 2 },
    { label: "New", id: 3 },
    { label: "Deleted", id: 4 },
  ];

  return (
    <>
      <div className="flex  space-x-4">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={buttonClasses(button.id)}
            onClick={() => handleClick(button.id)}
          >
            {button.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeButton === 1 && <ApprovedStore />}
        {activeButton === 2 && <PendingStore />}
        {activeButton === 3 && <NewStore />}
        {activeButton === 4 && <DeletedStore />}
      </div>
    </>
  );
};

export default StoreTabbar;
