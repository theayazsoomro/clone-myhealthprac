"use client";

import Image from "next/image";
import { useState } from "react";
import NewsletterModal from "./NewsletterModal";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  bgImg?: string;
  imgSrc: string;
}

export default function Button({
  text = "Join Waitlist",
  bgColor = "bg-black",
  textColor = "text-white",
  bgImg = "bg-white",
  imgSrc = "arrow.svg",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
    <button
      className={`flex items-center gap-5 text-xs ps-5 pe-1 py-1 rounded-full ${bgColor} ${textColor} transition-all cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setOpen(true)}
    >
      <span>{text}</span>
      <Image
        src={imgSrc}
        alt="arrow"
        width={40}
        height={40}
        className={`p-3 ${bgImg} rounded-full`}
      />
    </button>
      <NewsletterModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
