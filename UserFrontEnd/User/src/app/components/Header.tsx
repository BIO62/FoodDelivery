"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DropdownMenuCheckboxes } from "./dropmenu";

const Header = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div>
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              ХООЛОНДОО
            </Link>
          </div>
          <div className="flex justify-center padding-4">
            <DropdownMenuCheckboxes />
            <button
              onClick={handleLoginClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/image/header-img.png"
              alt="Background"
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Text Section */}
          <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
            <div className="text-white text-center p-4">
              <h2 className="text-2xl font-bold">Хоол захиалга</h2>
              <p className="mt-2">
                TEXT
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
