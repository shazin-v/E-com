import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <section
      aria-label="Featured Women's Collection"
      className="relative bg-gray-100 dark:bg-gray-900 py-20 overflow-hidden"
    >
      {/* Background text */}
      {/*         <div className="hidden lg:block w-full max-w-sm md:max-w-md lg:max-w-lg">
 */}
      <h2 className="hidden absolute lg:block right-10 lg:right-32 top-1/2 -translate-y-1/2 text-[8vw] font-extrabold text-black dark:text-white opacity-10 pointer-events-none whitespace-nowrap z-0">
        BEST SELLER
      </h2>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Text Content */}
        <article className="max-w-lg text-center lg:text-left space-y-6">
          <header>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 tracking-wide">
              Classic Exclusive
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
              Women&apos;s Collection
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              UP TO <span className="font-semibold">40% OFF</span>
            </p>
          </header>

          <footer>
            <button className="mt-4 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition duration-300">
              Shop Now
            </button>
          </footer>
        </article>

        {/* Right Image (Hidden on small screens) */}
        <div className="hidden lg:block w-full max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src="/images/raamin-ka-Xki9hTNvJGo-unsplash-removebg-preview.png"
            alt="Women's Collection"
            width={500}
            height={600}
            priority
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) 400px, 500px"
            className="object-contain w-full h-auto mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
