"use client";
import React, { useState } from "react";
import BackButton from "@/app/components/BackButton";

const AddNewNotification = () => {
  const [messageData, setMessageData] = useState({
    type: "Notification",
    title: "",
    description: "",
    email: "", // New field for email
  });

  const [messagePreview, setMessagePreview] = useState({
    message: "",
    placeholder:
      "Just dropping by to let you know that there are 5 days left until your plan expires, eh? Do not waste time, get the plan that best fits your pocket now!",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData({
      ...messageData,
      [name]: value,
    });

    if (name === "description") {
      setMessagePreview({
        ...messagePreview,
        message: value,
      });
    }
  };

  const resetForm = () => {
    setMessageData({
      type: "Notification",
      title: "",
      description: "",
      email: "", // Reset email field
    });

    setMessagePreview({
      message: "",
      placeholder:
        "Just dropping by to let you know that there are 5 days left until your plan expires, eh? Do not waste time, get the plan that best fits your pocket now!",
    });
  };

  const handlePublish = () => {
    console.log("Publishing Notification:", messageData);
    resetForm();
  };

  return (
    <div className="p-4 mt-5">
      <div className="flex items-center gap-2 mb-4">
        <BackButton />
        <h1 className="text-black text-2xl font-semibold">
          Create New Notification
        </h1>
      </div>
      <form className="max-w-3xl  mt-5">
        <div>
          <label className="block text-black mb-2 font-semibold">
            Message Title
          </label>
          <input
            placeholder="Tic Tac, Tic Tac! Your plan needs you!"
            className="w-full p-3 border border-black text-black rounded-lg bg-[#F4F4F5]"
            name="title"
            value={messageData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label className="block text-black font-semibold">Description</label>
          <textarea
            placeholder={messagePreview.placeholder}
            className="w-full h-40 p-3 border border-black text-black rounded-lg bg-[#F4F4F5]"
            name="description"
            value={messageData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <label className="block text-black font-semibold">User Email</label>
          <div className="relative">
            <input
              placeholder="Enter user's email"
              className="w-full p-3 border border-black text-black rounded-lg bg-[#F4F4F5] pr-24"
              name="email"
              value={messageData.email}
              onChange={handleChange}
            />
            <button
              className="absolute top-1/2 right-3 transform -translate-y-1/2 py-2 px-4 bg-black text-white rounded-lg"
              onClick={() => console.log("Sending to:", messageData.email)}
            >
              Send
            </button>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-black mb-2 font-semibold">
            Message Preview
          </label>
          <div className="p-4 border border-black rounded-lg text-black bg-[#F4F4F5]">
            <div className="flex items-center border-b border-black pb-2 mb-4">
              <p className="text-black font-semibold">Notification</p>
            </div>
            <h3 className="font-bold">{messageData.title}</h3>
            <p className="text-black">
              {messageData.description === ""
                ? messagePreview.placeholder
                : messagePreview.message}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end bg-[#EEF2F7] gap-4 rounde-lg p-5">
          <button
            className="py-2 px-8 text-black border border-black rounded-lg"
            onClick={resetForm}
          >
            Cancel
          </button>
          <button
            className="py-2 px-8 bg-black text-white border border-gray-800 rounded-lg"
            type="button"
            onClick={handlePublish}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewNotification;
