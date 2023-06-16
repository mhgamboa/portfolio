import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

// import profilepic from "../images/profilepic.jpg";
// import testimonialImage from "../images/testimonial.webp";
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
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: "John Doe",
//       text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
//       image:
//         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
//     },
//     {
//       name: "Jane Doe",
//       text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
//       image:
//         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
//     },
//     {
//       name: "Someone else",
//       text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
//       image:
//         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
//     },
//   ],
// };

// /**
//  * Contact section
//  */

// export const contact: ContactSection = {
//   headerText: "Get in touch.",
//   description:
//     "Here is a good spot for a message to your readers to let them know how best to reach out to you.",
//   items: [
//     {
//       type: ContactType.Email,
//       text: "reachout@timbaker.me",
//       href: "mailto:reachout@timbaker.me",
//     },
//     {
//       type: ContactType.Location,
//       text: "Victoria BC, Canada",
//       href: "https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z",
//     },
//     {
//       type: ContactType.Instagram,
//       text: "@tbakerx",
//       href: "https://www.instagram.com/tbakerx/",
//     },
//     {
//       type: ContactType.Github,
//       text: "tbakerx",
//       href: "https://github.com/tbakerx",
//     },
//   ],
// };

// /**
//  * Social items
//  */
