import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "./button";
import { SUBJECT_DATA } from "@/config/constants";
import cn from "@/lib/utils";

interface SocialMediaButtonsProps {
  className?: string;
  buttonClassName?: string;
}

const SocialMediaButtons = ({
  className = "",
  buttonClassName = "",
}: SocialMediaButtonsProps) => {
  const { social_media_links } = SUBJECT_DATA;

  return (
    <div
      className={cn(
        "flex max-w-full items-center justify-between gap-8",
        className
      )}
    >
      <Button
        as="a"
        href={social_media_links.github}
        target="_blank"
        rel="noreferrer"
        icon
        buttonClassName={buttonClassName}
      >
        <FaGithub />
      </Button>
      <Button
        as="a"
        href={social_media_links.linkedin}
        target="_blank"
        rel="noreferrer"
        icon
        buttonClassName={buttonClassName}
      >
        <FaLinkedinIn />
      </Button>
      <Button
        icon
        onClick={() =>
          (window.location.href = `mailto:${social_media_links.email}`)
        }
        buttonClassName={buttonClassName}
      >
        <AiOutlineMail />
      </Button>
    </div>
  );
};

export default SocialMediaButtons;
