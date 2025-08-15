import React from "react";
import { features } from "../sampleData/SampleData";

export default function Better() {
  return (
    <>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Features Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <item.icon
                  size={36}
                  className="text-gray-900 dark:text-white mb-3"
                />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
