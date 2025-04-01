import React from "react";
import ShoeProduct from "../ShoeProduct";

export const FeaturedProducts = () => {
  const data = {
    id: 1,
    image: "./src/assets/images/shoe-blue.png",
    rating: "./src/assets/icons/star-gold.png",
    title: "Blue Swade Nike Sneakers",
    price: 599
  };
  return (
    <div className="py-11 w-full">
      <h2 className="py-7 text-center font-bold">FEATURED PRODUCTS</h2>
      <div className="flex w-full justify-around max-lg:flex-wrap max-lg:gap-9">
      <ShoeProduct {...data} />
      <ShoeProduct {...data} />
      <ShoeProduct {...data} />
      </div>
    </div>
  );
};
