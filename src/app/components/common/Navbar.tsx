"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

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
      className={`fixed top-0 w-full z-50 px-0 md:px-8 py-4 transition-all duration-300 ${
        scrollDir === "down" ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-white text-black" : "bg-transparent text-white"}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl px-4 font-bold">
          <a href="#">MyHealthPrac</a>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <ul className="flex gap-10">
            <li>
              <a href="#" className="hover:text-gray-600">
                What&apos;s included
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Health conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                For you + For professionals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                FAQ
              </a>
            </li>
          </ul>
          <Button
            text="Join Waitlist"
            imgSrc="arrow.svg"
            bgColor="bg-black"
            textColor="text-white"
            bgImg="bg-white"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden px-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <FontAwesomeIcon
              icon={mobileMenuOpen ? faTimes : faBars}
              size="lg"
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-8 px-4 space-y-4 text-sm font-semibold bg-black text-white">
          <a href="#" className="white block hover:text-gray-600">
            What&apos;s included
          </a>
          <a href="#" className="white block hover:text-gray-600">
            Health conditions
          </a>
          <a href="#" className="white block hover:text-gray-600">
            For you + For professionals
          </a>
          <a href="#" className="white block hover:text-gray-600">
            FAQ
          </a>
          <Button
            text="Join Waitlist"
            imgSrc="arrow-white.svg"
            bgColor="bg-white"
            textColor="text-black"
            bgImg="bg-black"
          />
        </div>
      )}
    </nav>
  );
}
