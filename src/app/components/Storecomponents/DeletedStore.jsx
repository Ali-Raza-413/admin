import React, { useState } from "react";
import StoreCard from "./StoreCard";
import Modal from "./Modal";

const storeData = [
  {
    title: "SuperMart",
    status: "Deleted",
    description: "A one-stop shop for all your grocery needs.",
    location: "123 Main Street, Cityville",
    email: "contact@supermart.com",
    phone: "+1 234 567 890",
    totalProducts: 120,
    totalItems: 300,
  },
  {
    title: "FreshFoods",
    status: "Deleted",
    description: "Organic and fresh produce delivered to your door.",
    location: "456 Market Ave, Townsville",
    email: "info@freshfoods.com",
    phone: "+1 987 654 321",
    totalProducts: 80,
    totalItems: 200,
  },
  {
    title: "TechStore",
    status: "Deleted",
    description: "Latest gadgets and electronics at the best prices.",
    location: "789 Tech Park, Metropolis",
    email: "support@techstore.com",
    phone: "+1 555 678 910",
    totalProducts: 50,
    totalItems: 100,
  },
  {
    title: "GroceryHub",
    status: "Deleted",
    description: "Your neighborhood store for daily essentials.",
    location: "987 Elm Street, Suburbia",
    email: "help@groceryhub.com",
    phone: "+1 321 654 098",
    totalProducts: 60,
    totalItems: 150,
  },
  {
    title: "ShopMore",
    status: "Deleted",
    description: "Discounted prices on a wide variety of products.",
    location: "123 Shopping Blvd, Cityscape",
    email: "sales@shopmore.com",
    phone: "+1 222 333 444",
    totalProducts: 100,
    totalItems: 250,
  },
];

const DeletedStore = () => {
  const [stores, setStores] = useState(storeData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStore, setCurrentStore] = useState(null);

  const DeletedStores = stores.filter((store) => store.status === "Deleted");

  const handleEdit = (store) => {
    setCurrentStore(store);
    setIsModalOpen(true);
  };

  const handleSave = (updatedStore) => {
    setStores((prev) =>
      prev.map((store) =>
        store.title === updatedStore.title ? updatedStore : store
      )
    );
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DeletedStores.map((store, index) => (
          <StoreCard
            key={index}
            store={store}
            onEdit={() => handleEdit(store)} // Pass the edit handler
          />
        ))}
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        store={currentStore}
        onSave={handleSave}
      />
    </div>
  );
};

export default DeletedStore;
