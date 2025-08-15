import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";


export const Featured: React.FC<{ imageSrc?: string; title?: string; subtitle?: string }> = ({ imageSrc = "/images/hero.jpg", title = "New Season Arrivals", subtitle = "Streetwear, outerwear & accessories" }) => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
          <div className="flex gap-3">
            <Button>Shop Men</Button>
            <Button variant="outline">Shop Women</Button>
          </div>
        </div>

        <div className="w-full rounded-lg overflow-hidden shadow-sm h-80 md:h-96">
          <Image src="/images/raamin-ka-Xki9hTNvJGo-unsplash-removebg-preview.png" alt="Hero" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};
