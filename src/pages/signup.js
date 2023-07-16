import SocialSignin from "@/components/SocialSignin/SocialSignin";
import Link from "next/link";
import React, { useState } from "react";

function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        window.location.href = "/signin"
        console.log(res, "signup");
      })
      .catch(err=>{
        console.log(err)
      })
  };
  return (
    <div >
      
      <form
        onSubmit={handleSignup}
        className=" text-slate-950 flex justify-center  "
      >
        <div className=" w-full max-w-[450px] m-10 mt-20 rounded-md gap-2 flex flex-col [&>*]:rounded-3xl [&>input]:px-3 [&>input]:bg-zinc-400 text-white [&>input]:py-2 [&>input]:outline-none [&>input]:mb-2  p-7 bg-zinc-600 [&>label]:mb-[-5px] [&>label]:ml-2 [&>label]:font-semibold [&>label]:text-sm">
          <h1 className="text-2xl font-bold text-white text-center mb-5">
            Signup
          </h1>
          <label className="text-white" htmlFor="name">
            NAME:
          </label>
          <input
            id="name"
            value={name}
            onChange={(t) => setName(t.target.value)}
            type="text"
            placeholder="Name"
            className="placeholder:text-white"
          />
          <label className="text-white" htmlFor="email">
            EMAIL:
          </label>
          <input
            id="email"
            value={email}
            onChange={(t) => setEmail(t.target.value)}
            type="email"
            placeholder="Email"
            className="placeholder:text-white"
          />
          <label className="text-white" htmlFor="pass">
            PASSWORD
          </label>
          <input
            id="pass"
            value={password}
            onChange={(t) => setPassword(t.target.value)}
            type="password"
            placeholder="Password"
            className="placeholder:text-white"
          />
          <label className="text-white" htmlFor="date">
            Date of Birth
          </label>
          <input
            id="date"
            value={password}
            onChange={(t) => setPassword(t.target.value)}
            type="date"
            className="placeholder:text-white"
          />
          <button className=" bg-purple-500 text-white px-2 py-1 ">Submit</button>
        </div>
      </form>
      <SocialSignin />

      <div className="flex justify-center gap-2 text-sm">
        <p className="text-white">Already have an account?</p>
        <p className=" text-purple-500">
          <Link href="/signin">Signin</Link>
        </p>
      </div>
      
    </div>
  );
}

export default signup;
