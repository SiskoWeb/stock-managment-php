import { getServerSession } from "next-auth";

import React from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import LoginForm from "./components/LoginForm";
export const metadata = {
  title: "Login Stock",
  description: "Managment Stock",
};
export default async function login() {
  //check if user is logined
  const session = await getServerSession(options);

  if (session) redirect("/dashboard");

  return <LoginForm />;
}
