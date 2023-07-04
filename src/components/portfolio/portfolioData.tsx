import { StaticImageData } from "next/image";

import lostCitiesImage from "../../images/portfolio/lost-cities.jpg";
import huluCloneImage from "../../images/portfolio/hulu-clone.png";
import nomadikLivingImage from "../../images/portfolio/nomadik-living.png";
// import porfolioImage3 from "../../images/portfolio/portfolio-3.jpg";
// import porfolioImage4 from "../../images/portfolio/portfolio-4.jpg";
// import porfolioImage5 from "../../images/portfolio/portfolio-5.jpg";
// import porfolioImage6 from "../../images/portfolio/portfolio-6.jpg";
// import porfolioImage7 from "../../images/portfolio/portfolio-7.jpg";
// import porfolioImage8 from "../../images/portfolio/portfolio-8.jpg";
// import porfolioImage9 from "../../images/portfolio/portfolio-9.jpg";
// import porfolioImage10 from "../../images/portfolio/portfolio-10.jpg";
// import porfolioImage11 from "../../images/portfolio/portfolio-11.jpg";

export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Housing Market Website",
    description:
      "Housing Market website. I implemented the Stripe payment processing on the backend",
    url: "https://timbaker.me",
    image: nomadikLivingImage,
  },
  {
    title: "Lost Cities Scoring Calculator",
    description: 'A scoring calculator for the board game "Lost Cities"',
    url: "https://lost-cities-scoring.vercel.app/",
    image: lostCitiesImage,
  },
  {
    title: "Hulu Clone",
    description: "A Frontend clone of the base hulu website. Fetches data from tmdb",
    url: "https://mgamboa-hulu-clone.vercel.app/",
    image: huluCloneImage,
  },
  // {
  //   title: "Project title 4",
  //   description: "Give a short description of your project here.",
  //   url: "https://timbaker.me",
  //   image: porfolioImage4,
  // },
  // {
  //   title: "Project title 5",
  //   description: "Give a short description of your project here.",
  //   url: "https://timbaker.me",
  //   image: porfolioImage5,
  // },
  // {
  //   title: "Project title 6",
  //   description: "Give a short description of your project here.",
  //   url: "https://timbaker.me",
  //   image: porfolioImage6,
  // },
  // {
  //   title: "Project title 7",
  //   description: "Give a short description of your project here.",
  //   url: "https://timbaker.me",
  //   image: porfolioImage7,
  // },
  // {
  //   title: "Project title 8",
  //   description: "Give a short description of your project here.",
  //   url: "https://timbaker.me",
  //   image: porfolioImage8,
  // },
  // {
  //   title: "Project title 9",
  //   description: "Give a short description of your project here.",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "Project title 10",
  //   description: "Give a short description of your project here.",
  //   url: "https://timbaker.me",
  //   image: porfolioImage10,
  // },
  // {
  //   title: "Project title 11",
  //   description: "Give a short description of your project here.",
  //   url: "https://timbaker.me",
  //   image: porfolioImage11,
  // },
];
