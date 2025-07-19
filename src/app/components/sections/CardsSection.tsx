"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsToDot,
  faBrain,
  faCircleUser,
  faGaugeHigh,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "../common/Carousel";
import { AnimatedText } from "../common/AnimatedText";

export default function CardsSection() {
  return (
    <div className="w-full px-4 md:px-8 py-10 space-y-16">
      {/* Top Icon + Text */}
      <div className="w-full md:w-4/12">
        <ul>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faStarOfLife}
              size="2x"
              className="slow-spin"
            />
            <span className="font-medium text-xs">
              READY TO SEE WHAT YOUR BODY&apos;S BEEN TRYING TO TELL YOU?
            </span>
          </li>
        </ul>
      </div>

      {/* Headline */}
      <div className="w-full md:w-10/12">
        <div className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          <AnimatedText
            text="A Predictive, Personalised Health Platform — for People and
          Practitioners"
          />
        </div>
      </div>

      {/* Carousel */}
      <Carousel />

      {/* Subheadline */}
      <div className="w-full md:w-7/12">
        <div className="text-2xl sm:text-4xl lg:text-6xl font-semibold">
          <AnimatedText text="Anyone. Anywhere. 290+ markers, 160+ patterns." />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-dashed border-gray-400">
        {/* Card 1 */}
        <div className="flex flex-col gap-4 text-left pt-10">
          <FontAwesomeIcon
            icon={faGaugeHigh}
            size="3x"
            className="text-left self-start md:mb-16 mb-0"
          />
          <div>
            <h3 className="font-semibold text-lg">
              No Appointments. No Waiting.
            </h3>
            <p className="text-sm text-gray-600">
              Get actionable insights in minutes — no needles, no labs, no
              delays.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4 text-left border-t md:border-t-0 md:border-l border-dashed border-gray-400 pl-0 md:pl-6 pt-10">
          <FontAwesomeIcon
            icon={faBrain}
            size="3x"
            className="text-left self-start md:mb-16 mb-0"
          />
          <div>
            <h3 className="font-semibold text-lg">Smarter Than Guesswork</h3>
            <p className="text-sm text-gray-600">
              We process 2,000+ medical references and millions of data points
              to predict your health risks — clearly and intelligently.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4 text-left border-t md:border-t-0 md:border-x border-dashed border-gray-400 px-0 md:px-6 pt-10">
          <FontAwesomeIcon
            icon={faCircleUser}
            size="3x"
            className="text-left self-start md:mb-16 mb-0"
          />
          <div>
            <h3 className="font-semibold text-lg">Tailored to You</h3>
            <p className="text-sm text-gray-600">
              Every scan adapts to your biofeedback, lifestyle and unique
              markers — not generic checklists.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col gap-4 text-left border-t md:border-t-0 border-dashed border-gray-400 pl-0 md:pl-6 pt-10">
          <FontAwesomeIcon
            icon={faArrowsToDot}
            size="3x"
            className="text-left self-start md:mb-16 mb-0"
          />
          <div>
            <h3 className="font-semibold text-lg">Always-On Awareness</h3>
            <p className="text-sm text-gray-600">
              With each scan, patterns emerge. You see what&apos;s changing —
              and why it matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
