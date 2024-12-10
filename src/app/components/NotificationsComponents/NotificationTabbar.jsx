"use client";
import React, { useState } from "react";
import SentMessages from "./SentMessages";
import Messages from "./Messages";


const NotificationTabbar = () => {
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
         Sent Messages
        </button>
        <button className={buttonClasses(2)} onClick={() => handleClick(2)}>
          Messages
        </button>
      </div>
      <div className="mt-4">
        {activeButton === 1 && <SentMessages />}
        {activeButton === 2 && <Messages />}
  
      </div>
    </>
  );
};

export default NotificationTabbar;
