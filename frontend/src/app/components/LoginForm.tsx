"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "./loader";
export default function LoginForm() {
  // when user click on  login
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [loadig, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const onSubmit = async () => {
    if (!password || !userName) return;
    else {
      // display loading
      setLoading(true);
      setError("");
      try {
        //this for validte is exist user or not useing next auth
        const res = await signIn("credentials", {
          userName,
          password,
          redirect: false,
        });

        console.log(res);
        //if user not exist
        if (res?.status === 401) {
          setError("email or passowrd incorrect ");
          setLoading(false);
          return;
        }
        // if there is pb in server
        else if (res?.error === "501") {
          setError("there is a problem in server");
          setLoading(false);
        }
        // efter 2 sos rederact to dashboard
        setTimeout(() => {
          setLoading(false);
          router.replace("dashboard");
        }, 2000);
      } catch (error) {
        setError("there is a problem in nternet or server");
        setLoading(false);
      }
    }
  };

  return (
    <section className="bg-white h-screen">
      {/* {display loading spinner when user click in button resgiter} */}
      {loadig && <Loader />}

      <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* display msg error */}
          {error && (
            <div className=" text-center bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mb-2">
              {error}
            </div>
          )}
          <label className="space-y-6">
            <div>
              <label
                htmlFor="uer"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  id="user"
                  name="user"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div></div>
          </label>
          <button
            onClick={() => onSubmit()}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </div>
    </section>
  );
}
