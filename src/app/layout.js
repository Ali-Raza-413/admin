"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SIdebar";
export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Exclude layout for the login page
  const isLoginPage = pathname === "/auth";

  return (
    <html lang="en">
      <body className="h-screen bg-gray-200">
        {isLoginPage ? (
          // Render only children for the login page
          children
        ) : (
          <div className="admin-panel">
            <div className="flex flex-col lg:flex-row h-screen gap-3 p-3">
              {/* Sidebar */}
              <div className="w-full lg:w-[300px] bg-black rounded-tl-lg rounded-xl overflow-y-auto h-auto lg:h-full scrollbar-hide">
                <Sidebar />
              </div>

              {/* Main Content */}
              <div className="w-full lg:w-[calc(100%-300px)] flex flex-col bg-white rounded-lg lg:p-5 shadow-md h-auto lg:h-full">
                <Navbar />
                <div className="overflow-y-auto custom-scrollbar">
                  {children}
                </div>
              </div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
