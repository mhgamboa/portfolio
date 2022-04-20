import drums from "../../img/projects/drum-machine.png";
import calculator from "../../img/projects/calculator.png";
import markdownPreviewer from "../../img/projects/markdown-previewer.png";
import pomodoroClock from "../../img/projects/pomodoro-clock.png";
import surveyForm from "../../img/projects/survey-form.png";
import barchart from "../../img/projects/bar-chart.png";
import scatterPlot from "../../img/projects/scatterplot.png";
import treemap from "../../img/projects/treemap.png";
import heatMap from "../../img/projects/heat-map.png";
import chloropleth from "../../img/projects/chloropleth-map.png";
import todo from "../../img/projects/todo.png";
import fiodl from "../../img/projects/fiodl.png";

const projectsData = [
  {
    name: "Interest Comparison App",
    description: "Scrapes various websites, and visualizes the data",
    url: "https://fiodl.vercel.app/",
    githubLink: "https://github.com/mhgamboa/fiodl",
    imageLink: fiodl,
    technologies: ["mongodb", "express", "nextjs", "node", "tailwindcss"],
  },
  {
    name: "To Do App",
    description:
      "Complete Mern Stack App. Hashes passwords with bcrypt, and handles authentication via JSON WebTokens",
    url: "https://mgamboa-to-do.herokuapp.com/",
    githubLink: "https://github.com/mhgamboa/to-do-list",
    imageLink: todo,
    technologies: ["mongodb", "express", "react", "node", "bootstrap"],
  },
  {
    name: "Drum Machine",
    description: "Click the buttons or the press the keys to make some noise",
    url: "https://mgamboa-drum-machine.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fcc-drum-machine",
    imageLink: drums,
    technologies: ["html", "css", "javascript", "react"],
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
    name: "Calculator",
    description: "A general functioning calculator. Works on click or on keypress",
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
    description: "A little timer to keep you studying",
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
    name: "Treemap",
    description: "A simple treemap diagram made with D3",
    url: "https://mgamboa-treemap.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fcc-treemap-diagram",
    imageLink: treemap,
    technologies: ["html", "css", "javascript", "d3"],
  },
  {
    name: "Chloropleth Map",
    description: "A simple chloropleth map made with D3",
    url: "https://mgamboa-chloropleth-map.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fcc-chloropleth-map",
    imageLink: chloropleth,
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
  {
    name: "Heatmap",
    description: "A simple heatmap made with D3",
    url: "https://mgamboa-heat-map.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fcc-heat-map",
    imageLink: heatMap,
    technologies: ["html", "css", "javascript", "d3"],
  },
  {
    name: "Survey Form",
    description: "A simple survey form made using only HTML/CSS",
    url: "https://mgamboa-survey-form.netlify.app/",
    githubLink: "https://github.com/mhgamboa/fccSurvey",
    imageLink: surveyForm,
    technologies: ["html", "css"],
  },
];

export default projectsData;
