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
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["products"], // Include category in the query key
    queryFn: async () => getCategories(),
  });

  return (
    <div className="flex items-center justify-center p-4">
      <div className="z-10  w-56 p-3 bg-white  rounded-lg shadow text-center ">
        <h6 className="mb-3 text-sm font-medium text-white  bg-blue-500 rounded-md">
          Categoreis
        </h6>
        <ul className="space-y-2 text-sm flex flex-col underline">
          <button onClick={() => mutationFun.mutate({ label: null })}>
            All
          </button>
          {!isLoading ? (
            data?.map((item: CategoryType, index: number) => (
              <button
                key={index}
                onClick={() => mutationFun.mutate({ label: item.category })}
              >
                {item.category}
              </button>
            ))
          ) : (
            <p>Loading</p>
          )}
          <button className="border-green-500" onClick={() => sorted()}>
            sorted
          </button>
        </ul>
      </div>
    </div>
  );
}
