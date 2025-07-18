"use client";

import { useState, useEffect } from "react";
import Button from "./Button";

export default function Navbar() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show white background if scrolled past 10px
      setScrolled(currentScrollY > 10);

      // Hide/show nav logic
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDir("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between px-8 py-3 fixed top-0 w-screen z-50 transition-all duration-300 ${
        scrollDir === "down" ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-white text-black" : "bg-transparent text-white"}`}
    >
      <div className="text-xl font-bold">
        <a href="#">MyHealthPrac</a>
      </div>
      <div className="flex items-center gap-6 text-sm font-semibold">
        <ul className="flex gap-10 list-disc">
          <a
            href="#"
            className={`${scrolled} ? hover:text-gray-300 : hover:text-black-600`}
          >
            What&apos;s included
          </a>
          <li>
            <a
              href="#"
              className={`${scrolled} ? hover:text-gray-300 : hover:text-black-600`}
            >
              Health conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${scrolled} ? hover:text-gray-300 : hover:text-black-600`}
            >
              For you + For professionals
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${scrolled} ? hover:text-gray-300 : hover:text-black-600`}
            >
              FAQ
            </a>
          </li>
        </ul>
        <Button />
      </div>
    </nav>
  );
}
