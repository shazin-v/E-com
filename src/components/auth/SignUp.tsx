"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import SummaryApi from "@/components/api/index";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";
// import { useGeneralContext } from "@/context";

const SignUp = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   const router = useRouter();
  //   const { fetchUserDetails } = useGeneralContext();

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const response = await fetch(SummaryApi.signUp.url, {
  //       method: SummaryApi.signUp.method,
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ fname: fName, lname: lName, email, password }),
  //     });

  //     const data = await response.json();
  //     toast.success(data.message);
  //     if (data.success) {
  //       Cookies.set("authToken", data.data, { expires: 1, secure: true });
  //       toast.success(data.message);
  //       router.push("/");
  //       fetchUserDetails();
  //     } else {
  //       toast.error(data.message);
  //     }
  //   };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left container with background image */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-full">
        <Image
          src="/images/Signup_IMG.svg"
          alt="Signup Image"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-t-lg lg:rounded-none"
        />
      </div>

      {/* Right container with signup form */}
      <div className="w-full lg:w-1/2 bg-white flex justify-center items-center p-6">
        <form className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">Create New Account 👋</h2>
          <p className="text-gray-400 mb-10">Please enter your details</p>

          <input
            type="text"
            placeholder="First Name"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md w-full mb-3"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md w-full mb-3"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md w-full mb-3"
          />
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agree"
              required
              className="accent-black"
            />
            <label htmlFor="agree" className="ml-2">
              I agree to <b>Terms & Conditions</b>
            </label>
          </div>

          <div className="text-center mb-6">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500">
                Sign In
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="bg-black text-white p-3 rounded-md w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
