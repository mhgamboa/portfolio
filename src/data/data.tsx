import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

// import profilepic from "../images/profilepic.jpg";

import //   About,
//   ContactSection,
//   ContactType,
//   Hero,
//   HomepageMeta,
//   SkillGroup,
//   TestimonialSection,
//   TimelineItem,
"./dataDef";

// /**
//  * Page meta data
//  */
// export const homePageMeta: HomepageMeta = {
//   title: "React Resume Template",
//   description: "Example site built with Tim Baker's react resume template",
// };

// /**
//  * Section definition
//  */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

// /**
//  * About section
//  */

// /**
//  * Skills section
//  */

// /**
//  * Portfolio section
//  */

// /**
//  * Resume section -- TODO: Standardize resume contact format or offer MDX
//  */

// /**
//  * Testimonial section
//  */

// /**
//  * Contact section
//  */

// /**
//  * Social items
//  */
