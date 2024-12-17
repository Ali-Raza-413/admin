"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import BackButton from "@/app/components/BackButton";
import {
  getHeaderStyle,
  getBodyStyle,
} from "../components/Datatablestyle/Datatablestyle";
import { useRouter } from "next/navigation";

// Mock Data
const mockData = [
  {
    id: 1,
    name: "Clothing",
    createdDate: "2024-08-01",
    updatedDate: "2024-08-05",
    totalSubcategories: 5,
    slug: "clothing", // Add slug for URL
  },
  {
    id: 2,
    name: "Food",
    createdDate: "2024-08-02",
    updatedDate: "2024-08-06",
    totalSubcategories: 4,
    slug: "food", // Add slug for URL
  },
  {
    id: 3,
    name: "Grocery",
    createdDate: "2024-08-03",
    updatedDate: "2024-08-07",
    totalSubcategories: 6,
    slug: "grocery", // Add slug for URL
  },
  {
    id: 4,
    name: "Electronics",
    createdDate: "2024-08-04",
    updatedDate: "2024-08-08",
    totalSubcategories: 3,
    slug: "electronics", // Add slug for URL
  },
];

const CategoriesTable = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const router = useRouter();

  useEffect(() => {
    // Load Data - Simulate API call
    setCategories(mockData);
  }, []);

  // Delete Handler
  const handleDelete = () => {
    const updatedData = categories.filter((item) => item.id !== currentCategory.id);
    setCategories(updatedData);
    setShowDeleteModal(false); // Close modal after deletion
  };

  // Edit Handler (Open a Modal or Form)
  const handleEdit = (category) => {
    setCurrentCategory(category);
    setShowEditModal(true);
  };

  // View Handler (Redirect to Category Page)
  const handleView = (slug) => {
    router.push(`/cateogory/${slug}`);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-[#78828A] text-[24px] font-[500]">All Categories</h1>
      </div>
        <div>
        <button
          className="bg-gray-600 text-white px-6  py-2 rounded-lg mt-2"
          onClick={() => router.push("/cateogory/addcategory")}
        >
          Add Category
        </button>
        </div>
      </div>
      {/* Data Table */}
      <DataTable
        value={categories}
        selection={selectedCategories}
        onSelectionChange={(e) => setSelectedCategories(e.value)}
        dataKey="id"
      >
        {/* Checkbox Selection */}
        <Column
          selectionMode="multiple"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>

        {/* Category Name */}
        <Column
          field="name"
          header="Category Name"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>

        {/* Created Date */}
        <Column
          field="createdDate"
          header="Created Date"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>

        {/* Updated Date */}
        <Column
          field="updatedDate"
          header="Updated Date"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>

        {/* Total Subcategories */}
        <Column
          field="totalSubcategories"
          header="Total Subcategories"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>

        {/* Actions */}
        <Column
          header="Actions"
          body={(rowData) => (
            <div className="flex gap-4">
              {/* View Icon */}
              <button
                onClick={() => handleView(rowData.slug)}
                className="text-green-500 hover:text-green-700"
              >
                <FiEye />
              </button>
              {/* Edit Icon */}
              <button
                onClick={() => handleEdit(rowData)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FiEdit2 />
              </button>
              {/* Delete Icon */}
              <button
                onClick={() => {
                  setCurrentCategory(rowData);
                  setShowDeleteModal(true);
                }}
                className="text-red-500 hover:text-red-700"
              >
                <FiTrash2 />
              </button>
            </div>
          )}
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        ></Column>
      </DataTable>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl mb-4">Edit Category</h2>
            <div>
              <h3 className="text-lg mb-2">Category: {currentCategory?.name}</h3>
              {/* Add form inputs for editing */}
              <button
                onClick={() => setShowEditModal(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl mb-4">Delete Category</h2>
            <p>
              Are you sure you want to delete the category "{currentCategory?.name}"?
            </p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesTable;
