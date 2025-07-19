"use client";
import React from "react";

interface ChoosePlanData {
  heading: string;
  subHeading: string;
  bgColor?: string;
  tableContent?: { tHeading: string; tContent: string }[];
}

export default function ChoosePlanCard({
  heading,
  subHeading,
  bgColor = "white",
  tableContent,
}: ChoosePlanData) {
  return (
    <div className={`main w-full h-full p-8 rounded-xl bg-${bgColor}`}>
      {/* Head Area */}
      <div className="head flex justify-between">
        <div className="headings">
          <h2 className="heading text-2xl font-bold">{heading}</h2>
          <h3 className="sub-heading">{subHeading}</h3>
        </div>
        <div className="dot h-[16] w-[16] bg-black rounded-full"></div>
      </div>

      {/* Content Fields */}
      <div className="w-full mt-8">
        <table border={1} className="text-left w-full">
          {tableContent?.map((data, key) => {
            return (
              <React.Fragment key={key}>
                <thead className="border-gray-300 border-t-1 border-dashed">
                  <tr>
                    <th className="pt-3">{data.tHeading}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-600 pb-3 border-gray-300 border-b-1 border-dashed">{data.tContent}</td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
      </div>
    </div>
  );
}
