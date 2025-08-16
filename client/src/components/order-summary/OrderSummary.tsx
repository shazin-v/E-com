"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import SubTotal from "../checkout/SubTotal";
import SuccessModal from "../auth/Success";

const OrderSummary = () => {
  const [successOrder, setSuccessOrder] = useState(false);

  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      {/* Stepper */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex-1 text-center border-b-2 border-gray-300 pb-2">
          <span className="font-medium">Address</span>
        </div>
        <div className="flex-1 text-center border-b-2 border-gray-300 pb-2">
          <span className="font-medium">Payment Method</span>
        </div>
        <div className="flex-1 text-center border-b-2 border-black pb-2">
          <span className="font-semibold">Review</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="col-span-2 space-y-8">
          {/* Estimated Delivery */}
          <h3 className="text-lg font-semibold">
            Estimated delivery: <span className="font-bold">22 Feb 2022</span>
          </h3>

          {/* Products List */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/dress.png"
                  alt="Girls Pink Dress"
                  className="w-16 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium">
                    Girls Pink Moana Printed Dress
                  </h4>
                  <p className="text-gray-500 text-sm">Size: S</p>
                </div>
              </div>
              <span className="font-medium">$80.00</span>
            </div>

            {/* Item 2 */}
            <div className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/handbag.png"
                  alt="Handbag"
                  className="w-16 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium">Women Textured Handheld Bag</h4>
                  <p className="text-gray-500 text-sm">Size: Regular</p>
                </div>
              </div>
              <span className="font-medium">$80.00</span>
            </div>

            {/* Item 3 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/shirt.png"
                  alt="Shirt"
                  className="w-16 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium">Tailored Cotton Casual Shirt</h4>
                  <p className="text-gray-500 text-sm">Size: M</p>
                </div>
              </div>
              <span className="font-medium">$40.00</span>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h4 className="font-semibold mb-2">Shipping Address</h4>
            <p className="font-medium">Robert Fox</p>
            <p className="text-gray-600">
              4517 Washington Ave, Manchester, Kentucky 39495
            </p>
          </div>

          {/* Payment Method */}
          <div>
            <h4 className="font-semibold mb-2">Payment Method</h4>
            <p className="text-gray-700">Debit Card (.... .... .... 89)</p>
          </div>
        </div>

        {/* RIGHT SIDE: Order Summary Box */}
        <div>
          <SubTotal />
          <Button
            className="w-full mt-4 bg-black hover:bg-gray-800"
            onClick={() => setSuccessOrder(true)}
          >
            Place Order
          </Button>
        </div>
      </div>
      {successOrder && <SuccessModal />}
    </div>
  );
};

export default OrderSummary;
