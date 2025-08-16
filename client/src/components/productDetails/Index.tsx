"use client";
import React from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescriptionTab";
import ProductAdditionalInfo from "./ProductAdditionalInfoTab";
import ProductReviews from "./ProductReviewsTab";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import { TabSection } from "./TabSection";
import ProductListPageComponent from "../products/ProductListPageComponent";

export default function Index() {
  const sampleImages = [
    "https://picsum.photos/id/1018/400/400",
    "https://picsum.photos/id/1015/400/400",
    "https://picsum.photos/id/1016/400/400",
    "https://picsum.photos/id/1020/400/400",
  ];

  const sampleProductInfo = {
    title: "Premium Leather Sneakers",
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.5,
    reviewCount: 87,
  };

  const sampleDescription = `
    These premium leather sneakers combine comfort and style.
    Perfect for casual wear or special occasions. Hand-crafted
    with high-quality materials for long-lasting durability.
  `;

  const sampleAdditionalInfo = [
    { label: "Brand", value: "UrbanWalk" },
    { label: "Material", value: "Genuine Leather" },
    { label: "Weight", value: "1.2kg" },
    { label: "Warranty", value: "1 Year" },
  ];

  const sampleReviews = [
    { name: "John D.", rating: 5, comment: "Super comfortable and stylish!" },
    {
      name: "Emily R.",
      rating: 4,
      comment: "Love the design, fits perfectly.",
    },
  ];

  const sampleSizes = ["6", "7", "8", "9", "10", "11"];
  const sampleColors = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#ffffff" },
    { name: "Brown", value: "#8B4513" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Product main section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Gallery */}
        <ProductGallery images={sampleImages} />

        {/* Right: Info + Actions */}
        <div className="flex flex-col gap-4">
          <ProductInfo {...sampleProductInfo} />

          <SizeSelector sizes={sampleSizes} />
          <ColorSelector colors={sampleColors} />
          <div className="flex gap-2">
            <QuantitySelector />
            <AddToCartButton />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <TabSection labels={["Description", "Additional Info", "Reviews"]}>
        <ProductDescription description={sampleDescription} />
        <ProductAdditionalInfo info={sampleAdditionalInfo} />
        <ProductReviews reviews={sampleReviews} />
      </TabSection>

      {/* Related Products */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Related Products</h2>
        <ProductListPageComponent />
      </div>
    </div>
  );
}
