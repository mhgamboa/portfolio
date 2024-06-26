import classNames from "classnames";
import Image from "next/image";
import { FC, memo } from "react";

import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

// import profileImageSrc from "../images/profilepic.jpg";
import profileImageSrc from "../images/profile.png";

const aboutItems = [
  { label: "Location", text: "Utah, USA", Icon: MapIcon },
  { label: "Age", text: "30", Icon: CalendarIcon },
  { label: "Nationality", text: "United States", Icon: FlagIcon },
  { label: "Interests", text: "Board games/Nerdy things", Icon: SparklesIcon },
  { label: "Education", text: "Brigham Young University", Icon: AcademicCapIcon },
  { label: "Employment", text: "Freelance Development", Icon: BuildingOffice2Icon },
];

const About: FC = memo(() => {
  return (
    <section className="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8" id="about">
      {/* sectionId="about" */}
      <div className="mx-auto max-w-screen-lg">
        <div
          className={classNames("grid grid-cols-1 gap-y-4", {
            "md:grid-cols-4": !!profileImageSrc,
          })}
        >
          {!!profileImageSrc && (
            <div className="col-span-1 flex justify-center md:justify-start">
              <div className="relative h-26 w-26 overflow-hidden rounded-xl md:h-38 md:w-36">
                <Image
                  alt="about-me-image"
                  className="h-full w-full object-cover"
                  src={profileImageSrc}
                />
              </div>
            </div>
          )}
          <div
            className={classNames("col-span-1 flex flex-col gap-y-6", {
              "md:col-span-3": !!profileImageSrc,
            })}
          >
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">About me</h2>
              <p className="prose prose-sm text-gray-300 sm:prose-base">
                Hi I&apos;m Marcus, and I&apos;m a self-taught software engineer. I use
                Typescript/Javascript, with a special emphasis in Next.js to create custom web
                apps. I also have a{" "}
                <a
                  className="text-blue-500"
                  href="https://commtech.byu.edu/noauth/degreeVerify/?dvid=U9ZAVT4D"
                  target="_blank"
                >
                  BS in Entrepreneurship
                </a>{" "}
                that has helped me develop a unique perspective in both problem solving and
                communication.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutItems.map(({ label, text, Icon }, idx) => (
                <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                  {Icon && <Icon className="h-5 w-5 text-white" />}
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className=" text-sm text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
