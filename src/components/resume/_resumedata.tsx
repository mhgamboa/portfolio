/* Skills */
export interface Skill {
  name: string;
  level: number;
  max?: number;
}
export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export const skills: SkillGroup[] = [
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 8,
      },
      {
        name: "Typescript",
        level: 7,
      },
      {
        name: "Tailwindcss",
        level: 7,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Next.js",
        level: 7,
      },
      {
        name: "Node.js/Express",
        level: 7,
      },
      // {
      //   name: "Golang",
      //   level: 4,
      // },
    ],
  },
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "Spanish",
        level: 6,
      },
    ],
  },
];

/* Education/Experience */

export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: JSX.Element;
}

export const education: TimelineItem[] = [
  {
    date: "Aug 2019",
    location: "Brigham Young University – Marriott School of Management",
    title: "Bachelor of Science in Entrepreneurship",
    content: (
      <ul className="list-disc">
        <li>GPA 3.57</li>
        <li>
          <a
            href="https://marriott.byu.edu/news/article?id=1495"
            className="text-blue-800"
            target="_blank"
          >
            Top 5 nationally ranked program
          </a>
        </li>
      </ul>
    ),
  },
  // {
  //   date: "March 2003",
  //   location: "School of Business",
  //   title: "What did you study 101",
  //   content: (
  //     <p>
  //       Describe your experience at school, what you learned, what useful skills you have
  //       acquired etc.
  //     </p>
  //   ),
  // },
];

export const experience: TimelineItem[] = [
  {
    date: "March 2022 - Present",
    location: "Nōmadik Living",
    title: "Sofware Engineer (Full Stack)",
    content: (
      <ul className="list-disc">
        <li>Implement Stripe payment system and API calls</li>
        <li>Utilize Postman to properly test and implement all API calls</li>
        <li>Automate client email reminders through Heroku cron tasks with Node.js/express</li>
        <li>Manage UX/UI designer in implementation of mobile & desktop designs</li>
      </ul>
    ),
  },
  // {
  //   date: "March 2007 - February 2010",
  //   location: "Garage Startup Studio",
  //   title: "Junior bug fixer",
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been
  //       working with, and anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];
