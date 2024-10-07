import React from "react";
import Image from "next/image";
import SectionLayout from "./sectionLayout";
import { SectionProps } from "@/lib/types";
import { SUBJECT_DATA } from "@/config/constants";

const Skills = (props: SectionProps) => {
  return (
    <SectionLayout title="Skills" className="text-justify" {...props}>
      <div className="flex flex-wrap items-center justify-around gap-8 py-2 text-lg">
        {SUBJECT_DATA.Skills.map((item, idx) => (
          <div
            className="flex min-h-[150px] w-[150px] md:min-h-[200px] md:w-[200px] flex-col items-center justify-center gap-8 border border-primary p-4 text-center shadow-card shadow-primary/30"
            key={idx}
          >
            <p className="whitespace-nowrap text-xl md:text-2xl font-medium">
              {item.name}
            </p>
            <div
              className={`relative bottom-0 top-0 h-20 w-20 ${
                item.name === "NextJS" && "rounded-full bg-white"
              }`}
            >
              <Image src={item.value} alt={item.name} fill className="z-10" />
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;
