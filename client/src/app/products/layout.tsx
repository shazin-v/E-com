import ProductSidebar from "@/components/common/Products/Sidebar";
import Better from "@/components/HomePage/Better";
import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      <Better />
    </section>
  );
};

export default ProductLayout;
