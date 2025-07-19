"use client";

import Button from "../common/Button";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Tag from "../common/Tag";

export default function BloodTesting() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1")!);

      // Animate the words in the h1
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
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/blood-test.jpg" width={1000} height={1000} alt="blood-test" className="w-full" />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Hero Content (Centered) */}
      <div className="relative z-10 flex h-full px-8 text-white">
        <div className="container w-full flex-1/2  mt-18" ref={containerRef}>
          <h1 className="h1 text-2xl md:text-5xl font-bold text-white transition-opacity w-10/12">
            Choose what You need, when You need it
          </h1>
          <div className="tags flex flex-wrap gap-2 mt-5 w-6/12">
            <Tag innerText="Practice Tools" />
            <Tag innerText="Guide" />
            <Tag innerText="Tracking" />
            <Tag innerText="Insight Builder" />
            <Tag innerText="Self-Care" />
          </div>
        </div>

        <div className="flex-1/2 px-8 mt-18">
          <h1 className="text-2xl md:text-7xl font-medium mb-5">No matter who you&apos;re caring for — you&apos;re in the right place</h1>
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
  )
}
