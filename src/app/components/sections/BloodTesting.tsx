"use client";

import Button from "../common/Button";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Tag from "../common/Tag";
import { AnimatedText } from "../common/AnimatedText";

export default function BloodTesting() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Show the container after fonts are ready
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1")!);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 5,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/blood-test.jpg"
          width={1000}
          height={1000}
          alt="blood-test"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between h-full px-6 md:px-16 py-12 text-white gap-12">
        {/* Left Side */}
        <div ref={containerRef} className="w-full md:w-6/12 visibility-hidden">
          <h2 className="text-2xl md:text-5xl font-bold w-full md:w-10/12">
            Choose what You need, when You need it
          </h2>
          <div className="flex flex-wrap gap-2 mt-5 w-full md:w-8/12">
            <Tag innerText="Practice Tools" />
            <Tag innerText="Guide" />
            <Tag innerText="Tracking" />
            <Tag innerText="Insight Builder" />
            <Tag innerText="Self-Care" />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-6/12">
          <div className="text-2xl md:text-6xl font-medium mb-6">
            <AnimatedText text="No matter who you&apos;re caring for — you&apos;re in the right
            place" />
          </div>
          <Button
            text="Join Waitlist"
            imgSrc={"arrow-white.svg"}
            bgColor={"bg-white"}
            textColor={"text-black"}
            bgImg={"bg-black"}
          />
        </div>
      </div>
    </section>
  );
}
