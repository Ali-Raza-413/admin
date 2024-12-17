"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  getHeaderStyle,
  getBodyStyle,
} from "@/app/components/Datatablestyle/Datatablestyle";

// Subcategories for each category
const CATEGORIES = {
  clothing: ["Men", "Women", "Kids"],
  food: ["Vegetables", "Fruits", "Dairy", "Meat", "Bakery"],
};

// Mock table data
const TABLE_DATA = {
  clothing: {
    Men: [
      {
        id: 1,
        icon: "👕",
        category: "Clothing",
        subcategory: "Men",
        name: "Red Shirt",
        price: "$25",
        stock: 10,
        createdDate: "2024-08-01",
        updatedDate: "2024-08-05",
        sellerName: "John Doe",
        storeName: "John's Store",
      },
      {
        id: 2,
        icon: "👖",
        category: "Clothing",
        subcategory: "Men",
        name: "Blue Jeans",
        price: "$40",
        stock: 5,
        createdDate: "2024-08-02",
        updatedDate: "2024-08-06",
        sellerName: "Jane Doe",
        storeName: "Jane's Apparel",
      },
    ],
    Women: [
      {
        id: 1,
        icon: "👕",
        category: "Clothing",
        subcategory: "Men",
        name: "Red Shirt",
        price: "$25",
        stock: 10,
        createdDate: "2024-08-01",
        updatedDate: "2024-08-05",
        sellerName: "John Doe",
        storeName: "John's Store",
      },
      {
        id: 2,
        icon: "👖",
        category: "Clothing",
        subcategory: "Men",
        name: "Blue Jeans",
        price: "$40",
        stock: 5,
        createdDate: "2024-08-02",
        updatedDate: "2024-08-06",
        sellerName: "Jane Doe",
        storeName: "Jane's Apparel",
      },
    ],
    Kids: [
      {
        id: 1,
        icon: "👕",
        category: "Clothing",
        subcategory: "Men",
        name: "Red Shirt",
        price: "$25",
        stock: 10,
        createdDate: "2024-08-01",
        updatedDate: "2024-08-05",
        sellerName: "John Doe",
        storeName: "John's Store",
      },
      {
        id: 2,
        icon: "👖",
        category: "Clothing",
        subcategory: "Men",
        name: "Blue Jeans",
        price: "$40",
        stock: 5,
        createdDate: "2024-08-02",
        updatedDate: "2024-08-06",
        sellerName: "Jane Doe",
        storeName: "Jane's Apparel",
      },
    ],
  },
  food: {
    Vegetables: [
      {
        id: 1,
        icon: "🥕",
        category: "Food",
        subcategory: "Vegetables",
        name: "Carrot",
        price: "$2",
        stock: 50,
        createdDate: "2024-08-01",
        updatedDate: "2024-08-03",
        sellerName: "Farmer Joe",
        storeName: "Joe's Produce",
      },
    ],
  },
};

const Modal = ({ isOpen, rowData, onClose, onSave }) => {
  const [formData, setFormData] = useState(rowData);

  useEffect(() => {
    setFormData(rowData);
  }, [rowData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4 text-black">Edit Item</h2>
        <input
          type="text"
          placeholder="Name"
          value={formData?.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="p-2 border rounded mb-2 w-full text-black"
        />
        <input
          type="text"
          placeholder="Price"
          value={formData?.price || ""}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="p-2 border rounded mb-2 w-full text-black"
        />
        <input
          type="number"
          placeholder="Stock"
          value={formData?.stock || ""}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          className="p-2 border rounded mb-2 w-full text-black"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onSave(formData)}
            className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const Subcategories = () => {
  const { slug } = useParams();
  const [activeSubcategory, setActiveSubcategory] = useState("");
  const [tableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (slug && CATEGORIES[slug]) {
      const firstSubcategory = CATEGORIES[slug][0];
      setActiveSubcategory(firstSubcategory);
      setTableData(TABLE_DATA[slug]?.[firstSubcategory] || []);
    }
  }, [slug]);

  const handleSubcategoryChange = (subcategory) => {
    setActiveSubcategory(subcategory);
    setTableData(TABLE_DATA[slug]?.[subcategory] || []);
  };

  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allIds = tableData.map((row) => row.id);
      setSelectedRows(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleEdit = (rowData) => {
    setModalData(rowData);
    setIsModalOpen(true);
  };

  const handleSaveModal = (updatedRow) => {
    setTableData((prevData) =>
      prevData.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
    setIsModalOpen(false);
  };

  const handleDelete = (rowId) => {
    setTableData((prevData) => prevData.filter((row) => row.id !== rowId));
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <BackButton />
        <h1 className="text-gray-600 text-2xl font-medium capitalize">
          {slug.charAt(0).toUpperCase() + slug.slice(1)} Categories
        </h1>
      </div>

      <div className="flex space-x-4 mb-6">
        {CATEGORIES[slug]?.map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => handleSubcategoryChange(subcategory)}
            className={`px-4 py-2 rounded-md font-medium ${
              activeSubcategory === subcategory
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {subcategory}
          </button>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2 text-black">
          {activeSubcategory} Table Data
        </h2>
        {tableData.length > 0 ? (
          <div className="overflow-x-auto custom-scrollbar">
            <DataTable
              value={tableData}
              className="p-datatable-sm"
              tableStyle={{ minWidth: "100rem" }}
            >
              <Column
                header={
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                }
                body={(rowData) => (
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(rowData.id)}
                    onChange={() => handleCheckboxChange(rowData.id)}
                  />
                )}
                headerStyle={getHeaderStyle()}
                bodyStyle={getBodyStyle()}
              />
              <Column
                field="id"
                header="ID"
                headerStyle={getHeaderStyle()}
                bodyStyle={getBodyStyle()}
              />
              <Column
                field="icon"
                header="Icon"
                headerStyle={getHeaderStyle()}
                bodyStyle={getBodyStyle()}
              />
              <Column
                field="name"
                header="Name"
                headerStyle={getHeaderStyle()}
                bodyStyle={getBodyStyle()}
              />
              <Column
                field="price"
                header="Price"
                headerStyle={getHeaderStyle()}
                bodyStyle={getBodyStyle()}
              />
              <Column
                field="stock"
                header="Stock"
                headerStyle={getHeaderStyle()}
                bodyStyle={getBodyStyle()}
              />
              <Column
                field="sellerName"
                header="Seller Name"
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
                field="createdDate"
                header="Created Date"
                headerStyle={getHeaderStyle()}
                bodyStyle={getBodyStyle()}
              />
              <Column
                field="updatedDate"
                header="Updated Date"
                headerStyle={getHeaderStyle()}
                bodyStyle={getBodyStyle()}
              />
              <Column
                header="Actions"
                body={(rowData) => (
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(rowData)}>
                      <FaEdit className="text-black" />
                    </button>
                    <button onClick={() => handleDelete(rowData.id)}>
                      <FaTrash className="text-red-500" />
                    </button>
                  </div>
                )}
                headerStyle={getHeaderStyle()}
                bodyStyle={getBodyStyle()}
              />
            </DataTable>
          </div>
        ) : (
          <div className="text-gray-500">
            No data available for {activeSubcategory}.
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        rowData={modalData}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveModal}
      />
    </div>
  );
};

export default Subcategories;
