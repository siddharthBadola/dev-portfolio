import cn from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  prepend?: boolean;
  append?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
  prepend = true,
  append = true,
}) => {
  return (
    <h2
      className={cn(
        "mb-4 flex items-center text-3xl font-semibold text-white sm:mb-6 sm:text-5xl md:mb-8 ",
        {
          "before:mr-2 before:text-primary before:content-['#']": prepend,
          "after:ml-4 after:inline-flex after:h-1 after:w-40 after:bg-primary":
            append,
        },
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
