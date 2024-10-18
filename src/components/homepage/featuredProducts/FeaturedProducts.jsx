"use client";
import React, { useEffect, useState } from "react";
import RootWrapper from "@/components/common/rootWrapper/RootWrapper";
import { fetchProducts } from "@/api/api";
import Button from "@/components/common/button/Button";
import rightArrowOutline from "./assets/rightArrowOutline.svg";
import ProductCard from "@/components/common/card/ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: to show a loader while fetching

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <RootWrapper className={"py-[40px] lg:py-[60px]"}>
      <div className="flex justify-between md:pb-[28px]">
        <div>
          <p className="bodyText3 medium">
            Hard to choose right products for your pets?
          </p>
          <p className="bodyText1 bold text-[#003459]">Our Products</p>
        </div>
        <Button
          name="View more"
          link="#"
          outline
          medium
          className={"hidden md:flex"}
          icon={rightArrowOutline}
        />
      </div>
      <div className="flex gap-[12px] md:gap-[20px] flex-wrap justify-center mb-[16px]">
        {loading ? (
          <p>Loading...</p>
        ) : (
            products.map((product) => (
          <ProductCard
            name={product.name}
            price={product.price}
            image={product.image}
            key={product.id}
            desc={product.description}
            product={product.product}
            size={product.size}

          />
          ))
        )}
      </div>
      <Button
        name="View more"
        link="#"
        outline
        className={"justify-center md:hidden"}
        icon={rightArrowOutline}
      />
    </RootWrapper>
  );
};

export default FeaturedProducts;
