"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
  try {
    await axios.post("/api/signup", formData);

    toast.success("Signup successful");
    router.push("/login");
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    } else {
      console.error(error);
    }

    toast.error("Signup failed");
  }
};

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-purple-950 text-white flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl w-[400px]">
        <h1 className="text-3xl font-bold mb-6">
          Create Account
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105 transition-all p-3 rounded-lg font-semibold"
          >
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}