"use client";
import React, { useState } from "react";
import AdminProfile from "./AdminProfile";
import Security from "./Security";



const SettingTabbar = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const buttonClasses = (index) =>
    `px-[150px] py-2 mx-2 font-semibold  transition ease-in-out duration-300 ${
      activeButton === index
        ? "border-b-2 border-black text-black"
        : "text-[#ACB6BE] text-[16px] text-[#ACB6BE] text-[16px]"
    }`;

  return (
    <>
      <div className="flex justify-between p-5">
        <button className={buttonClasses(1)} onClick={() => handleClick(1)}>
         Admin Profile
        </button>
        <button className={buttonClasses(2)} onClick={() => handleClick(2)}>
          Security
        </button>
      </div>
      <div className="mt-4">
        {activeButton === 1 && <AdminProfile />}
        {activeButton === 2 && <Security />}
  
      </div>
    </>
  );
};

export default SettingTabbar;
