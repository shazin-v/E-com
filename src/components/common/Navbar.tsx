"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
// import { setUserDetails } from "@/store/userSlice";
// import SummaryApi from "../api";
import { toast } from "react-toastify";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Profile from "./Profile";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  interface RootState {
    user: {
      user: {
        _id: string;
        // add other user properties here
      };
    };
  }

  const user = useSelector((state: RootState) => state?.user?.user);
  console.log("user:-", user);
  const router = useRouter();

  const handleCartNavigation = () => {
    router.push("/checkout");
  };

  // const handleLogout = async () => {
  //   const fetchData = await fetch(SummaryApi.logout_user.url, {
  //     method: SummaryApi.logout_user.method,
  //     credentials: "include",
  //   });

  //   const data = await fetchData.json();

  //   if (data.success) {
  //     toast.success(data.message);
  //     dispatch(setUserDetails(null));
  //     router.push("/");
  //   }

  //   if (data.error) {
  //     toast.error(data.message);
  //   }
  // };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="text-3xl font-bold cursor-pointer">Krist</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/">Home</Link>
            <div className="flex items-center gap-1 cursor-pointer">
              <Link href="/products">Shop</Link>
              <IoIosArrowDown />
            </div>
            <Link href="/blog">Blog</Link>
            <Link href="/about">Our Story</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* Icons + Auth */}
          <div className="flex items-center gap-5">
            <CiSearch size={24} className="cursor-pointer" />
            <CiHeart size={24} className="cursor-pointer" />
            <IoBagHandleOutline
              size={24}
              className="cursor-pointer"
              onClick={handleCartNavigation}
            />

            {user?._id ? (
              <button
                // onClick={handleLogout}
                className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 text-sm rounded-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 text-sm rounded-lg"
              >
                Login
              </Link>
            )}

            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="text-sm border px-2 py-1 rounded-md"
            >
              {isDark ? "🌞" : "🌙"}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-2xl"
            >
              {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
            <Profile />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <div className="flex items-center gap-1">
            <span>Shop</span>
            <IoIosArrowDown />
          </div>
          <Link href="/our-story" onClick={() => setIsMenuOpen(false)}>
            Our Story
          </Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
