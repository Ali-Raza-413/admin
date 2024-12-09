"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Section (Form) */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="space-y-8 bg-white p-8 rounded-xl shadow-lg w-[60%]">
          <h1 className="text-lg text-center font-bold text-black">Login</h1>

          <form onSubmit={handleClick}>
            <div className="flex flex-col space-y-4">
              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              {/* Password Input */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />

              <button
                type="submit"
                className="w-full bg-black text-white text-[17px] font-normal px-6 py-3 rounded-md font-inter"
              >
                Login
              </button>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4"
                />
                <label className="text-sm text-gray-700">Remember me</label>
              </div>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-[#F4F4F5] text-black text-[17px] font-normal px-6 py-3 rounded-md font-inter"
            onClick={() => router.push("/dashboard")}
          >
            Login
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 relative flex justify-end h-screen">
        <div className="absolute left-20 maxw-[100%] h-full lg:max-h-full mx-auto inset-0 overflow-hidden">
          {/* Image with Full Screen Height */}
          <img
            src="/img1.png"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
