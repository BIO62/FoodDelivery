"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DropdownMenuCheckboxes } from "./dropmenu";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Header = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [, setError] = useState<string | null>(null);
  const [,setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

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
      setError(
        error instanceof Error ? error.message : "Failed to load categories."
      );
    }
  };

  useEffect(() => {
    fetchFoodCategories();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

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
          <div className="flex justify-center items-center gap-8">
            <DropdownMenuCheckboxes />
            <button
              onClick={handleLoginClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[5px] px-4 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </header>
      <main className="bg-[#404040]">
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/image/header-img.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text heseg */}
          <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
            <div className="text-white text-center p-4">
              <h2 className="text-2xl font-bold">Хоол захиалга</h2>
              <p className="mt-2">TEXT</p>
            </div>
          </div>
        </div>
        <div>
        <h2 className="text-2xl w-4/5 mx-auto mt-10  text-white font-bold">Food Categories</h2>
          <Carousel className=" mt-5 w-4/5 mx-auto">
            <CarouselContent className="-ml-1">
              {categories.map((categoryName, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/6 xl:basis-1/9 cursor-pointer"
                  onClick={() => handleCategoryClick(categoryName)}
                >
                  <div className="p-1 w-56 h-17 ">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-2">
                        <div
                          className="flex justify-center  cursor-pointer"
                          onClick={() => handleCategoryClick(categoryName)}
                        >
                          <h3 className="text-lg font-semibold">
                            {categoryName}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext className="border-none" />
          </Carousel>
        </div>
      </main>
    </div>
  );
};

export default Header;
