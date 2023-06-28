import { StaticImageData } from "next/image";

import testimonialImage from "../../images/testimonial.webp";

export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string;
  name: string;
  text: string;
}

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "Kirk D.",
      text: "I knew I could ask Marcus to do whatever, and he could get it done.",
      image: "",
    },
    {
      name: "Prescott H.",
      text: "Marcus was invaluable to our company.",
      image: "",
    },
    {
      name: "Andrew N.",
      text: "Marcus is the kind of guy that just has it all together.",
      image: "",
    },
  ],
};
