const PROJECTS = [
  {
    title: "WPT Play",
    name: "wptPlay",
    link: "https://play.wptgo.com/",
    image: "/images/projects/wptPlay.png",
  },
  {
    title: "Casino CMS",
    name: "casinoCms",
    link: "https://docs.google.com/document/d/10PfbbCIEF0SC020m3R_vBd6C0EKNwCbul2E_X1dXxtw/",
    image: "/images/projects/casinoCms.png",
  },
  {
    title: "Casino Lobby",
    name: "casinoLobby",
    link: "https://casino-lobby-dev.a5labsapp.co/",
    image: "/images/projects/casinoLobby.png",
  },
  {
    title: "WPT Global",
    name: "wptGlobal",
    link: "https://wptglobal.com",
    image: "/images/projects/wptGlobal.png",
  },
  {
    title: "WPTG CMS",
    name: "wptgCms",
    link: "https://docs.google.com/document/d/1QyWUGF8XigvNtZ_bsidATKtW4VsrUUhNhj3JsCe8F3w",
    image: "/images/projects/wptgCms.png",
  },
  {
    title: "WPTG Promo",
    name: "wptgPromo",
    link: "https://app-promo.wptglobal.com/",
    image: "/images/projects/wptgPromo.png",
  },
  {
    title: "World Poker Tour",
    name: "wpt",
    link: "https://www.worldpokertour.com",
    image: "/images/projects/wpt.png",
  },
  {
    title: "WPT CMS",
    name: "wptCms",
    link: "https://docs.google.com/document/d/1RKs9ZwEU126C4xaR1msbcbfrAhO3HX0LW7Uv7bhi-oA/",
    image: "/images/projects/wptCms.png",
  },
  {
    title: "Wethio NFT",
    name: "wethioNft",
    link: "https://nft.wethiox.io/",
    image: "/images/projects/collegeDisha.png",
  },
  {
    title: "Distinct",
    name: "distinct",
    link: "https://distinct.so",
    image: "/images/projects/distinct.png",
  },
  {
    title: "GamaVrs",
    name: "gamavers",
    link: "https://gamavrs.com",
    image: "/images/projects/gamaVrs.png",
  },
  {
    title: "Moments NFT",
    name: "momentNft",
    link: "https://gamavrs.com/moments-auction/about",
    image: "/images/projects/momentNft.png",
  },
];

const SKILLS = [
  { name: "Javascript", value: "/images/techStack/Javascript.svg" },
  { name: "Typescript", value: "/images/techStack/Typescript.svg" },
  { name: "ReactJS", value: "/images/techStack/ReactJS.svg" },
  { name: "NextJS", value: "/images/techStack/NextJS.svg" },
  { name: "Redux", value: "/images/techStack/Redux.svg" },
  { name: "Tailwind CSS", value: "/images/techStack/TailwindCSS.svg" },
  { name: "VueJs", value: "/images/techStack/Vue.svg" },
  { name: "Sass", value: "/images/techStack/Sass.svg" },
  { name: "Bootstrap", value: "/images/techStack/Bootstrap.svg" },
  { name: "JQuery", value: "/images/techStack/Jquery.svg" },
  { name: "HTML", value: "/images/techStack/HTML5.svg" },
  { name: "CSS", value: "/images/techStack/CSS3.svg" },
];

export const SUBJECT_DATA = {
  name: "Siddharth Badola",
  image: "/images/dev-1.png",
  address: "",
  mobile_number: "8447751658",
  email_id: "siddharth.badola97@gmail.com",
  resume: "/files/siddharth_badola_resume.pdf",
  social_media_links: {
    github: "https://github.com/siddharthBadola",
    linkedin: "https://www.linkedin.com/in/siddharth-badola-097230210/",
    email: "siddharth.badola97@gmail.com",
    buyMeCoffee: "",
  },
  projects: PROJECTS,
  Skills: SKILLS,
} as const;
