"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center text-white my-auto">
      <h1 className="text-lg sm:text-2xl font-bold mb-8">Welcome to Zango CodeAssist</h1>

      <div className="flex flex-col space-y-4 w-full">
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "/",
              redirect: true,
            })
          }
          className="flex items-center justify-center px-4 py-3 border border-[#444455] rounded-lg bg-slate-900"
        >
          <Image
            width={20}
            height={20}
            src="/github1.png"
            alt="GitHub Icon"
            className="h-6 w-6 mr-2"
          />
          Continue with GitHub
        </button>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
              redirect: true,
            })
          }
          className="flex items-center justify-center px-4 py-3 border border-[#444455] rounded-lg bg-slate-900"
        >
          <Image
            width={20}
            height={20}
            src="/google.png"
            alt="Google Icon"
            className="h-6 w-6 mr-2"
          />
          Continue with Google
        </button>
      </div>

      <p className="mt-6 text-sm text-gray-400">
        By logging in, you agree to our{" "}
        <a href="/terms" className="text-[#6b63ff] ">
          terms of service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-[#6b63ff] ">
          privacy policy
        </a>
        .
      </p>
    </div>
  );
}
