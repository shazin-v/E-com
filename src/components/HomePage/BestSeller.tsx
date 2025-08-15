import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { bestSellerItems } from "@/components/sampleData/SampleData";

const BestSeller = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Our Best Seller
          </h2>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellerItems.map((item, index) => (
            <article
              key={index}
              className="relative group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={index < 4}
                />

                {/* Star Icon */}
                <div className="absolute top-2 right-2 bg-white dark:bg-gray-700 p-1 rounded-full shadow">
                  <CiStar className="text-yellow-500" size={20} />
                </div>

                {/* Labels */}
                <div className="absolute top-2 left-2 space-y-1">
                  {item.labels?.map((label, idx) => (
                    <span
                      key={idx}
                      className={`inline-block text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full ${
                        label === "sale"
                          ? "bg-black text-white"
                          : "bg-white text-black dark:bg-gray-100"
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-end justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-11/12 mb-4 py-2 rounded-lg bg-white text-sm font-medium hover:bg-gray-100 transition">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <footer className="p-4 flex justify-between items-start text-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white truncate max-w-[70%]">
                  <a href="#" title={item.title}>
                    {item.title}
                  </a>
                </h3>
                <p className="text-gray-800 dark:text-gray-300 font-bold whitespace-nowrap">
                  {item.price}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
