"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

export default function GetInTouch() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  React.useEffect(() => {
    const iframe = document.getElementsByName("hidden_iframe")[0];

    iframe.onload = () => {
      setStatus("Message sent successfully!");
      document.getElementById("contactForm")?.reset();
    };
  }, []);
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="contact"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-5 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Let’s Build Something That Actually Grows Your Business
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Need a fast website, better Google rankings, or more leads? I help
            businesses turn visitors into customers through modern web
            development, SEO strategy, and performance-driven digital marketing.
            Tell me about your project — I’ll suggest the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
              Web Development
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
              SEO Optimization
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
              Speed Optimization
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
              Lead Generation
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
              Digital Marketing
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
          <div className="lg:col-span-8">
            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
              <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
              <form
                action="https://script.google.com/macros/s/AKfycbxhujQ9aDSagMMzbnw_hL2GSp785-C3krKHb5Nsg_9SP_DqBMaUny02BIB2Byi_bjYysA/exec"
                method="POST"
                target="hidden_iframe"
                id="contactForm"
              >
                <div className="grid lg:grid-cols-12 lg:gap-5">
                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="phone"
                      id="phone"
                      type="tel"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <input
                      name="title"
                      id="subject"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="What do you need help with?"
                    />
                  </div>

                  <div className="mb-5">
                    <textarea
                      name="description"
                      id="comments"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Tell me about your project, goals, timeline, or problems you are facing..."
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center"
                >
                  {loading ? "Sending..." : "Request Free Consultation"}
                </button>
                {status && (
                  <p className="text-sm mt-3 text-emerald-500">{status}</p>
                )}
              </form>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:ms-8">
              <div className="flex">
                <div className="icons text-center mx-auto">
                  <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    Quick Call
                  </h5>
                  <Link
                    href="tel:+917657910037"
                    className="text-slate-400 text-[15px]"
                  >
                    +917657910037
                  </Link>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="icons text-center mx-auto">
                  <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    Business Email
                  </h5>
                  <Link
                    href="mailto:ayrsync@gmail.com"
                    className="text-slate-400 text-[15px]"
                  >
                    ayrsync@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="icons text-center mx-auto">
                  <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    Location
                  </h5>
                  <p className="text-slate-400 text-[15px] mb-2">
                    Available Worldwide • Remote Friendly • Flexible Timezones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
