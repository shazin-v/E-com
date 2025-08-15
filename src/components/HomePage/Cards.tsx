import React from "react";
import Image from "next/image";
import { Categories } from "@/components/sampleData/SampleData";

const Cards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
      {Categories.map((item, index) => (
        <article
          key={index}
          className="group relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
        >
          <div className="relative w-full h-48 sm:h-56 md:h-64">
            <Image
              src={item.img}
              alt={item.type}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority={index < 5}
            />
          </div>
          <footer className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 bg-opacity-90 px-3 py-2 m-2 rounded-md text-center shadow-md">
            <h2 className="text-sm font-medium text-gray-800 dark:text-white truncate">
              {item.type}
            </h2>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default Cards;
