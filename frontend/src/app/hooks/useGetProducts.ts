import React, { useEffect, useState } from "react";
import { getProduct } from "../lib/fetch";
import { ProductType } from "@/types";

const useProductList = (category: string | null = null): ProductType[] => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(category);
        setProducts(data);
      } catch (error) {
        // Handle errors as needed
      }
    };

    fetchData();
  }, [category]); // Update the effect dependency to rerun when the category changes

  return products;
};

export default useProductList;
