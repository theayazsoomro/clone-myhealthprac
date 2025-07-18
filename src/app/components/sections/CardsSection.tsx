import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsToDot, faBrain, faCircleUser, faGaugeHigh, faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../common/Carousel";

export default function CardsSection() {
  return (
    <div className="w-full ">
      <div className="pt-10 w-3/12 px-8">
        <ul>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faStarOfLife}
              size="2x"
              className="slow-spin"
            />
            <span className="font-medium text-xs ps-3">
              READY TO SEE WHAT YOUR BODY&apos;S BEEN TRYING TO TELL YOU?
            </span>
          </li>
        </ul>
      </div>
      <div className="w-10/12 py-30 px-8">
        <h2 className="text-8xl font-bold">
          A Predictive, Personalised Health Platform — for People and
          Practitioners.
        </h2>
      </div>

      <Carousel />

      <div className="w-6/12 pt-30 pb-20 px-8">
        <h2 className="text-6xl font-semibold">
          Anyone. Anywhere. 290+ markers, 160+ patterns.
        </h2>
      </div>

      {/* Cards */}
        <div className="cards w-full min-h-[280px] flex">
            <div className=" min-h-12 flex flex-col justify-between text-left px-10 pt-5 pb-2 border-dashed border-t-1 border-gray-400 border-collapse flex-1/4">
                <div><FontAwesomeIcon icon={faGaugeHigh} size="3x" /></div>
                <div>
                    <h3>No Appointments. No Waiting.</h3>
                    <p>Get actionable insights in minutes — no needles, no labs, no delays.</p>
                </div>
            </div>
            <div className="min-h-12 flex flex-col justify-between text-left px-10 pt-5 pb-2 border-dashed border-s-1 border-t-1 border-gray-400 border-collapse flex-1/4">
                <div><FontAwesomeIcon icon={faBrain} size="3x" /></div>
                <div>
                    <h3>Smarter Than Guesswork</h3>
                    <p>We process 2,000+ medical references and millions of data points to predict your health risks — clearly and intelligently.</p>
                </div>
            </div>
            <div className="min-h-12 flex flex-col justify-between text-left px-10 pt-5 pb-2 border-dashed border-x-1 border-t-1 border-gray-400 border-collapse flex-1/4">
                <div><FontAwesomeIcon icon={faCircleUser} size="3x" /></div>
                <div>
                    <h3>Tailored to You</h3>
                    <p>Every scan adapts to your biofeedback, lifestyle and unique markers — not generic checklists.</p>
                </div>
            </div>
            <div className="min-h-12 flex flex-col justify-between text-left px-10 pt-5 pb-2 border-dashed border-t-1 border-gray-400 border-collapse flex-1/4">
                <div><FontAwesomeIcon icon={faArrowsToDot} size="3x" /></div>
                <div>
                    <h3>Always-On Awareness</h3>
                    <p>With each scan, patterns emerge. You see what&apos;s changing — and why it matters.</p>
                </div>
            </div>
            
        </div>

    </div>
  );
}
