import { SUBJECT_DATA } from "./constants";

export const SECTIONS = {
  // HOME: "/home",
  // ABOUT: "/about",
  // PROJECTS: "/projects",
  // SKILLS: "/skills",
  CONTACT: "/contact",
};

export const LINKS: {
  name: string;
  href: string;
  options?: Record<string, string>;
}[] = [
  // {
  //   name: "Home",
  //   href: SECTIONS.HOME,
  // },
  // {
  //   name: "About",
  //   href: SECTIONS.ABOUT,
  // },
  // {
  //   name: "Projects",
  //   href: SECTIONS.PROJECTS,
  // },
  {
    name: "Resume",
    href: SUBJECT_DATA.resume,
    options: {
      target: "_blank",
      rel: "noreferrer",
    },
  },
  // {
  //   name: "Skills",
  //   href: SECTIONS.SKILLS, // Refer to skills section
  // },
  {
    name: "Contact",
    href: SECTIONS.CONTACT,
  },
];
