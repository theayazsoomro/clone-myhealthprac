"use client";

import Image from "next/image";
import Button from "../common/Button";

export default function Hand() {
  return (
    <div className="h-screen w-full bg-[rgb(184,162,133)] flex">
      <div className="part-1 w-6/12">
        <Image src="/images/hand.jpeg" width={300} height={300} alt="hand" className="w-full h-full object-cover" />
      </div>
      <div className="part-2 w-6/12 flex flex-col justify-between pt-12 pb-8 p-8">
        <h2 className="text-8xl font-bol w-6/12 text-[rgb(24,24,24)]">Everyone. Everywhere.</h2>
        <div>
          <p className="text-5xl w-10/12 mb-5 text-[rgb(24,24,24)]">
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
