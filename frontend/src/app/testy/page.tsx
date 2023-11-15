"use client";
import React, { useState, Suspense } from "react";

import { getProduct } from "@/app/lib/fetch";
import { ProductType } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

import axios from "axios";
import ProductCard from "../components/product/ProductCard";

export default function ListProducts() {
  const [products, setProducts] = useState<ProductType[] | undefined>([]);

  const { data, isLoading, isSuccess, isFetched } = useQuery({
    queryKey: ["products"], // Include category in the query key
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost/Stocker/backend/get_Products.php"
      );

      return data as ProductType[];
    },
  });

  const mutationFilter = useMutation({
    mutationFn: async (props: any) => {
      const newP: ProductType[] | undefined = data?.filter(
        (product: ProductType) => product.category === props.label
      );
      setProducts(newP);
    },
  });
  return (
    <section className="flex flex-row gap-4 items-start ">
      <div className="flex gap-1 flex-wrap">{JSON.stringify(data)}</div>
    </section>
  );
}
