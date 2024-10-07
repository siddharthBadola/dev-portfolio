import React from "react";
import ProjectCard from "./projectCard";
import SectionLayout from "./sectionLayout";
import { SectionProps } from "@/lib/types";
import { SUBJECT_DATA } from "@/config/constants";

const Projects = (props: SectionProps) => {
  return (
    <SectionLayout title="Projects" {...props}>
      <div className="grid w-full grid-cols-1 place-items-center gap-8 pb-2 pt-8 text-lg md:grid-cols-2 2xl:grid-cols-3">
        {SUBJECT_DATA.projects.map((item, idx) => (
          <ProjectCard key={idx} item={item} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Projects;
