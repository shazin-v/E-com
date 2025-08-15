"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SuccessModal = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-brightness-75 backdrop-blur-md">
      <div className="bg-white rounded-xl p-8 w-[90%] max-w-md text-center shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <DotLottieReact
                src="https://lottie.host/3c04bafa-0c05-496e-b7b5-4a381e9db083/ZANEkubLV2.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">
          Password Changed Successfully
        </h2>
        <p className="text-gray-600 mb-6">
          Your password has been updated successfully
        </p>
        <button
          onClick={() => router.push("/login")}
          className="bg-black text-white py-3 px-6 rounded-md w-full"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
