import React from "react";
import { socialpost, features } from "../sampleData/SampleData";
import Image from "next/image";
import Better from "./Better";

const SocialMediaPost = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Our Instagram Stories
        </h2>

        {/* Instagram Posts in One Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialpost.map((post, index) => (
            <article
              key={index}
              className="relative group w-56 h-56 sm:w-60 sm:h-60 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <Image
                src={post.img}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram post"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <post.icon size={36} className="text-white drop-shadow-md" />
              </a>
            </article>
          ))}
        </div>
        <Better />
      </div>
    </section>
  );
};

export default SocialMediaPost;
