"use client";
import React, { useEffect, useState } from "react";
import LogoutButton from "./LogOut";

const UserPage: React.FC = () => {
  const [categories, setCategories] = useState<{ _id: string; categoryName: string }[]>([]);
  const [foods, setFoods] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchFoodCategories = async () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    try {
      const response = await fetch("http://localhost:5000/category", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch categories: ${errorText}`);
      }

      const data = await response.json();
      console.log("Fetched categories:", data);

      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        throw new Error("Fetched data is not an array.");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error instanceof Error ? error.message : "Failed to load categories.");
    }
  };
  

  const fetchFoodsByCategory = async (categoryId: string) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:5000/foods/?category=${categoryId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch foods: ${errorText}`);
      }

      const data = await response.json();
      console.log("Fetched foods:", data);
      console.log("Fetching foods for category ID:", categoryId);
      if (Array.isArray(data)) {
        setFoods(data);
      } else {
        throw new Error("Fetched data is not an array.");
      }
    } catch (error) {
      console.error("Error fetching foods:", error);
      setError(error instanceof Error ? error.message : "Failed to load foods.");
    }
  };

  useEffect(() => {
    fetchFoodCategories();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    fetchFoodsByCategory(categoryId);
  };


  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">Welcome to Food Delivery</h1>
        <nav className="flex justify-between">
          <ul className="flex space-x-4">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Menu</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
          <LogoutButton />
        </nav>
      </header>

      <main className="flex-grow p-4">
        <div className="relative h-96 overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              src="/image/header-img.png"
              alt="Background"
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
            <div className="text-white text-center p-4">
              <h2 className="text-2xl font-bold">Хоол захиалга</h2>
              <p className="mt-2">TEXT</p>
            </div>
          </div>
        </div>
        
        <section className="food-categories mt-10">
          <h2 className="text-2xl font-bold">Food Categories</h2>
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {categories.map((category) => (
              <div
                key={category._id} 
                className="category-card bg-white p-4 shadow rounded cursor-pointer"
                onClick={() => handleCategoryClick(category._id)} 
              >
                <h3 className="mt-2 text-lg font-semibold">{category.categoryName}</h3> 
              </div>
            ))}
          </div>
        </section>

        {selectedCategory && (
          <section className="food-items mt-10">
            <h2 className="text-2xl font-bold">Foods in {selectedCategory}</h2>
            {foods.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {foods.map((food, index) => (
                  <div
                    key={index}
                    className="food-card bg-white p-4 shadow rounded"
                  >
                    <h3 className="mt-2 text-lg font-semibold">{food.price}</h3>
                    <p className="text-gray-700">
                      {food.description || "No description available"}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No foods available in this category.</p>
            )}
          </section>
        )}
      </main>

      <footer className="bg-gray-800 text-white text-center py-2">
        <p>&copy; 2025 Food Delivery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserPage;
