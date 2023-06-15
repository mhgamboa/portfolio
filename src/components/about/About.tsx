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

import profileImageSrc from "../../images/profilepic.jpg";

const aboutItems = [
  { label: "Location", text: "Utah, USA", Icon: MapIcon },
  { label: "Age", text: "29", Icon: CalendarIcon },
  { label: "Nationality", text: "United States", Icon: FlagIcon },
  { label: "Interests", text: "Chess, Comics, D&D", Icon: SparklesIcon },
  { label: "Education", text: "Brigham Young University", Icon: AcademicCapIcon },
  { label: "Employment", text: "Nōmadik Living", Icon: BuildingOffice2Icon },
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
              <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
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
                Use this bio section as your way of describing yourself and saying what you do,
                what technologies you like to use or feel most comfortable with, describing your
                personality, or whatever else you feel like throwing in.
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
