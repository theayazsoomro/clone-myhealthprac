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

      {/* Hero Content (Centered) */}
      <div className="relative z-10 flex flex-col items-start justify-between h-full px-4 text-white">
        <div className="container w-full" ref={containerRef}>
          <h1 className="h1 text-5xl/loose md:text-7xl font-bold text-white mt-28 transition-opacity w-2xl">
            See Beyond. Unlock Your Health
          </h1>
        </div>
        <div className="w-full mb-8 flex">
          <div className="w-6/12">
            <ul>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faChartPie} size="3x" className="pe-3" />
                <span className="flex flex-col">
                  <span className="font-bold">Real-Time Analysis</span>
                  <span className="text-sm">
                    Fast, actionable insights without long wait times.
                  </span>
                </span>
              </li>
              <li className="flex items-center my-8">
                <FontAwesomeIcon icon={faChartPie} size="3x" className="pe-3" />
                <span className="flex flex-col">
                  <span className="font-bold">Real-Time Analysis</span>
                  <span className="text-sm">
                    Fast, actionable insights without long wait times.
                  </span>
                </span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faChartPie} size="3x" className="pe-3" />
                <span className="flex flex-col">
                  <span className="font-bold">Real-Time Analysis</span>
                  <span className="text-sm">
                    Fast, actionable insights without long wait times.
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-5xl mb-8">
              Your body holds the answers
              <br /> — we help you see them.
            </h2>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
