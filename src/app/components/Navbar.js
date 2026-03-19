"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as Link1 } from "react-scroll";
import * as Unicons from "@iconscout/react-unicons";
import Image from "next/image";

export default function Navbar() {
  let [stickyNavbar, setstickyNavbar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
  });

  function windowScroll() {
    setstickyNavbar(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50,
    );
  }
  return (
    <nav className={`${stickyNavbar ? "is-sticky" : ""} navbar`} id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        <Link href="/" className="navbar-brand md:me-8">
          <Image
            width={96}
            height={20}
            src="/images/logo-light-3.png"
            className="inline-block dark:hidden"
            alt=""
          />
          <Image
            width={96}
            height={20}
            src="/images/logo-dark-3.png"
            className="hidden dark:inline-block"
            alt=""
          />
        </Link>

        <div className="flex lg_992:order-2 ms-auto items-center">
          {/* Email */}
          <Link
            href="mailto:arysync@gmail.com"
            className="btn btn-icon me-2 btn-sm border border-gray-800 rounded-md hover:border-amber-500 hover:bg-amber-500"
          >
            <Unicons.UilEnvelope width={16} />
          </Link>

          {/* Phone */}
          <Link
            href="tel:+917657910037"
            className="btn btn-icon me-2 btn-sm border border-gray-800 rounded-md hover:border-amber-500 hover:bg-amber-500"
          >
            <Unicons.UilPhone width={16} />
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/917657910037"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-green-500 hover:bg-green-500"
          >
            <Unicons.UilWhatsapp width={16} />
          </Link>
        </div>

        {/* <!-- Navbar Manu --> */}
        <div
          className="navigation lg_992:order-1 lg_992:flex hidden ms-auto"
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item cursor-pointer">
              <Link1
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Home
              </Link1>
            </li>
            <li className="nav-item cursor-pointer">
              <Link1
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                About Me
              </Link1>
            </li>
            <li className="nav-item cursor-pointer">
              <Link1
                to="service"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Services
              </Link1>
            </li>
            <li className="nav-item cursor-pointer">
              <Link1
                to="experience"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Experience
              </Link1>
            </li>
            <li className="nav-item cursor-pointer">
              <Link1
                to="project"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Projects
              </Link1>
            </li>
            {/* <li className="nav-item">
              <Link1
                to="blog"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Blogs
              </Link1>
            </li> */}
            <li className="nav-item cursor-pointer">
              <Link1
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contact Me
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
