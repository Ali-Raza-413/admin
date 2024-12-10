import React, { useState } from "react";

const Modal = ({ isOpen, onClose, store = { title: "", description: "", location: "" }, onSave }) => {
  const [formData, setFormData] = useState(() => ({
    title: store?.title || "",
    description: store?.description || "",
    location: store?.location || "",
  }));

  if (typeof window !== "undefined" && !isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-lg font-bold text-black">Edit Store Details</h2>
        <div>
          <label className="block font-semibold text-black">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>
        <div>
          <label className="block font-semibold text-black">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>
        <div>
          <label className="block font-semibold text-black">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-black"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 rounded text-black border border-black">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
