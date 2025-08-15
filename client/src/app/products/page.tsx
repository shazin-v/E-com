import React from "react";
import ProductListPageComponent from "../../components/products/ProductListPageComponent";
import ProductSidebar from "@/components/common/Products/Sidebar";

export default function page() {
  return (
    <div>
      <ProductSidebar>
        <ProductListPageComponent />
      </ProductSidebar>
    </div>
  );
}
