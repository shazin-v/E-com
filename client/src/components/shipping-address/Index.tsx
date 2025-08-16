import React from "react";
import CheckoutLayout from "../checkout/CheckoutLayout";
import SubTotal from "../checkout/SubTotal";

type Props = {};

export default function Index({}: Props) {
  return (
    <div>
      <CheckoutLayout
        heading="Shopping Cart"
        leftChildren={
          <>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Shipping Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <input type="checkbox" name="" id="" />
                <button type="submit" className="bg-blue-600 text-white">
                  Submt
                </button>
              </div>
            </div>
          </>
        }
        rightChildren={<SubTotal />}
      />
    </div>
  );
}
