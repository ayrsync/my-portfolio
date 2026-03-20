"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
import Lightbox from "react-18-image-lightbox";
import "../../../node_modules/react-18-image-lightbox/style.css";
import Image from "next/image";
import { caseStudiesProjects, webDevProjects } from "../Data/data";
const images = [
  "/images/works/1.webp",
  "/images/works/2.webp",
  "/images/works/3.webp",
  "/images/works/4.webp",
  "/images/works/5.webp",
  "/images/works/6.webp",
  "/images/works/7.webp",
  "/images/works/8.webp",
];

export default function Projects() {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
    setOpen(!isOpen);
  };

  return (
    <>
      <section className="relative md:py-24 py-16" id="project">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h2 className="mb-6 md:text-3xl text-2xl font-semibold">
              Real Products. Real Growth.
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto text-[16px] leading-relaxed">
              These aren’t just websites — they’re business platforms built to
              generate leads, automate operations, and scale sustainably. From
              healthcare systems to legal marketplaces, each product was built
              with long-term growth in mind.
            </p>
          </div>

          <h3 className="text-center">Web Development</h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
            {webDevProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800"
              >
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{ height: "auto", width: "100%" }}
                  src={project.image}
                  alt={project.title}
                />

                {/* overlay */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></span>

                {/* text */}
                <span className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <span className="text-white hover:text-amber-500 font-semibold transition-all duration-500">
                    {project.title}
                  </span>
                  <span className="block text-sm text-slate-400">
                    {project.category}
                  </span>
                </span>

                {/* lightbox button */}
                <span className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link
                    href="#"
                    onClick={() => handleClick(index)}
                    className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link>
                </span>
              </a>
            ))}
          </div>

          <h3 className="text-center mt-8">Case Studies</h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
            {caseStudiesProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800"
              >
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{ height: "auto", width: "100%" }}
                  src={project.image}
                  alt={project.title}
                />

                {/* overlay */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></span>

                {/* text */}
                <span className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                  <span className="text-white hover:text-amber-500 font-semibold transition-all duration-500">
                    {project.title}
                  </span>
                  <span className="block text-sm text-slate-400">
                    {project.category}
                  </span>
                </span>

                {/* lightbox button */}
                <span className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <Link
                    href="#"
                    onClick={() => handleClick(index + 4)}
                    className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
                  >
                    <Unicons.UilCamera width={16} />
                  </Link>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
}
