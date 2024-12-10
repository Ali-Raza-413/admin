"use client"; // Marking this file for client-side only

import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa"; // For actions dropdown
import { useRouter } from "next/navigation";

const messagesData = [
  {
    id: 1,
    image: "/s1.png",
    title: "Nearby Store Promotions",
    description:
      "Just dropping by to let you know that there are 5 days left until your plan expires, eh? Don't waste time, get the plan that best fits your pocket now!",
    date: "2024-12-10",
  },
  {
    id: 2,
    image: "/s1.png",
    title: "Nearby Store Promotions",
    description:
      "Just dropping by to let you know that there are 5 days left until your plan expires, eh? Don't waste time, get the plan that best fits your pocket now!",
    date: "2024-12-09",
  },
  {
    id: 3,
    image: "/s1.png",
    title: "Nearby Store Promotions",
    description:
      "Hurry up! You don't want to miss the limited-time offers at your nearby stores. Check them out now!",
    date: "2024-12-09",
  },
  {
    id: 4,
    image: "/s1.png",
    title: "Nearby Store Promotions",
    description:
      "Hurry up! You don't want to miss the limited-time offers at your nearby stores. Check them out now!",
    date: "2024-12-09",
  },
  // More messages can be added here
];

const Messages = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedMessages([...selectedMessages, id]);
    } else {
      setSelectedMessages(
        selectedMessages.filter((messageId) => messageId !== id)
      );
    }
  };

  const handleActionClick = (action, id) => {
    if (action === "Mark as Read") {
      // Mark the message as read (update checkbox state)
      handleCheckboxChange({ target: { checked: true } }, id);
    } else if (action === "Delete") {
      // Handle deletion logic (e.g., remove message from the list)
      setSelectedMessages(
        selectedMessages.filter((messageId) => messageId !== id)
      );
      alert("Deleted message with id: " + id); // Here you could call an API to delete the message
    }
    setDropdownOpen(null); // Close the dropdown after an action is selected
  };

  return (
    <div>
      {/* Search and Actions Bar */}
      <div className="flex justify-between items-center p-4">
        {/* Search Bar */}
        <div className="flex items-center gap-2 ">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-xl"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Messages List */}
      <div className="grid grid-cols-2 gap-6 px-3 py-4">
        {messagesData
          .filter((message) =>
            message.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((message) => (
            <div
              key={message.id}
              className="flex items-start p-4 bg-white border rounded-lg shadow-md"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="w-5 h-5 mr-4 mt-4"
                checked={selectedMessages.includes(message.id)}
                onChange={(e) => handleCheckboxChange(e, message.id)}
              />

              {/* Message Content */}
              <div className="flex items-start w-full">
                <img
                  src={message.image}
                  alt="Store Image"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex flex-col w-full">
                  <h3 className="font-semibold text-lg text-black">
                    {message.title}
                  </h3>
                  <p className="text-sm text-black">{message.description}</p>
                  <p className="text-black text-sm ml-auto">{message.date}</p>
                </div>

                {/* Date */}
              </div>

              {/* Action Button (Dropdown) */}
              <div className="relative ml-4">
                <button
                  className="p-2 text-gray-600"
                  onClick={() =>
                    setDropdownOpen(
                      dropdownOpen === message.id ? null : message.id
                    )
                  }
                >
                  <FaEllipsisV />
                </button>
                {dropdownOpen === message.id && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md">
                    <button
                      className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200"
                      onClick={() =>
                        handleActionClick("Mark as Read", message.id)
                      }
                    >
                      Mark as Read
                    </button>
                    <button
                      className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200"
                      onClick={() => handleActionClick("Delete", message.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Messages;
