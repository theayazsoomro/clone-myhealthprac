"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";
import { AnimatedText } from "@/app/components/common/AnimatedText";

export default function HealthHub() {
  return (
    <div className="mainContainer w-full bg-gray-100 py-12 md:py-52">
      {/* 1st Section: Your Health Hub Reimagined */}
      <div className="flex flex-col justify-center items-center pb-24 md:pb-52">
        <div className="w-11/12 md:w-6/12 text-2xl md:text-8xl font-bold text-center mb-8">
          <AnimatedText text="Your Health Hub Reimagined" />
        </div>
        <p className="w-11/12 md:w-4/12 font-medium text-center mb-24 md:mb-52">
          MyHealthPrac brings together lab results, symptoms, and personalised
          insights in a single, easy-to-navigate dashboard. Track progress over
          time, identify key health priorities, and understand what truly
          matters — all at a glance.
        </p>
        <Image
          src="/images/tablet.jpeg"
          width={500}
          height={500}
          alt="tablet"
        />
      </div>

      {/* 2nd Section: Designed for You. Built to Evolve with You */}
      <div className="w-full flex flex-col md:flex-row px-8 pb-18 md:pb-44 border-b-1 border-dashed border-[#c1c1c1]">
        <div className="md:w-6/12 h-[300px] md:sticky md:top-20">
          <div className="text-2xl md:text-5xl font-medium w-11/12 md:w-8/12">
            <AnimatedText text="Designed for You. Built to Evolve with You" />
          </div>
          <p className="w-6/12 mt-6">
            Your data, your input, your pace — all in one place. Finally, care
            that fits how life actually works.
          </p>
        </div>
        <div className="w-full md:w-6/12">
          <ul className="w-full md:w-8/12">
            <li className="flex items-center mb-12">
              <FontAwesomeIcon icon={faHeart} size="2x" className="pe-8" />
              <span className="flex flex-col">
                <span className="text-xl font-semibold">
                  What&apos;s Healthy — Not Just What&apos;s Common
                </span>
                <span className="font-thin">
                  Most reference ranges reflect population averages. We focus on
                  what&apos;s optimal for long-term health — not just
                  statistically &quot;normal&quot;.
                </span>
              </span>
            </li>
            <li className="flex items-center mb-12">
              <FontAwesomeIcon icon={faHeart} size="2x" className="pe-8" />
              <span className="flex flex-col">
                <span className="text-xl font-semibold">
                  What&apos;s Healthy — Not Just What&apos;s Common
                </span>
                <span className="font-thin">
                  Most reference ranges reflect population averages. We focus on
                  what&apos;s optimal for long-term health — not just
                  statistically &quot;normal&quot;.
                </span>
              </span>
            </li>
            <li className="flex items-center mb-12">
              <FontAwesomeIcon icon={faHeart} size="2x" className="pe-8" />
              <span className="flex flex-col">
                <span className="text-xl font-semibold">
                  What&apos;s Healthy — Not Just What&apos;s Common
                </span>
                <span className="font-thin">
                  Most reference ranges reflect population averages. We focus on
                  what&apos;s optimal for long-term health — not just
                  statistically &quot;normal&quot;.
                </span>
              </span>
            </li>
            <li className="flex items-center mb-12">
              <FontAwesomeIcon icon={faHeart} size="2x" className="pe-8" />
              <span className="flex flex-col">
                <span className="text-xl font-semibold">
                  What&apos;s Healthy — Not Just What&apos;s Common
                </span>
                <span className="font-thin">
                  Most reference ranges reflect population averages. We focus on
                  what&apos;s optimal for long-term health — not just
                  statistically &quot;normal&quot;.
                </span>
              </span>
            </li>
            <li className="flex items-center mb-12">
              <FontAwesomeIcon icon={faHeart} size="2x" className="pe-8" />
              <span className="flex flex-col">
                <span className="text-xl font-semibold">
                  What&apos;s Healthy — Not Just What&apos;s Common
                </span>
                <span className="font-thin">
                  Most reference ranges reflect population averages. We focus on
                  what&apos;s optimal for long-term health — not just
                  statistically &quot;normal&quot;.
                </span>
              </span>
            </li>
            <li className="flex items-center mb-12">
              <FontAwesomeIcon icon={faHeart} size="2x" className="pe-8" />
              <span className="flex flex-col">
                <span className="text-xl font-semibold">
                  What&apos;s Healthy — Not Just What&apos;s Common
                </span>
                <span className="font-thin">
                  Most reference ranges reflect population averages. We focus on
                  what&apos;s optimal for long-term health — not just
                  statistically &quot;normal&quot;.
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3rd Section: From ADHD to Autoimmunity */}
      <div className="py-12 md:py-24 px-8">
        {/* Title Section */}
        <div>
          <h2 className="text-2xl md:text-6xl font-medium w-full md:w-8/12 mb-8">
            <AnimatedText text="From ADHD to Autoimmunity — We help you make sense of what&apos;s
            happening and what to do next." />
          </h2>
          <Button
            text="Full List (Upcoming)"
            imgSrc={"arrow.svg"}
            bgColor={"bg-black"}
            textColor={"text-white"}
            bgImg={"bg-white"}
          />
        </div>

        {/* 1st 3-Column Boxes */}
        <div className="flex flex-wrap md:flex-nowrap mt-24">
          <div className="border-e-1 border-dashed border-[#c1c1c1] flex-1/2 md:flex-1/3">
            <h2 className="text md:text-4xl font-bold w-full md:w-10/12 h-[120px] md:h-[200px] sticky top-0 bg-gray-100 pt-10">
              Gut, Digestion & Microbiome
            </h2>
            <ul className="mt-8 text-sm md:text-[16px] md:mt-32">
              <li>Acid reflux</li>
              <li>Bacterial vaginosis</li>
              <li>Blastocystis</li>
              <li>Candida</li>
              <li>Clostridium difficile</li>
              <li>Coeliac disease</li>
              <li>Constipation</li>
              <li>Crohn&apos;s disease</li>
              <li>Diarrhoea</li>
              <li>Diverticulitis</li>
              <li>Entamoeba</li>
              <li>Gallbladder removal</li>
              <li>Gastritis (Chronic)</li>
              <li>GERD</li>
              <li>Gilbert&apos;s syndrome</li>
              <li>Gingivitis</li>
              <li>Halitosis</li>
              <li>H. pylori</li>
              <li>Hypochlorhydria</li>
              <li>IBD</li>
              <li>IBS</li>
              <li>Leaky gut</li>
              <li>Mold Illness (CIRS)</li>
              <li>Mycotoxicity</li>
              <li>Oral thrush</li>
              <li>Pancreatic insufficiency</li>
              <li>Parasites</li>
              <li>SIBO, SIFO & LIBO</li>
              <li>Ulcerative colitis</li>
              <li>Vaginal thrush</li>
            </ul>
          </div>
          <div className="border-e-1 border-dashed border-[#c1c1c1] flex-1/2 md:flex-1/3 ps-8">
            <h2 className="text md:text-4xl font-bold w-full md:w-10/12 h-[120px] md:h-[200px] sticky top-0 bg-gray-100 pt-10">
              Hormones, Fertility & Reproduction
            </h2>
            <ul className="mt-8 text-sm md:text-[16px] md:mt-32">
              <li>Acid reflux</li>
              <li>Bacterial vaginosis</li>
              <li>Blastocystis</li>
              <li>Candida</li>
              <li>Clostridium difficile</li>
              <li>Coeliac disease</li>
              <li>Constipation</li>
              <li>Crohn&apos;s disease</li>
              <li>Diarrhoea</li>
              <li>Diverticulitis</li>
              <li>Entamoeba</li>
              <li>Gallbladder removal</li>
              <li>Gastritis (Chronic)</li>
              <li>GERD</li>
              <li>Gilbert&apos;s syndrome</li>
              <li>Gingivitis</li>
              <li>Halitosis</li>
              <li>H. pylori</li>
              <li>Hypochlorhydria</li>
              <li>IBD</li>
              <li>IBS</li>
              <li>Leaky gut</li>
              <li>Mold Illness (CIRS)</li>
              <li>Mycotoxicity</li>
              <li>Oral thrush</li>
              <li>Pancreatic insufficiency</li>
              <li>Parasites</li>
              <li>SIBO, SIFO & LIBO</li>
              <li>Ulcerative colitis</li>
              <li>Vaginal thrush</li>
            </ul>
          </div>
          <div className="border-e-1 border-dashed border-[#c1c1c1] flex-1/2 md:flex-1/3 ps-8">
            <h2 className="text md:text-4xl font-bold w-full md:w-10/12 h-[120px] md:h-[200px] sticky top-0 bg-gray-100 pt-10">
              Brain, Mood & Mental Health
            </h2>
            <ul className="mt-8 text-sm md:text-[16px] md:mt-32">
              <li>Acid reflux</li>
              <li>Bacterial vaginosis</li>
              <li>Blastocystis</li>
              <li>Candida</li>
              <li>Clostridium difficile</li>
              <li>Coeliac disease</li>
              <li>Constipation</li>
              <li>Crohn&apos;s disease</li>
              <li>Diarrhoea</li>
              <li>Diverticulitis</li>
              <li>Entamoeba</li>
              <li>Gallbladder removal</li>
              <li>Gastritis (Chronic)</li>
              <li>GERD</li>
              <li>Gilbert&apos;s syndrome</li>
              <li>Gingivitis</li>
              <li>Halitosis</li>
              <li>H. pylori</li>
              <li>Hypochlorhydria</li>
              <li>IBD</li>
              <li>IBS</li>
              <li>Leaky gut</li>
              <li>Mold Illness (CIRS)</li>
              <li>Mycotoxicity</li>
              <li>Oral thrush</li>
              <li>Pancreatic insufficiency</li>
              <li>Parasites</li>
              <li>SIBO, SIFO & LIBO</li>
              <li>Ulcerative colitis</li>
              <li>Vaginal thrush</li>
            </ul>
          </div>
        </div>

        {/* 2nd 3-Column Boxes */}
        <div className="flex flex-wrap md:flex-nowrap mt-24">
          <div className="border-e-1 border-dashed border-[#c1c1c1] flex-1/2 md:flex-1/3">
            <h2 className="text-sm md:text-4xl font-bold w-full md:w-10/12 h-[120px] md:h-[200px] sticky top-0 bg-gray-100 pt-10">
              Immune, Infections & Autoimmunity
            </h2>
            <ul className="mt-32">
              <li>Acid reflux</li>
              <li>Bacterial vaginosis</li>
              <li>Blastocystis</li>
              <li>Candida</li>
              <li>Clostridium difficile</li>
              <li>Coeliac disease</li>
              <li>Constipation</li>
              <li>Crohn&apos;s disease</li>
              <li>Diarrhoea</li>
              <li>Diverticulitis</li>
              <li>Entamoeba</li>
              <li>Gallbladder removal</li>
              <li>Gastritis (Chronic)</li>
              <li>GERD</li>
              <li>Gilbert&apos;s syndrome</li>
              <li>Gingivitis</li>
              <li>Halitosis</li>
              <li>H. pylori</li>
              <li>Hypochlorhydria</li>
              <li>IBD</li>
              <li>IBS</li>
              <li>Leaky gut</li>
              <li>Mold Illness (CIRS)</li>
              <li>Mycotoxicity</li>
              <li>Oral thrush</li>
              <li>Pancreatic insufficiency</li>
              <li>Parasites</li>
              <li>SIBO, SIFO & LIBO</li>
              <li>Ulcerative colitis</li>
              <li>Vaginal thrush</li>
            </ul>
          </div>
          <div className="border-e-1 border-dashed border-[#c1c1c1] flex-1/2 md:flex-1/3 ps-8">
            <h2 className="text-sm md:text-4xl font-bold w-full md:w-10/12 h-[120px] md:h-[200px] sticky top-0 bg-gray-100 pt-10">
              Metabolism, Detox & Chronic Disease
            </h2>
            <ul className="mt-32">
              <li>Acid reflux</li>
              <li>Bacterial vaginosis</li>
              <li>Blastocystis</li>
              <li>Candida</li>
              <li>Clostridium difficile</li>
              <li>Coeliac disease</li>
              <li>Constipation</li>
              <li>Crohn&apos;s disease</li>
              <li>Diarrhoea</li>
              <li>Diverticulitis</li>
              <li>Entamoeba</li>
              <li>Gallbladder removal</li>
              <li>Gastritis (Chronic)</li>
              <li>GERD</li>
              <li>Gilbert&apos;s syndrome</li>
              <li>Gingivitis</li>
              <li>Halitosis</li>
              <li>H. pylori</li>
              <li>Hypochlorhydria</li>
              <li>IBD</li>
              <li>IBS</li>
              <li>Leaky gut</li>
              <li>Mold Illness (CIRS)</li>
              <li>Mycotoxicity</li>
              <li>Oral thrush</li>
              <li>Pancreatic insufficiency</li>
              <li>Parasites</li>
              <li>SIBO, SIFO & LIBO</li>
              <li>Ulcerative colitis</li>
              <li>Vaginal thrush</li>
            </ul>
          </div>
          <div className="border-e-1 border-dashed border-[#c1c1c1] flex-1/2 md:flex-1/3 ps-8">
            <h2 className="text-sm md:text-4xl font-bold w-full md:w-10/12 h-[120px] md:h-[200px] sticky top-0 bg-gray-100 pt-10">
              Dermatological Health
            </h2>
            <ul className="mt-32">
              <li>Acid reflux</li>
              <li>Bacterial vaginosis</li>
              <li>Blastocystis</li>
              <li>Candida</li>
              <li>Clostridium difficile</li>
              <li>Coeliac disease</li>
              <li>Constipation</li>
              <li>Crohn&apos;s disease</li>
              <li>Diarrhoea</li>
              <li>Diverticulitis</li>
              <li>Entamoeba</li>
              <li>Gallbladder removal</li>
              <li>Gastritis (Chronic)</li>
              <li>GERD</li>
              <li>Gilbert&apos;s syndrome</li>
              <li>Gingivitis</li>
              <li>Halitosis</li>
              <li>H. pylori</li>
              <li>Hypochlorhydria</li>
              <li>IBD</li>
              <li>IBS</li>
              <li>Leaky gut</li>
              <li>Mold Illness (CIRS)</li>
              <li>Mycotoxicity</li>
              <li>Oral thrush</li>
              <li>Pancreatic insufficiency</li>
              <li>Parasites</li>
              <li>SIBO, SIFO & LIBO</li>
              <li>Ulcerative colitis</li>
              <li>Vaginal thrush</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
