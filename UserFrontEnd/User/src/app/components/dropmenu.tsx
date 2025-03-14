"use client"

import * as React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuCheckboxes() {

  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Address submitted:', address);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border border-black">
        <Button variant="outline" className="text-black">Delivery Address</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <DropdownMenuLabel>Delivery Address</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className=" rounded-lg">
          <h2 className="text-xl font-bold mb-4">Enter Your Address</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1" htmlFor="street">
                Street Address
              </label>
              <input
                type="text"
                id="street"
                name="street"
                placeholder="123 Main St"
                value={address.street}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="state">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="postalCode">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
                value={address.postalCode}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Address
            </button>
          </form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
