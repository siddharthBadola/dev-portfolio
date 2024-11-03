import Image from "next/image";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { SUBJECT_DATA } from "@/config/constants";
import SectionTitle from "./sectionTitle";
import SocialMediaButtons from "./socialMediaButtons";
import SectionLayout from "./sectionLayout";
import { SectionProps } from "@/lib/types";

const Home = (props: SectionProps) => {
  return (
    <SectionLayout
      className="mx-auto grid h-full min-h-screen w-full grid-cols-1 items-center justify-center gap-16 p-3 lg:grid-cols-2"
      {...props}
    >
      <div className="order-2 flex flex-col gap-6 lg:order-1">
        <SectionTitle prepend={false} append={false}>
          Hi, I am {SUBJECT_DATA.name}
        </SectionTitle>
        <h2 className="py-3 text-3xl font-bold uppercase">
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("A Frontend Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I love to code.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I love to learn new technologies.")

                .start();
            }}
          />
        </h2>
        <p className="text-lg">
          I am a proficient Senior Frontend Developer possessing substantial
          expertise in ReactJS, NextJS, along with a strong command of Vanilla
          JavaScript, TypeScript, HTML, and CSS. My dedication lies in
          consistently delivering top-notch code while remaining well-informed
          about the most recent advancements in front-end development practices.
        </p>
        <SocialMediaButtons className="m-auto mt-16" />
      </div>
      <div className="order-1 my-8 lg:order-2">
        <div className="bevel-clip mx-auto flex w-fit items-center justify-center bg-primary bg-opacity-20 p-3">
          <div className="bevel-clip -translate-y-2 translate-x-2 overflow-hidden bg-charcoal bg-opacity-80">
            <Image
              src={SUBJECT_DATA.image}
              alt="profile"
              draggable={false}
              width={452}
              height={467}
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Home;
