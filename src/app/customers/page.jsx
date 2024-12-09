"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getHeaderStyle,getBodyStyle } from "../components/Datatablestyle/Datatablestyle";
import BackButton from "../components/BackButton";
import { useRouter } from "next/navigation";
const Customer = () => {
  // Sample customer data
  const [customers, setCustomers] = useState([
    {
      id: 1,
      customerName: "John Doe",
      email: "john@example.com",
      location: "New York",
      phone: "123-456-7890",
      address: "123 Elm Street",
      orderDate: "2024-12-01",
      status: "Active",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      email: "jane@example.com",
      location: "California",
      phone: "987-654-3210",
      address: "456 Oak Avenue",
      orderDate: "2024-11-15",
      status: "Inactive",
    },
    {
      id: 3,
      customerName: "Robert Brown",
      email: "robert@example.com",
      location: "Texas",
      phone: "555-666-7777",
      address: "789 Pine Road",
      orderDate: "2024-12-03",
      status: "Active",
    },
    {
      id: 4,
      customerName: "Emily Johnson",
      email: "emily@example.com",
      location: "Florida",
      phone: "444-555-6666",
      address: "321 Cedar Lane",
      orderDate: "2024-10-29",
      status: "Inactive",
    },
    {
      id: 5,
      customerName: "Michael Green",
      email: "michael@example.com",
      location: "Washington",
      phone: "111-222-3333",
      address: "654 Spruce Circle",
      orderDate: "2024-09-17",
      status: "Active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const router = useRouter();
  // Handlers
  const openEditModal = (rowData) => {
    setEditData(rowData);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditData(null);
    setIsEditModalOpen(false);
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteId(null);
    setIsDeleteModalOpen(false);
  };

  const handleEditSave = () => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === editData.id ? { ...editData } : customer
      )
    );
    closeEditModal();
  };

  const handleDelete = () => {
    setCustomers((prev) => prev.filter((customer) => customer.id !== deleteId));
    closeDeleteModal();
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const actionTemplate = (rowData) => (
    <div className="flex items-center gap-2">
      <FaEdit
        className="text-black cursor-pointer"
        onClick={() => openEditModal(rowData)}
      />
      <FaTrash
        className="text-red-500 cursor-pointer"
        onClick={() => openDeleteModal(rowData.id)}
      />
    </div>
  );

  const statusTemplate = (rowData) => (
    <span
      className={`px-2 py-1 rounded ${
        rowData.status === "Active"
          ? "bg-green-100 text-green-600"
          : "bg-red-100 text-red-600"
      }`}
    >
      {rowData.status}
    </span>
  );

  return (
    <div className="p-4">
   <div className="flex justify-between mt-5">
        <div className="flex items-center gap-2  ">
          <BackButton />
          <h1 className="text-2xl font-bold text-black ">ALL CUSTOMERS LIST</h1>
        </div>
        <button
          className="bg-gray-600 text-white px-6  py-2 rounded-lg mt-2"
          onClick={() => router.push("/customers/addcustomer")}
        >
          Add Customer
        </button>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <InputText
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[30%] text-black p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* DataTable */}
      <DataTable value={filteredCustomers} className="shadow-md">
        <Column field="customerName" header="Customer Name" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()}/>
        <Column field="email" header="Email" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
        <Column field="location" header="Location" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
        <Column field="phone" header="Phone"  headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()}/>
        <Column field="address" header="Address" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()}/>
        <Column field="orderDate" header="Order Date" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
        <Column field="status" header="Status" body={statusTemplate} headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()} />
        <Column body={actionTemplate} header="Actions" headerStyle={getHeaderStyle()} bodyStyle={getBodyStyle()}/>
      </DataTable>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Edit Customer</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-bold">Customer Name</label>
                <input
                  type="text"
                  value={editData.customerName}
                  onChange={(e) =>
                    setEditData({ ...editData, customerName: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-bold">Email</label>
                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) =>
                    setEditData({ ...editData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={closeEditModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Delete Customer</h2>
            <p>Are you sure you want to delete this customer?</p>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;
