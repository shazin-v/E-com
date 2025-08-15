"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import SuccessModal from "./Success";

const Otp = () => {
  const router = useRouter();
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [showSuccess, setShowSuccess] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (index < 3 && inputsRef.current[index + 1]) {
        inputsRef.current[index + 1]?.focus();
      }
    } else {
      e.target.value = ""; // Clear non-numeric input
    }
  };

  const handleClick = () => {
    const otp = inputsRef.current.map((input) => input?.value).join("");
    console.log("Entered OTP:", otp);
    // Add OTP verification logic here
    // router.push("/success");
    setShowSuccess(true);

  };




  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left container with background image */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-full">
        <Image
          src="/images/OTP_IMG.svg"
          alt="OTP Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg lg:rounded-none"
        />
      </div>

      {/* Right container with OTP form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-md">
          <div
            className="flex items-center mb-6 cursor-pointer"
            onClick={() => router.back()}
          >
            <IoIosArrowBack size={25} className="mr-2" />
            <h6 className="text-lg">Back</h6>
          </div>

          <h2 className="text-3xl font-bold mb-6">Enter OTP</h2>
          <p className="text-gray-400 mb-6">
            We have sent a code to your registered email address:{" "}
            <strong>robertfox@example.com</strong>
          </p>

          <div className="flex gap-4 justify-center mb-10">
            {[...Array(4)].map((_, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputsRef.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                onChange={(e) => handleChange(e, idx)}
                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            ))}
          </div>

          <button
            onClick={handleClick}
            className="bg-black text-white p-3 rounded-md w-full"
          >
            Verify
          </button>
          {showSuccess && <SuccessModal />}

        </div>
      </div>
    </div>
  );
};

export default Otp;
