"use client";

import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

const Deals: React.FC = () => {
  const router = useRouter();

  const countdowns = ["120 Days", "10 Hours", "30 Min", "45 Sec"];

  const handleViewProducts = useCallback(() => {
    router.push("/product");
  }, [router]);

  return (
    <section
      className="bg-white dark:bg-gray-900 py-16"
      aria-labelledby="deals-title"
    >
      <div className="max-w-7xl mx-auto px-5 grid gap-12 lg:grid-cols-2 items-center">
        {/* Text Section */}
        <article className="space-y-6">
          <header>
            <h2
              id="deals-title"
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Deals of the Month
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
          </header>

          {/* Countdown */}
          <div className="flex flex-wrap gap-4" role="timer" aria-live="polite">
            {countdowns.map((time, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm h-16 w-20 flex items-center justify-center rounded-lg text-center text-sm font-semibold"
              >
                {time}
              </div>
            ))}
          </div>

          {/* Button */}
          <div>
            <button
              onClick={handleViewProducts}
              className="bg-black text-white flex items-center px-6 py-3 rounded-md text-base font-medium gap-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
            >
              View all products
              <IoIosArrowRoundForward size={22} />
            </button>
          </div>
        </article>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
            <Image
              src="/images/Login_IMG.svg"
              alt="Special deals promotion"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
