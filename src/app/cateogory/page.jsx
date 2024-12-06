"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  getHeaderStyle,
  getBodyStyle,
} from "../components/Datatablestyle/Datatablestyle";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/b2.png",
      title: "Product One",
      name: "Red T-Shirt",
      size: "Medium",
      subactegory: "polo",
      createdBy: "Admin",
      isActive: true,
      createdDate: "2024-11-28",
    },
    {
      id: 2,
      image: "/b2.png",
      title: "Product Two",
      name: "Blue Jeans",
      size: "S,M,L,XL",
      subactegory: "polo",
      createdBy: "Admin",
      isActive: false,
      createdDate: "2024-11-27",
    },
    {
      id: 3,
      image: "/b2.png",
      title: "Product Three",
      name: "Green Jacket",
      size: "S,M,L,XL",
      subactegory: "polo",
      createdBy: "Admin",
      isActive: true,
      createdDate: "2024-11-26",
    },
    {
      id: 4,
      image: "/b2.png",
      title: "Product Four",
      name: "Black Shoes",
      size: "S,M,L,XL",
      isActive: true,
      createdDate: "2024-11-28",
      subactegory: "polo",
      createdBy: "Admin",
    },
    {
      id: 5,
      image: "/b2.png",
      title: "Product Five",
      name: "White Hat",
      size: "S,M,L,XL",
      isActive: false,
      createdDate: "2024-11-27",
      subactegory: "polo",
      createdBy: "Admin",
    },
    {
      id: 6,
      image: "/b2.png",
      title: "Product Six",
      name: "Grey Scarf",
      size: "S,M,L,XL",
      isActive: true,
      createdDate: "2024-11-26",
      subactegory: "polo",
      createdBy: "Admin",
    },
    {
      id: 7,
      image: "/b2.png",
      title: "Product Seven",
      name: "Yellow Dress",
      size: "S,M,L,XL",
      isActive: true,
      createdDate: "2024-11-28",
      subactegory: "polo",
      createdBy: "Admin",
    },
    {
      id: 8,
      image: "/b2.png",
      title: "Product Eight",
      name: "Brown Belt",
      size: "S,M,L,XL",
      isActive: false,
      createdDate: "2024-11-27",
      subactegory: "polo",
      createdBy: "Admin",
    },
    {
      id: 9,
      image: "/b2.png",
      title: "Product Nine",
      name: "Pink Skirt",
      size: "S,M,L,XL",
      isActive: true,
      createdDate: "2024-11-26",
      subactegory: "polo",
      createdBy: "Admin",
    },
    {
      id: 10,
      image: "/b2.png",
      title: "Product Ten",
      name: "Purple Gloves",
      size: "Small",
      isActive: true,
      createdDate: "2024-11-26",
      subactegory: "polo",
      createdBy: "Admin",
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [modalMode, setModalMode] = useState("view");
  const router = useRouter();

  const categories = ["All Categories", "Shirts", "Pants"];
  const subcategories = ["All Subcategories", "Neck", "Tees"];

  const toggleStatus = (product) => {
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, isActive: !item.isActive } : item
    );
    setProducts(updatedProducts);
  };

  const openDetails = (product, mode = "view") => {
    setCurrentProduct(product);
    setModalMode(mode);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setCurrentProduct(null);
    setModalMode("view");
  };

  const handleDelete = () => {
    const updatedProducts = products.filter(
      (product) => product.id !== currentProduct.id
    );
    setProducts(updatedProducts);
    closeDetails();
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All Categories" ||
        category === "" ||
        product.category === category) &&
      (subcategory === "All Subcategories" ||
        subcategory === "" ||
        product.subcategory === subcategory)
  );

  const toggleTemplate = (rowData) => (
    <div
      className={`relative w-12 h-6 rounded-full cursor-pointer ${
        rowData.isActive ? "bg-black" : "bg-gray-400"
      }`}
      onClick={() => toggleStatus(rowData)}
    >
      <div
        className={`absolute w-4 h-4 rounded-full top-1 transition-all ${
          rowData.isActive ? "right-1 bg-white" : "left-1 bg-gray-500"
        }`}
      ></div>
    </div>
  );

  const actionsTemplate = (rowData) => (
    <div className="flex gap-5">
      <button onClick={() => openDetails(rowData, "edit")}>
        <FiEdit2 className="w-5 h-5 text-black" />
      </button>
      <button onClick={() => openDetails(rowData, "delete")}>
        <FiTrash2 className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );

  return (
    <div className="p-4 space-y-4 bg-white min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-black">
          ALL CATEGORIES LIST
        </h1>
        <button
          className="bg-gray-600 text-white px-6 py-2 rounded-lg"
          onClick={() => router.push("/cateogory/addcategory")}
        >
          Add Category
        </button>
      </div>
      <div className="flex items-center gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 border rounded-xl bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          className="px-3 py-2 border rounded-xl bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          {subcategories.map((subcat, idx) => (
            <option key={idx} value={subcat}>
              {subcat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[40%] max-w-sm px-3 py-2 border bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto custom-scrollbar">
        <DataTable
          value={filteredProducts}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          paginator
          scrollable
          tableStyle={{ minWidth: "100rem" }}
          rows={10}
        >
          <Column
            selectionMode="multiple"
            style={{ width: "3em" }}
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="id"
            header="ID"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="image"
            header="Image"
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
            body={(rowData) => (
              <img
                src={rowData.image}
                alt={rowData.title}
                className="w-10 h-10 object-cover rounded-md"
              />
            )}
          ></Column>
          <Column
            field="name"
            header="Category Name"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="subactegory"
            header="Subcategory Name"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="size"
            header="Size"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="createdBy"
            header="Created By"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            field="createdDate"
            header="Date Created"
            sortable
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            header="Status"
            body={toggleTemplate}
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
          <Column
            header="Actions"
            body={actionsTemplate}
            bodyStyle={getBodyStyle()}
            headerStyle={getHeaderStyle()}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default ProductManagement;
