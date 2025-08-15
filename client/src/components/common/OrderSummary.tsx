import React from "react";
import { sampleProducts } from "../sampleData/SampleData";

const OrderSummary = () => {
  return (
    <>
      <div id="summary" className="w-1/3 px-8 py-10 bg-gray-100">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">
            Items {sampleProducts.length}
          </span>
          <span className="font-semibold text-sm">
            $
            {sampleProducts
              .reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )
              .toFixed(2)}
          </span>
        </div>
        <div className="py-10">
          <label className="font-semibold inline-block mb-3 text-sm uppercase">
            Promo Code
          </label>
          <div className="flex">
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
            <button className="bg-black hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <label className="font-medium inline-block text-sm uppercase">
            Delivery Charge
          </label>
          <span>$10.00</span>
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Grand Total</span>
            <span>
              $
              {(
                sampleProducts.reduce(
                  (acc, product) => acc + product.price * product.quantity,
                  0
                ) + 10
              ).toFixed(2)}
            </span>
          </div>
          {/* TODO: Add  functionality that if not user not logged in , redirect to login with a pop up */}
          {/* TODO: Add a logic that this button should ony work when checkout and not in the other pages */}
          <button className="bg-black font-semibold hover:bg-gray-700 py-3 text-sm text-white uppercase w-full">
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
