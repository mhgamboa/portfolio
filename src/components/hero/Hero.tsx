import { memo } from "react";
import { ArrowDownTrayIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";

import heroImage from "../../images/header-background.webp";
import Socials from "../Socials";
import { SectionId } from "../../data/data";

const actions = [
  // {
  //   href: "/assets/resume.pdf",
  //   text: "Resume",
  //   primary: true,
  //   Icon: ArrowDownTrayIcon,
  // },
  {
    href: `#${SectionId.Contact}`,
    text: "Contact",
    primary: true,
  },
];

const Hero = memo(() => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      // sectionId={SectionId.Hero}
      id="hero"
    >
      <Image
        alt="background-image"
        className="absolute z-0 h-full w-full object-cover"
        placeholder="blur"
        priority
        src={heroImage}
      />
      <div className="z-10 max-w-screen-lg px-4 lg:px-0">
        <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/20 p-6 text-center shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
            I&apos;m Marcus Gamboa.
          </h1>
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            I&apos;m a Utah based{" "}
            <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently
            working at <strong className="text-stone-100">Nomadik Living</strong> helping build a
            modern, mobile-first, Housing Rental Site.
          </p>
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            In my free time time, you can catch me learning{" "}
            <strong className="text-stone-100">Chess</strong>, reading{" "}
            <strong className="text-stone-100">Webtoons</strong>, or playing{" "}
            <strong className="text-stone-100">Dungeons & Dragons</strong>.
          </p>
          <div className="flex gap-x-4 text-neutral-100">
            <Socials />
          </div>
          <div className="flex w-full justify-center gap-x-4">
            {actions.map(({ href, text, primary }) => (
              <a
                className={classNames(
                  "flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base",
                  primary ? "border-orange-500 ring-orange-500" : "border-white ring-white"
                )}
                href={href}
                key={text}
              >
                {text}
                {/* {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />} */}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <a
          className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
          href="#about"
        >
          <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
        </a>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
