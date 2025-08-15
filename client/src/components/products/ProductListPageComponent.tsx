"use client";
import React, { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { sampleProductsProduct } from "../sampleData/SampleData";
import { useRouter } from "next/navigation";

// Toast hook replacement
const useToast = () => {
  const toast = ({ title, description }) => {
    console.log(`${title}: ${description}`);
    // You can replace this with your actual toast implementation
  };
  return { toast };
};

// Badge component
const Badge = ({ children, className }) => (
  <span
    className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${className}`}
  >
    {children}
  </span>
);

// Button component
const Button = ({ children, className, size, variant, onClick, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const sizeClasses = {
    icon: "h-10 w-10",
    sm: "h-9 px-3 text-sm",
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8",
  };
  const variantClasses = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${
        variantClasses[variant] || variantClasses.default
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Utility function (cn replacement)
const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function ProductListPageComponent({ className = "" }) {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleAddToCart = (product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleToggleFavorite = (product) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(product.id)) {
      newFavorites.delete(product.id);
      toast({
        title: "Removed from favorites",
        description: `${product.name} has been removed from your favorites.`,
      });
    } else {
      newFavorites.add(product.id);
      toast({
        title: "Added to favorites",
        description: `${product.name} has been added to your favorites.`,
      });
    }
    setFavorites(newFavorites);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        )}
      />
    ));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const getDiscountPercentage = (originalPrice, currentPrice) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  const router = useRouter();

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-gray-600">
          Discover our amazing collection of products
        </p>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
          className
        )}
      >
        {sampleProductsProduct.map((product) => {
          const isHovered = hoveredProduct === product.id;
          const isFavorite = favorites.has(product.id);
          const discountPercentage = getDiscountPercentage(
            product.originalPrice,
            product.price
          );

          return (
            <div
              key={product.id}
              className={cn(
                "group relative bg-white rounded-lg shadow-md hover:shadow-lg",
                "transition-all duration-300 ease-in-out transform hover:-translate-y-1",
                "border border-gray-200 overflow-hidden"
              )}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => router.push(`/products/${product.id}`)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-blue-600 text-white">New</Badge>
                  )}
                  {product.isSale && discountPercentage > 0 && (
                    <Badge className="bg-red-600 text-white">
                      -{discountPercentage}%
                    </Badge>
                  )}
                </div>

                {/* Favorite Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className={cn(
                    "absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm",
                    "transition-all duration-200",
                    isHovered ? "opacity-100" : "opacity-0",
                    isFavorite && "text-red-500"
                  )}
                  onClick={() => handleToggleFavorite(product)}
                >
                  <Heart
                    className={cn("w-4 h-4", isFavorite && "fill-current")}
                  />
                </Button>

                {/* Quick Add to Cart */}
                <div
                  className={cn(
                    "absolute bottom-3 left-3 right-3 transition-all duration-300",
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  )}
                >
                  <Button
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                {/* Category */}
                {product.category && (
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                    {product.category}
                  </div>
                )}

                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 leading-tight line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
