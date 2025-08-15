/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const Login = (props: Props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left container with background image */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-full">
        <Image
          src="/images/Login_IMG.svg"
          alt="Login background"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-t-lg lg:rounded-none"
        />
      </div>

      {/* Right container with login form */}
      <div className="w-full lg:w-1/2 bg-white flex justify-center items-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">Welcome 👋</h2>
          <p className="text-gray-400 mb-10">Please login here</p>
          <form className="flex flex-col gap-4">
            <div>
              <label>Email address</label>
              <input
                type="email"
                name="email"
                //   value={credentials.email}
                //   onChange={(e) =>
                // setCredentials({ ...credentials, email: e.target.value })
                //   }
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <label>Password</label>
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                placeholder="Password"
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
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" id="remember" className="accent-black" />
                <span className="ml-2">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-blue-500">
                Forgot password?
              </Link>
            </div>
            <div className="mt-4">
              <p>
                Don&apos;t have an account?
                <Link href="/signup" className="text-blue-500 ml-1">
                  Sign Up
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-black text-white p-3 cursor-pointer rounded-md mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
