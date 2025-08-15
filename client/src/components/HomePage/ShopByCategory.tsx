"use client";
import React, { useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Cards from "./Cards";
import BestSeller from "./BestSeller";

const ShopByCategory = () => {
  const scrollRef = useRef(null);

  const scroll = (direction:any) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    (scrollRef.current as HTMLElement).scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Shop By Categories
          </h2>
          <div className="flex gap-2">
            <button
              aria-label="Scroll Left"
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
              <IoIosArrowRoundBack size={25} />
            </button>
            <button
              aria-label="Scroll Right"
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-black text-white hover:opacity-80 dark:bg-white dark:text-black transition"
            >
              <IoIosArrowRoundForward size={25} />
            </button>
          </div>
        </header>

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide -mx-4 px-4"
        >
          <div className="flex gap-6">
            <Cards />
          </div>
        </div>

        {/* Best Seller */}
        <div className="mt-20">
          <BestSeller />
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
