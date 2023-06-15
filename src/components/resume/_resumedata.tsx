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
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "French",
        level: 4,
      },
      {
        name: "Spanish",
        level: 3,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "Typescript",
        level: 7,
      },
      {
        name: "GraphQL",
        level: 6,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 8,
      },
      {
        name: "Rust",
        level: 5,
      },
      {
        name: "Golang",
        level: 4,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "React Native",
        level: 9,
      },
      {
        name: "Flutter",
        level: 4,
      },
      {
        name: "Swift",
        level: 3,
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
    date: "April 2007",
    location: "Clown college",
    title: "Masters in Beer tasting",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills you have
        acquired etc.
      </p>
    ),
  },
  {
    date: "March 2003",
    location: "School of Business",
    title: "What did you study 101",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills you have
        acquired etc.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "March 2010 - Present",
    location: "Awesome Development Company",
    title: "Senior UX Engineer",
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been
        working with, and anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: "March 2007 - February 2010",
    location: "Garage Startup Studio",
    title: "Junior bug fixer",
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been
        working with, and anything else that would be useful for an employer to know.
      </p>
    ),
  },
];
