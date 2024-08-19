
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import Image from "next/image";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      router.push("/comment");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-slate-300 h-screen sxs:px-3 xs:px-8 md:px-20 xl:px-72 flex items-center justify-center ">
      <div className=" bg-white p-2 rounded-2xl shadow-lg flex flex-row gap-6">
        <div className=" bg-gradient-to-bl from-blue-400 to-blue-500  sxs:px-5 xs:px-12 py-10   rounded-xl w-full sxs:hidden  xs:hidden md:hidden xl:block">      
          <Image
            className="mt-[15%]"
            alt=""
            width={550}
            height={550}
            src="/team.svg"
          />
        </div>
        <div className="w-full py-16 px-6">
          <div className="text-center m-5">
            <p className="font-bold text-xl text-slate-900">Hello Again !</p>
            <p className="text-lg text-slate-900">
              Welcome back you've been missed!
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6 ">
            <div className="">
              <InputText
                id="username"
                className="border p-1 w-full h-12 rounded-lg px-3 outline-none"
                placeholder="Username"
                value={username  || ''}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="p-field">
              <InputText
                id="password"
                className="border p-1 w-full h-12 rounded-lg px-3 outline-none"
                placeholder="Password"
                type="password"
                value={password  || ''}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-right">

                <a href="/" className="text-right text-slate-500 text-xs  py-2">
                  Forget password ?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-400 w-full text-white py-2 rounded-lg my-10 drop-shadow-lg hover:bg-blue-600"
            >
              Login
            </button>
            <div className="flex space-x-3 justify-center  text-white text-center hover:cursor-pointer ">
              <div className="bg-blue-500  drop-shadow-lg size-8 p-1 flex justify-center items-center  rounded-md">
                <FaFacebookF className="size-5" />
              </div>
              <div className="bg-white drop-shadow-lg size-8 flex justify-center items-center p-1 rounded-md">
                <FcGoogle className="size-5" />
              </div>
              <div className="bg-slate-500 size-8 shadow-lg p-1 mx-auto justify-center items-center flex rounded-md">
                <FaGithub className="size-5" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
