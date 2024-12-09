"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useRouter } from "next/navigation";
import {
  getHeaderStyle,
  getBodyStyle,
} from "../components/Datatablestyle/Datatablestyle";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import BackButton from "../components/BackButton"; // Import icons

const AttributesPage = () => {
  const [attributes, setAttributes] = useState([
    {
      id: 1,
      category: "Color",
      value: "Red",
      createdAt: "2024-12-01",
      createdBy: "Admin",
    },
    {
      id: 2,
      category: "Size",
      value: "Medium",
      createdAt: "2024-12-05",
      createdBy: "John",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const router = useRouter();

  // Handlers for modal
  const openEditModal = (rowData) => {
    setEditData(rowData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditData(null);
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Save the updated data
    setAttributes((prev) =>
      prev.map((attr) => (attr.id === editData.id ? { ...editData } : attr))
    );
    closeModal();
  };

  const handleDelete = (id) => {
    setAttributes((prev) => prev.filter((attr) => attr.id !== id));
  };

  const filteredAttributes = attributes.filter(
    (attr) =>
      attr.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attr.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attr.createdBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Custom action icons
  const actionTemplate = (rowData) => (
    <div className="flex items-center gap-2">
      <AiOutlineEdit
        size={20}
        className="text-black"
        onClick={() => openEditModal(rowData)}
      />
      <AiOutlineDelete
        size={20}
        className="text-red-500 cursor-pointer hover:text-red-600"
        onClick={() => handleDelete(rowData.id)}
      />
    </div>
  );

  return (
    <div className="p-4">
      <div className="flex justify-between mt-5">
        <div className="flex items-center gap-2  ">
          <BackButton />
          <h1 className="text-2xl font-bold text-black ">Attributes</h1>
        </div>
        <button
          className="bg-gray-600 text-white px-6  py-2 rounded-lg mt-2"
          onClick={() => router.push("/attributes/addattribute")}
        >
          Add Attribute
        </button>
      </div>
      {/* Custom Search Filter */}
      <div className="mt-4">
        <InputText
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[39%] p-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* DataTable */}
      <DataTable value={filteredAttributes} className="shadow-md mt-4">
        <Column
          field="category"
          header="Category"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="value"
          header="Value"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="createdAt"
          header="Created At"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="createdBy"
          header="Created By"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          body={actionTemplate}
          header="Actions"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
      </DataTable>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4 text-black">Edit Attribute</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="category" className="block font-bold text-black">
                  Category
                </label>
                <InputText
                  id="category"
                  value={editData.category}
                  onChange={(e) =>
                    setEditData({ ...editData, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div>
                <label htmlFor="value" className="block font-bold text-black">
                  Value
                </label>
                <InputText
                  id="value"
                  value={editData.value}
                  onChange={(e) =>
                    setEditData({ ...editData, value: e.target.value })
                  }
                  className="w-[40%] px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-black text-black rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttributesPage;
