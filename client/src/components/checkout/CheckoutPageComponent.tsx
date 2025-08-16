"use client";
import React, { useState } from "react";
import CheckoutLayout from "./CheckoutLayout";
import { useRouter } from "next/navigation";
import SubTotal from "./SubTotal";

export default function CheckoutPageComponent() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Latest N-5 Perfuam",
      category: "Perfumes",
      price: 120.0,
      deliveryCharge: 15.0,
      quantity: 1,
      image: "https://pagedone.io/asset/uploads/1701162850.png",
    },
    {
      id: 2,
      name: "Musk Rose Cooper",
      category: "Perfumes",
      price: 120.0,
      deliveryCharge: 15.0,
      quantity: 1,
      image: "https://pagedone.io/asset/uploads/1701162866.png",
    },
    {
      id: 3,
      name: "Dusk Dark Hue",
      category: "Perfumes",
      price: 120.0,
      deliveryCharge: 15.0,
      quantity: 1,
      image: "https://pagedone.io/asset/uploads/1701162880.png",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalDelivery = cartItems.reduce(
    (sum, item) => sum + item.deliveryCharge,
    0
  );
  const total = subtotal + totalDelivery;

  const router = useRouter();

  return (
    <>
      <CheckoutLayout
        heading="Shopping Cart"
        leftChildren={
          <div className="space-y-4">
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="font-normal text-xl leading-8 text-gray-500">
                Product
              </div>
              <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                <span className="w-full max-w-[200px] text-center">
                  Delivery Charge
                </span>
                <span className="w-full max-w-[260px] text-center">
                  Quantity
                </span>
                <span className="w-full max-w-[200px] text-center">Total</span>
              </p>
            </div>

            {/* Sample Product Items */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg p-6 shadow-sm border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg">Product {item}</h3>
                      <p className="text-gray-500">Category</p>
                      <p className="text-indigo-600 font-medium">$120.00</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$15.00</span>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 border rounded-full flex items-center justify-center">
                        -
                      </button>
                      <span className="px-4">1</span>
                      <button className="w-8 h-8 border rounded-full flex items-center justify-center">
                        +
                      </button>
                    </div>
                    <span className="font-bold text-lg text-indigo-600">
                      $120.00
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
        rightChildren={<SubTotal />}
      />
    </>
  );
}
