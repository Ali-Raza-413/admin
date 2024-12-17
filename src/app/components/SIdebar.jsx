"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineDown, AiOutlineUp, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const sidebarItems = [
  { to: "/dashboard", icon: "/a1.png", label: "Dashboard" },
  {
    to: null,
    icon: "/a4.png",
    label: "Category",
    subItems: [
      { to: "/cateogory", label: "Category List" },
      { to: "/attributes", label: "Attributes" },
    ],
  },
  {
    to: null,
    icon: "/a6.png",
    label: "User Management",
    subItems: [
      { to: "/customers", label: "Customers" },
      { to: "/sellers", label: "Sellers" },
    ],
  },
  { to: "/storeapproval", icon: "/a6.png", label: "Store Approval" },
  { to: "/subscription", icon: "/a9.png", label: "Subscription Method" },
  { to: "/notifications", icon: "/e2.png", label: "Push Notifications" },
  { to: "/setting", icon: "/e3.png", label: "Settings" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const [openDropdown, setOpenDropdown] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    sidebarItems.forEach((item) => {
      if (item.subItems) {
        const activeSubItem = item.subItems.find(
          (subItem) => subItem.to === pathname
        );
        if (activeSubItem) {
          setActiveItem(activeSubItem.label);
          setOpenDropdown((prev) => ({ ...prev, [item.label]: true }));
        }
      } else if (item.to === pathname) {
        setActiveItem(item.label);
      }
    });
  }, [pathname]);

  const toggleDropdown = (label) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const handleItemClick = (label, to) => {
    setActiveItem(label);
    if (to) {
      window.location.href = to;
    }
  };

  const getTabClass = (label) =>
    `flex items-center mt-3 px-3 py-3 cursor-pointer text-white hover:bg-gray-700 ${
      activeItem === label ? "bg-gray-400 rounded-lg text-white" : ""
    }`;

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-3 bg-gray-200 text-black fixed top-3 left-1 z-50 rounded-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <AiOutlineMenu className="w-6 h-6" />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-black transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40 w-64 lg:static lg:transform-none lg:w-full`}
      >
        <div className="p-5 ">
          <h1 className="text-white font-bold text-2xl start pt-3">
            Near by Store
          </h1>
          <div className="pt-5">
            {sidebarItems.map((item) => (
              <div key={item.label}>
                <div
                  className={getTabClass(item.label)}
                  onClick={() =>
                    item.subItems
                      ? toggleDropdown(item.label)
                      : handleItemClick(item.label, item.to)
                  }
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                    className="mr-4"
                  />
                  <span className="ml-2">{item.label}</span>
                  {item.subItems && (
                    <span className="ml-auto">
                      {openDropdown[item.label] ? (
                        <AiOutlineUp className="w-4 h-4 text-white" />
                      ) : (
                        <AiOutlineDown className="w-4 h-4 text-white" />
                      )}
                    </span>
                  )}
                </div>

                {item.subItems && openDropdown[item.label] && (
                  <div className="ml-8 mt-2">
                    {item.subItems.map((subItem) => (
                      <div
                        key={subItem.label}
                        className={`flex items-center px-3 py-2 text-md text-white hover:bg-gray-700 ${
                          activeItem === subItem.label
                            ? "bg-gray-400 rounded-lg"
                            : ""
                        }`}
                        onClick={() =>
                          handleItemClick(subItem.label, subItem.to)
                        }
                      >
                        <img
                          src="/fr.png"
                          alt="right icon"
                          className="w-6 h-6 mr-1"
                        />
                        {subItem.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
