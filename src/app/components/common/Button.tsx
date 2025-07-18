"use client";

import Image from "next/image";
import { useState } from "react";

export default function Button({ text = "Join Waitlist" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="flex items-center gap-5 text-xs ps-5 pe-1 py-1 rounded-full bg-black text-white transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{text}</span>
      <Image src="arrow.svg"  alt="arrow" width={40} height={40} className="p-3 bg-white rounded-full"/>
    </button>
  );
}