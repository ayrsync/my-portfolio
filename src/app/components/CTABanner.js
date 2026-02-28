"use client";
import React from "react";
import Link from "next/link";

export default function AddBanner() {
  return (
    <section className="py-20 w-full table relative bg-[url('/images/bg/bg2.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 text-center">
          <h2 className="mb-4 md:text-3xl text-2xl text-white font-semibold">
            Let’s figure out what’s actually stopping your product from growing.
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-[15px]">
            Most projects don’t fail because of bad code — they fail because of
            unclear decisions, wrong priorities, and over-engineering. I help
            founders turn messy ideas into structured, scalable products —
            covering development, SEO visibility, and growth systems together.
          </p>

          <div className="relative mt-8">
            <Link
              href="#contact"
              className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md py-2 px-6 transition duration-300 ease-in-out"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
