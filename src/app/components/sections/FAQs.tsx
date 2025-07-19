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
    <div className="py-8 bg-[rgb(203,200,196)] w-full flex px-8 pb-8">
      <div className="w-6/12 h-screen sticky top-20 pe-8">
        <Image
          src="/images/faq_image.jpeg"
          width={400}
          height={400}
          alt="FAQs Image"
          className="w-full rounded"
        />
      </div>
      <div className="w-6/12">
        <h2 className="text-5xl font-bold my-8">Quick Answers </h2>
        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="border-t-1 border-black border-dashed py-4"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && <p className="mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
