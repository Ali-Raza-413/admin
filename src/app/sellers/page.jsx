"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getHeaderStyle, getBodyStyle } from "../components/Datatablestyle/Datatablestyle";
import BackButton from "../components/BackButton";
import { useRouter } from "next/navigation";

const Sellers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      ownerName: "John Doe",
      storeName: "John's Store",
      storeEmail: "john@example.com",
      phone: "123-456-7890",
      businessAddress: "123 Elm Street",
      createDate: "2024-12-01",
      status: "Active",
    },
    {
      id: 2,
      ownerName: "Jane Smith",
      storeName: "Jane's Boutique",
      storeEmail: "jane@example.com",
      phone: "987-654-3210",
      businessAddress: "456 Oak Avenue",
      createDate: "2024-11-15",
      status: "Inactive",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const router = useRouter();

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
      customer.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.storeEmail.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <div className="p-4">
      <div className="flex justify-between mt-5">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-2xl font-bold text-black">ALL Seller LIST</h1>
        </div>
        <button
          className="bg-gray-600 text-white px-6 py-2 rounded-lg mt-2"
        //   onClick={() => router.push("/customers/addcustomer")}
        >
          Add Seller
        </button>
      </div>

      <div className="mb-4">
        <InputText
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[30%] text-black p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      <DataTable
        value={filteredCustomers}
        selection={selectedCustomers}
        onSelectionChange={(e) => setSelectedCustomers(e.value)}
        dataKey="id"
        className="shadow-md"
      >
        <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
        <Column
          field="ownerName"
          header="Owner Name"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="storeName"
          header="Store Name"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="storeEmail"
          header="Store Email"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="phone"
          header="Phone Number"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="businessAddress"
          header="Business Address"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="createDate"
          header="Create Date"
          headerStyle={getHeaderStyle()}
          bodyStyle={getBodyStyle()}
        />
        <Column
          field="status"
          header="Status"
          body={statusTemplate}
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
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4 text-black">Edit Customer</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-black">Owner Name</label>
                <input
                  type="text"
                  value={editData.ownerName}
                  onChange={(e) =>
                    setEditData({ ...editData, ownerName: e.target.value })
                  }
                  className="w-full px-4 py-2 text-black border rounded-md"
                />
              </div>
              <div>
                <label className="block font-bold text-black">Store Name</label>
                <input
                  type="text"
                  value={editData.storeName}
                  onChange={(e) =>
                    setEditData({ ...editData, storeName: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md text-black"
                />
              </div>
              <div>
                <label className="block font-bold text-black">Store Email</label>
                <input
                  type="email"
                  value={editData.storeEmail}
                  onChange={(e) =>
                    setEditData({ ...editData, storeEmail: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md text-black"
                />
              </div>
              <div>
                <label className="block font-bold text-black">Phone Number</label>
                <input
                  type="text"
                  value={editData.phone}
                  onChange={(e) =>
                    setEditData({ ...editData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md text-black"
                />
              </div>
              <div>
                <label className="block font-bold text-black">Business Address</label>
                <input
                  type="text"
                  value={editData.businessAddress}
                  onChange={(e) =>
                    setEditData({ ...editData, businessAddress: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-md text-black"
                />
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <button
                onClick={closeEditModal}
                className=" py-2 px-4 rounded-md border text-black border-black"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSave}
                className="bg-black text-white py-2 px-4 rounded-md"
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
            <h2 className="text-lg font-bold mb-4 text-black">Are you sure?</h2>
            <p className="mb- text-black">Do you really want to delete this customer?</p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={closeDeleteModal}
                className="bg-gray-400 text-white py-2 px-4 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-4 rounded-md"
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

export default Sellers;
