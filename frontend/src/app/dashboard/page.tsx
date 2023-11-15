import { options } from "../api/auth/[...nextauth]/options";
import NavBar from "../components/NavBar";
import ListProducts from "../components/product/ListProducts";
import { getProduct } from "../lib/fetch";

import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export const metadata = {
  title: "Stock",
  description: "Managment Stock",
};

export default async function Home() {
  //check user if logined
  const session: any = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }
  //FETCHING DATA  IN SERVER SIDE
  const products = await getProduct();

  if (!products) return <h2>Error while fetching data</h2>;
  return (
    <main className="flex min-h-screen flex-col  h-full w-full bg-[#f5f6fa] gap-4 ">
      <NavBar />

      <ListProducts productsList={products} />
    </main>
  );
}
