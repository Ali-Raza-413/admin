import React, { useState } from "react";

const Security = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Saving data:", formData);
    // Add save logic here
  };

  return (
    <div className="max-w-4xl  p-6">
      <h2 className="text-2xl font-bold text-black mb-6">
        Security Information
      </h2>
      <form>
        {/* Current Password */}
        <div className="mb-4">
          <label className="block text-black font-semibold mb-2">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full p-3 border border-black text-black rounded-lg bg-[#F4F4F5]"
            placeholder="Enter your current password"
          />
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label className="block text-black font-semibold mb-2">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-3 border border-black text-black rounded-lg bg-[#F4F4F5]"
            placeholder="Enter your new password"
          />
        </div>

        {/* Confirm New Password */}
        <div className="mb-6">
          <label className="block text-black font-semibold mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-black text-black rounded-lg bg-[#F4F4F5]"
            placeholder="Confirm your new password"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          className="px-8 py-3 bg-black text-white font-semibold rounded-lg"
        >
          Save
        </button>
        </div>
      </form>
    </div>
  );
};

export default Security;
