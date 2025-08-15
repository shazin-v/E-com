import ProductSidebar from "@/components/common/Products/Sidebar";
import Better from "@/components/HomePage/Better";
import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProductSidebar>{children}</ProductSidebar>
      <Better />
    </>
  );
};

export default ProductLayout;
