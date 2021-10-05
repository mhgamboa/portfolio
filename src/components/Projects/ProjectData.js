import drumImage from "../../img/projects/drum-machine.png";
import calculatorImage from "../../img/projects/calculator.png";
import MarkdownImage from "../../img/projects/markdown-previewer.png";
import PomodoroClockImage from "../../img/projects/pomodoro-clock.png";
import SurveyFormImage from "../../img/projects/survey-form.png";

const projectsData = [
  {
    name: "Drum Machine",
    description: "Click the buttons or the press the keys to make some noise!",
    url: "https://mgamboa-drum-machine.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fcc-drum-machine",
    imageLink: drumImage,
    technologies: ["html", "css", "javascript", "react"],
  },
  {
    name: "Calculator",
    description:
      "A general functioning calculator. Works on click or on keypress",
    url: "https://mgamboa-calculator.netlify.app/",
    githubLink: "https://github.com/mhgamboa/javascript-calculator",
    imageLink: calculatorImage,
    technologies: ["html", "css", "javascript", "react"],
  },
  {
    name: "Markdown Previewer",
    description: "Renders typed text as a README.md",
    url: "https://mgamboa-markdown-previewer.netlify.app/",
    githubLink: "https://github.com/mhgamboa/markdown-previewer",
    imageLink: MarkdownImage,
    technologies: ["html", "css", "javascript", "react", "tailwindcss"],
  },
  {
    name: "Pomodoro Clock",
    description: "A little Timer to keep you studying.",
    url: "https://mgamboa-pomodoro-clock.netlify.app/",
    githubLink: "https://github.com/mhgamboa/pomodoro-clock",
    imageLink: PomodoroClockImage,
    technologies: ["html", "css", "javascript", "react", "tailwindcss"],
  },
  {
    name: "Survey Form",
    description: "A simple Survey form. Made with only HTML & CSS",
    url: "https://mgamboa-survey-form.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fccSurvey",
    imageLink: SurveyFormImage,
    technologies: ["html", "css"],
  },
  // {
  //   name: "",
  //   description: "",
  //   url: "",
  //   githubLink: "",
  //   imageLink: "",
  //       technologies: ["html", "css", "javascript", "react", "D3", "tailwindcss"],
  // },
];

export default projectsData;
