"use client"; // Marking this file for client-side only

import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa"; // For actions dropdown

const messagesData = [
  {
    id: 1,
    image: "/b2.png",
    title: "Message Title 1",
    description: "This is the description for message 1.",
    date: "2024-12-10",
  },
  {
    id: 2,
    image: "/b2.png",
    title: "Message Title 2",
    description: "This is the description for message 2.",
    date: "2024-12-09",
  },
  {
    id: 3,
    image: "/b2.png",
    title: "Message Title 3",
    description: "This is the description for message 3.",
    date: "2024-12-08",
  },
  {
    id: 4,
    image: "/b2.png",
    title: "Message Title 3",
    description: "This is the description for message 3.",
    date: "2024-12-08",
  },
  {
    id: 5,
    image: "/b2.png",
    title: "Message Title 3",
    description: "This is the description for message 3.",
    date: "2024-12-08",
  },
  // More messages can be added here
];

const SentMessages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Show delete confirmation modal
  const [messageToDelete, setMessageToDelete] = useState(null); // Message to be deleted

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

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id); // Toggle the dropdown
  };

  const handleActionClick = (action, id) => {
    if (action === "Mark as Read") {
      // Mark the message as read by updating the selected messages
      setSelectedMessages((prev) => [...prev, id]);
    } else if (action === "Delete") {
      // Show delete confirmation modal
      setMessageToDelete(id);
      setShowDeleteModal(true);
    }
    setDropdownOpen(null); // Close the dropdown after an action is selected
  };

  const handleDeleteConfirm = () => {
    // Logic for deleting the message
    console.log(`Deleted message with id: ${messageToDelete}`);
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false); // Close the modal without deleting
  };

  return (
    <>
      <div className="flex justify-between items-center p-4">
        {/* Search Bar */}
        <div className="flex items-center gap-2">
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
      <div className="grid grid-cols-1 gap-6 px-3 py-4">
        {messagesData
          .filter((message) =>
            message.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((message) => (
            <div key={message.id} className="p-4 rounded-lg flex items-start bg-[#F4F4F5]">
              {/* Checkbox */}
              <input
                type="checkbox"
                className="w-5 h-5 mr-4 mt-3"
                checked={selectedMessages.includes(message.id)}
                onChange={(e) => handleCheckboxChange(e, message.id)}
              />
              {/* Message Content */}
              <div className="flex items-start w-full">
                <img
                  src={message.image}
                  alt={`${message.title} Image`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="w-full">
                  <h3 className="font-semibold text-lg text-black">{message.title}</h3>
                  <p className=" text-sm text-black">{message.description}</p>
                  <p className="text-black text-xs">{message.date}</p>
                </div>

                {/* Action Button (Dropdown) */}
                <div className="relative ml-4">
                  <button
                    className="p-2 text-gray-600"
                    onClick={() => toggleDropdown(message.id)}
                  >
                    <FaEllipsisV />
                  </button>
                  {dropdownOpen === message.id && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md">
                      <button
                        className="w-full px-4 py-2 text-black hover:bg-gray-200"
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
            </div>
          ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-black">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Are you sure you want to delete this message?
            </h3>
            <div className="flex justify-end gap-4">
              <button
                className="text-black px-4 py-2 rounded-lg"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={handleDeleteConfirm}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SentMessages;
