import React from "react";
import ShopByCategory from "./ShopByCategory";
import Deals from "./Deals";
import Testimonial from "./Testimonial";
import SocialMediaPost from "./SocialMediaPost";
import Featured from "./Featured";


const HomePage = () => {
  return (
    <>
      <Featured />
      <ShopByCategory />
      <Deals />
      <Testimonial />
      <SocialMediaPost />
    </>
  );
};

export default HomePage;
