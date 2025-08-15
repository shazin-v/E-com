import React from "react";
import { Star } from "lucide-react";

export default function ProductInfo({ name, subtitle, price, oldPrice, rating, reviews, inStock }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-muted-foreground">{subtitle}</p>

      <div className="flex items-center gap-1 mt-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`} />
        ))}
        <span className="text-sm text-gray-500">({reviews} Reviews)</span>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-xl font-bold">${price}</span>
        {oldPrice && <span className="line-through text-gray-400">${oldPrice}</span>}
      </div>

      {inStock && <span className="text-green-500 text-sm font-medium">In Stock</span>}
    </div>
  );
}
