import drums from "../../img/projects/drum-machine.png";
import calculator from "../../img/projects/calculator.png";
import markdownPreviewer from "../../img/projects/markdown-previewer.png";
import pomodoroClock from "../../img/projects/pomodoro-clock.png";
import surveyForm from "../../img/projects/survey-form.png";
import barchart from "../../img/projects/bar-chart.png";
import scatterPlot from "../../img/projects/scatterplot.png";

const projectsData = [
  {
    name: "Drum Machine",
    description: "Click the buttons or the press the keys to make some noise!",
    url: "https://mgamboa-drum-machine.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fcc-drum-machine",
    imageLink: drums,
    technologies: ["html", "css", "javascript", "react"],
  },
  {
    name: "Calculator",
    description:
      "A general functioning calculator. Works on click or on keypress",
    url: "https://mgamboa-calculator.netlify.app/",
    githubLink: "https://github.com/mhgamboa/javascript-calculator",
    imageLink: calculator,
    technologies: ["html", "css", "javascript", "react"],
  },
  {
    name: "Markdown Previewer",
    description: "Renders typed text as a README.md",
    url: "https://mgamboa-markdown-previewer.netlify.app/",
    githubLink: "https://github.com/mhgamboa/markdown-previewer",
    imageLink: markdownPreviewer,
    technologies: ["html", "css", "javascript", "react", "tailwindcss"],
  },
  {
    name: "Pomodoro Clock",
    description: "A little Timer to keep you studying.",
    url: "https://mgamboa-pomodoro-clock.netlify.app/",
    githubLink: "https://github.com/mhgamboa/pomodoro-clock",
    imageLink: pomodoroClock,
    technologies: ["html", "css", "javascript", "react", "tailwindcss"],
  },
  {
    name: "Bar Chart",
    description: "A simple bar chart made with D3",
    url: "https://mgamboa-bar-chart.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fcc-d3-bar-chart",
    imageLink: barchart,
    technologies: ["html", "css", "javascript", "d3"],
  },
  {
    name: "Scatterplot Chart",
    description: "A simple scatterplot chart made with D3",
    url: "https://mgamboa-scatterplot.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fcc-scatterplot-graph",
    imageLink: scatterPlot,
    technologies: ["html", "css", "javascript", "d3"],
  },
  // {
  //   name: "",
  //   description: "",
  //   url: "",
  //   githubLink: "",
  //   imageLink: "",
  //       technologies: ["html", "css", "javascript", "react", "d3", "tailwindcss"],
  // },
  {
    name: "Survey Form",
    description: "A simple Survey form. Made with only HTML & CSS",
    url: "https://mgamboa-survey-form.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fccSurvey",
    imageLink: surveyForm,
    technologies: ["html", "css"],
  },
];

export default projectsData;
