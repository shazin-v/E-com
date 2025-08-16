"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const SubTotal = (props: Props) => {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8">
      <h3 className="font-semibold text-2xl mb-6">Order Summary</h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-semibold">$360.00</span>
        </div>
        <div className="flex justify-between border-b pb-4">
          <span className="text-gray-500">Delivery</span>
          <span className="font-semibold">$45.00</span>
        </div>
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span className="text-indigo-600">$405.00</span>
        </div>
        <div className="space-y-3 mt-6">
          <button
            onClick={() => router.push("/shipping-address")}
            className="w-full py-3 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"
          >
            Add Coupon Code
          </button>
          <button
            onClick={() => router.push("/payment")}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubTotal;

// TODO: Style

//  <div className="border rounded-lg p-6 bg-white shadow-sm">
//           <div className="flex justify-between mb-4">
//             <span className="font-medium">Subtotal</span>
//             <span className="font-medium">$200.00</span>
//           </div>

//           <div className="mb-4">
//             <Label htmlFor="promo">Enter Discount Code</Label>
//             <div className="flex mt-2">
//               <Input id="promo" placeholder="FLAT50" className="flex-1" />
//               <Button className="ml-2 bg-black hover:bg-gray-800">Apply</Button>
//             </div>
//           </div>

//           <div className="flex justify-between mb-2">
//             <span className="font-medium">Delivery Charge</span>
//             <span className="font-medium">$5.00</span>
//           </div>

//           <div className="flex justify-between border-t pt-4 mt-4">
//             <span className="font-semibold">Grand Total</span>
//             <span className="font-semibold">$205.00</span>
//           </div>
//         </div>
