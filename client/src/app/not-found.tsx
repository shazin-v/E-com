"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DotLottieReact
        src="https://lottie.host/156d8ce0-1503-4f27-ad74-4ecc1db8d075/urOSGxXE5c.lottie"
        loop
        autoplay
        className="h-100 w-100"
      />
      <Link href="/" className="py-3 px-6 rounded-md mt-4">
        <h2>Go To HomePage</h2>
      </Link>
    </div>
  );
};

export default NotFound;
