"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left container with background image */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-full">
        <Image
          src="/images/forgot_IMG.svg"
          alt="Forgot Password Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg lg:rounded-none"
        />
      </div>

      {/* Right container with the form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-md">
          <div
            className="flex items-center mb-6 cursor-pointer"
            onClick={() => router.back()}
          >
            <IoIosArrowBack size={25} className="mr-2" />
            <h6 className="text-lg">Back</h6>
          </div>

          <h2 className="text-3xl font-bold mb-6">Forgot Password</h2>
          <p className="text-gray-400 mb-6">
            Enter your registered email address. We’ll send you a code to reset
            your password.
          </p>

          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-md w-full mb-4"
          />

          <button
            onClick={() => router.push("/otp")}
            className="bg-black text-white p-3 rounded-md w-full"
          >
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
