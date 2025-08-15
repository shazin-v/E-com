import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { testmonial } from "../sampleData/SampleData";
import Image from "next/image";

const Testimonial: React.FC = () => {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
          <h2
            id="testimonial-heading"
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            What Our Customers Say
          </h2>

          <div className="flex gap-2">
            <button
              aria-label="Previous testimonial"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              <IoIosArrowRoundBack
                size={24}
                className="text-gray-800 dark:text-white"
              />
            </button>
            <button
              aria-label="Next testimonial"
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <IoIosArrowRoundForward size={24} />
            </button>
          </div>
        </header>

        {/* Testimonials */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testmonial.map(({ review, img, name, designation }) => (
            <article
              key={name}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-5 flex-grow">
                {review}
              </p>
              <footer className="flex items-center mt-auto">
                <Image
                  src={img}
                  alt={`Photo of ${name}`}
                  width={48}
                  height={48}
                  sizes="48px"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    {name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {designation}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
