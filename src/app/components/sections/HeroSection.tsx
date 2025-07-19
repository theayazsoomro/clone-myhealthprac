"use client";

import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

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
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-8 py-10 text-white">
        <div className="container max-w-6xl w-full" ref={containerRef}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-24 md:mt-28 transition-opacity leading-tight max-w-5xl">
            See Beyond. Unlock Your Health
          </h1>
        </div>

        <div className="w-full mt-10 md:mt-0 mb-8 flex flex-col md:flex-row gap-10 max-w-6xl">
          {/* Features */}
          <div className="w-full md:w-1/2 space-y-6">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FontAwesomeIcon icon={faChartPie} size="2x" className="mt-1" />
                <div className="flex flex-col">
                  <span className="font-bold text-base md:text-lg">
                    Real-Time Analysis
                  </span>
                  <span className="text-sm md:text-base">
                    Fast, actionable insights without long wait times.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FontAwesomeIcon icon={faChartPie} size="2x" className="mt-1" />
                <div className="flex flex-col">
                  <span className="font-bold text-base md:text-lg">
                    Real-Time Analysis
                  </span>
                  <span className="text-sm md:text-base">
                    Fast, actionable insights without long wait times.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FontAwesomeIcon icon={faChartPie} size="2x" className="mt-1" />
                <div className="flex flex-col">
                  <span className="font-bold text-base md:text-lg">
                    Real-Time Analysis
                  </span>
                  <span className="text-sm md:text-base">
                    Fast, actionable insights without long wait times.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Heading + Button */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl leading-snug">
              Your body holds the answers
              <br /> — we help you see them.
            </h2>
            <div>
              <Button
                text="Join Waitlist"
                imgSrc={"arrow-white.svg"}
                bgColor={"bg-white"}
                textColor={"text-black"}
                bgImg={"bg-black"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
