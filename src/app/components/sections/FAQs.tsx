"use client";

import Image from "next/image";
import { useState } from "react";
import { FAQs } from "@/app/constants/FAQs";

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white md:bg-[rgb(203,200,196)] px-4 md:px-8 py-8 flex flex-col md:flex-row gap-10">
      {/* Left Side (Image) */}
      <div className="w-full md:w-6/12 md:sticky md:h-screen md:top-20">
        <Image
          src="/images/faq_image.jpeg"
          width={600}
          height={600}
          alt="FAQs Image"
          className="w-full h-auto rounded object-cover"
        />
      </div>

      {/* Right Side (FAQs) */}
      <div className="w-full md:w-6/12">
        <h2 className="text-3xl md:text-5xl font-bold my-6">Quick Answers</h2>
        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-black border-dashed pt-4"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-xl font-bold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-base text-gray-800">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
