"use client";
import React, { useState, Suspense } from "react";
import { ProductType } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "./loading";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

export default function ListProducts({
  productsList,
}: {
  productsList: ProductType[];
}) {
  const [products, setProducts] = useState<ProductType[]>(productsList);

  // fetching data from server
  // const { data, isLoading, isSuccess } = useQuery({
  //   queryKey: ["products"], // Include category in the query key
  //   queryFn: async () => {
  //     const { data } = await axios.get(
  //       "http://localhost/Stocker/backend/get_Products.php"
  //     );

  //     return data as ProductType[];
  //   },
  // });

  // Mutation react query
  const mutationFilter = useMutation({
    mutationFn: async (props: any) => {
      filtredFun(props.label);
    },
  });

  // to filter products  and update array  <react query>
  const filtredFun = (label: string | null) => {
    if (label) {
      const filtred: ProductType[] = productsList?.filter(
        (product: ProductType) => product.category === label
      );
      setProducts(filtred);
    } else {
      setProducts(productsList);
    }
  };

  // sort products
  const sortProducts = async () => {
    const sorted = productsList
      ?.slice()
      .sort((p1: ProductType, p2: ProductType) => p2.quantity - p1.quantity);
    setProducts(sorted);
    console.log(products);
  };

  return (
    <section className="flex md:flex-row gap-4 items-start flex-col  ">
      {/* passing funs filters to compoenents filter */}
      <SideBar mutationFun={mutationFilter} sorted={sortProducts} />
      <div className="grid grid-cols-1 m-auto container md:grid-cols-2 lg:grid-cols-3 gap-4  cursor-pointer w-full ">
        {products.length === 0 ? (
          <Loading />
        ) : (
          products?.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
