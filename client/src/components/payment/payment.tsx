"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { CreditCard, DollarSign } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import SubTotal from "../checkout/SubTotal";
import { useRouter } from "next/navigation";

interface PaymentFormData {
  paymentMethod: "card" | "google" | "paypal" | "cod";
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

const Payment = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useForm<PaymentFormData>({
    defaultValues: {
      paymentMethod: "card",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const [showCardForm, setShowCardForm] = useState(true);

  const handleMethodChange = (method: string) => {
    setShowCardForm(method === "card");
  };
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      {/* Stepper */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex-1 text-center border-b-2 border-gray-300 pb-2">
          <span className="font-medium">Address</span>
        </div>
        <div className="flex-1 text-center border-b-2 border-black pb-2">
          <span className="font-semibold">Payment Method</span>
        </div>
        <div className="flex-1 text-center border-b-2 border-gray-300 pb-2">
          <span className="font-medium">Review</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* LEFT SIDE: Payment form */}
        <div className="col-span-2 space-y-6">
          <h3 className="text-xl font-semibold mb-4">
            Select a payment method
          </h3>

          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value);
                  handleMethodChange(value);
                }}
              >
                <div className="flex items-center space-x-3 py-3">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">Debit/Credit Card</span>
                </div>

                <div className="flex items-center space-x-3 py-3">
                  <RadioGroupItem value="google" id="google" />
                  <Label
                    htmlFor="google"
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>
                    <span className="font-medium">Google Pay</span>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 py-3">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label
                    htmlFor="paypal"
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                    <span className="font-medium">Paypal</span>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 py-3">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label
                    htmlFor="cod"
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <DollarSign className="h-5 w-5 text-gray-600" />
                    <span className="font-medium">Cash on Delivery</span>
                  </Label>
                </div>
              </RadioGroup>
            )}
          />

          {showCardForm && (
            <div className="mt-6 p-4 border rounded-lg bg-gray-50 space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  {...register("cardNumber", {
                    required: "Card number is required",
                    pattern: {
                      value: /^[0-9\s]{13,19}$/,
                      message: "Invalid card number",
                    },
                  })}
                  placeholder="3897 22XX 1900 3890"
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cardNumber.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="cardName">Card Name</Label>
                <Input
                  id="cardName"
                  {...register("cardName", {
                    required: "Cardholder name is required",
                  })}
                  placeholder="Robert Fox"
                />
                {errors.cardName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cardName.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    {...register("expiryDate", {
                      required: "Expiry date is required",
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                        message: "Format: MM/YY",
                      },
                    })}
                    placeholder="09/26"
                  />
                  {errors.expiryDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.expiryDate.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    {...register("cvv", {
                      required: "CVV is required",
                      pattern: {
                        value: /^[0-9]{3,4}$/,
                        message: "Invalid CVV",
                      },
                    })}
                    placeholder="***"
                    type="password"
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.cvv.message}
                    </p>
                  )}
                </div>
              </div>

              <Button className="w-full bg-black hover:bg-gray-800">
                Add Card
              </Button>
            </div>
          )}

          {/* Continue Button */}
          <Button
            onClick={() => router.push("/order-summary")}
            className="w-full bg-black hover:bg-gray-800"
          >
            Continue
          </Button>
        </div>

        {/* RIGHT SIDE: Order Summary */}
        <SubTotal />
      </div>
    </div>
  );
};

export default Payment;
