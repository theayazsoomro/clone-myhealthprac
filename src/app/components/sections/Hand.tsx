"use client";

import Image from "next/image";
import Button from "../common/Button";

export default function Hand() {
  return (
    <div className="min-h-screen w-full bg-[rgb(184,162,133)] flex flex-col lg:flex-row">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <Image
          src="/images/hand.jpeg"
          width={300}
          height={300}
          alt="hand"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between px-6 py-10 lg:py-16 lg:px-16 gap-6">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[rgb(24,24,24)] leading-tight">
          Everyone. Everywhere.
        </h2>

        <div>
          <p className="text-lg sm:text-xl lg:text-3xl mb-6 text-[rgb(24,24,24)] leading-snug">
            Health shouldn&apos;t be limited by time, location, or income.
            Health should be in your hands.
          </p>

          <Button
            text="Join Waitlist"
            imgSrc={"arrow.svg"}
            bgColor={"bg-black"}
            textColor={"text-white"}
            bgImg={"bg-white"}
          />
        </div>
      </div>
    </div>
  );
}
