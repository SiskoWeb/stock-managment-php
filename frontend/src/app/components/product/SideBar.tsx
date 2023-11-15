"use client";
import { CategoryType } from "@/types";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/app/lib/fetch";

export default function SideBar({
  mutationFun,
  sorted,
}: {
  mutationFun: any;
  sorted: () => void;
}) {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["products"], // Include category in the query key
    queryFn: async () => getCategories(),
  });
  if (isLoading) return <p>Loading</p>;
  return (
    <div className="flex items-center justify-center p-4">
      <div
        id="dropdown"
        className="z-10  w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          Categoreis
        </h6>
        <ul className="space-y-2 text-sm flex flex-col">
          <button onClick={() => mutationFun.mutate({ label: null })}>
            All
          </button>
          {data?.map((item: CategoryType, index: number) => (
            <button
              key={index}
              onClick={() => mutationFun.mutate({ label: item.category })}
            >
              {item.category}
            </button>
          ))}
        </ul>
        <button onClick={() => sorted()}>sorted</button>
      </div>
    </div>
  );
}
