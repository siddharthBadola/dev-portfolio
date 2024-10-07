import About from "@/components/about";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Slider from "@/components/slider";
import { SECTIONS } from "@/config/appConfig";

const SECTIONS_COMPONENTS = [
  // { path: SECTIONS.HOME, component: Home },
  // { path: SECTIONS.ABOUT, component: About },
  // { path: SECTIONS.SKILLS, component: Skills },
  // { path: SECTIONS.PROJECTS, component: Projects },
  { path: SECTIONS.CONTACT, component: Contact },
];

export default function MainPage() {
  return (
    <Slider>
      {SECTIONS_COMPONENTS?.map(
        ({ path, component: Component }) => (
          <Component key={path} id={path} />
        ),
        []
      )}
    </Slider>
  );
}
