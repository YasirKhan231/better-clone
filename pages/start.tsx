"use client";

import { Phone, Router } from "lucide-react";
import { useState } from "react";
import betsy from "../public/betsy.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Start() {
  const [isPhoneActive, setIsPhoneActive] = useState(false);
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <header className="flex items-center justify-between border-b-2 border-black">
        <div className="flex items-center gap-2 text-emerald-600">
          <span className="text-xl font-bold">Better</span>
          <span className="text-gray-600">Mortgage</span>
        </div>
        <button
          onClick={() => setIsPhoneActive(!isPhoneActive)}
          className={`rounded-full p-3 transition-all duration-300 ${
            isPhoneActive
              ? "bg-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              : "bg-emerald-50 hover:bg-emerald-100"
          }`}
        >
          <Phone className="h-5 w-5 text-emerald-600" />
        </button>
      </header>

      {/* Chat Interface - Moved to top */}
      <div className="mx-auto mt-16 max-w-2xl text-center">
        <Image
          src={betsy}
          alt="Profile"
          width={80}
          height={80}
          className="mx-auto rounded-full object-cover"
        />
        <h1 className="mt-6 text-3xl font-bold">Hi, I'm Betsy!</h1>
        <p className="mt-2 text-xl text-gray-600">What can I help you with?</p>

        <div className="mt-8 space-y-4">
          {[
            { text: "Buying a home", icon: "🏠" },
            { text: "Refinance my mortgage", icon: "💰" },
            { text: "Get cash from my home", icon: "💵" },
          ].map((option) => (
            <Link key={option.text} href="/home">
              <button
                className="flex w-full items-center gap-4 rounded-lg border border-gray-200 p-4 transition-all hover:border-emerald-600 hover:border-[3px]"
                onClick={() => router.push("/home")}
              >
                <span className="text-2xl">{option.icon}</span>
                <span className="text-left text-lg">{option.text}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Section - Moved below */}
      <section className="mx-auto mt-24 max-w-4xl text-center">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold">$100B</h2>
            <p className="mt-2 text-gray-600">
              home loans funded entirely online
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">400K</h2>
            <p className="mt-2 text-gray-600">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>

        {/* Benefits Box */}
        <div className="mx-auto mt-12 max-w-2xl rounded-xl bg-emerald-50/50 p-8">
          <p className="text-gray-600">After a few questions, you'll unlock:</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-600 p-2">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>Custom mortgage rates</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-600 p-2">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>Exclusive offers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-600 p-2">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span>A personalized dashboard</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
