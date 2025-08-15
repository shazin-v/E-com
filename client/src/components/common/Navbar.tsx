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
import { shopNavigation } from "../sampleData/SampleData";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("women");
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
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="text-3xl font-bold cursor-pointer">Krist</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/">Home</Link>

              {/* Shop Dropdown */}
              <div
                className="bg-white"
                // TODO: make it click not hover
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer py-2">
                  <Link href="/products">Shop</Link>
                  <IoIosArrowDown
                    className={`transition-transform duration-200 ${
                      isShopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Mega Menu Dropdown */}
                {isShopDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-xl border-t z-50">
                    <div className="mx-auto max-w-7xl px-8 pt-7">
                      {/* Category Tabs */}
                      <div className="flex space-x-8 mb-8 pt-8 border-b border-gray-200 dark:border-gray-600">
                        {shopNavigation.categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                              activeCategory === category.id
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>

                      {/* Category Content */}
                      {shopNavigation.categories
                        .filter((category) => category.id === activeCategory)
                        .map((category) => (
                          <div
                            key={category.id}
                            className="grid grid-cols-4 gap-8"
                          >
                            {/* Sections */}
                            <div className="col-span-2 grid grid-cols-3 gap-8">
                              {category.sections.map((section) => (
                                <div key={section.name}>
                                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                                    {section.name}
                                  </h3>
                                  <ul className="space-y-3">
                                    {section.items.map((item) => (
                                      <li key={item.name}>
                                        <a
                                          href={item.href}
                                          className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* Featured Items */}
                            <div className="col-span-2 grid grid-cols-2 gap-6">
                              {category.featured.map((item) => (
                                <div key={item.name} className="group relative">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="w-full h-48 object-cover rounded-lg bg-gray-100 group-hover:opacity-75 transition-opacity duration-200"
                                  />
                                  <div className="mt-4">
                                    <h4 className="font-medium text-gray-900 dark:text-white">
                                      <a href={item.href}>
                                        <span className="absolute inset-0" />
                                        {item.name}
                                      </a>
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
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
            {/* Mobile Shop Menu */}
            <div>
              <button
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                className="flex items-center gap-1 w-full py-2 text-left"
              >
                <span>Shop</span>
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${
                    isShopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isShopDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {shopNavigation.categories.map((category) => (
                    <div key={category.id} className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {category.name}
                      </h4>
                      {category.sections.map((section) => (
                        <div key={section.id} className="pl-2">
                          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {section.name}
                          </h5>
                          <div className="space-y-1 pl-2">
                            {section.items.slice(0, 3).map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link href="/our-story" onClick={() => setIsMenuOpen(false)}>
              Our Story
            </Link>
            <Link
              href="/blog"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
      {/* Backdrop for dropdown */}
      {isShopDropdownOpen && (
        <div
          className="fixed inset-0 bg-white/90 z-40 top-20"
          onClick={() => setIsShopDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
