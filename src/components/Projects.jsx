import {
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiCss3,
  SiGit,
  SiNodedotjs,
  SiRedux,
  SiExpress,
  SiSass,
} from "react-icons/si";

import portfolio from "../img/portfolio.png";
import ecommerce from "../img/ecommerce.png";
import socialmedia from "../img/socialmedia.png";
import { ProjectCard } from "./ProjectCard";

import "../styles/components/projects.sass";

export const Projects = () => {
  const icons = [
    { id: "react", react: <SiReact /> },
    { id: "css3", css3: <SiCss3 /> },
    { id: "sass", sass: <SiSass /> },
    { id: "styledcomponents", styledcomponents: <SiStyledcomponents /> },
    { id: "git", git: <SiGit /> },
    { id: "express", express: <SiExpress /> },
    { id: "redux", redux: <SiRedux /> },
    { id: "nodejs", nodejs: <SiNodedotjs /> },
  ];

  return (
    <section id="projects-grid">
      <h2 id="subtitle">Projects</h2>

      <div className="projects-container">
        <ProjectCard
          img={portfolio}
          title="Portfolio"
          icons={icons.map((icon) => (
            <div key={icon.id}>
              {icon.sass}
              {icon.react}
            </div>
          ))}
          url="https://github.com/khushbooAggarwal15/React-project"
        />
        <ProjectCard
          img={ecommerce}
          title="Ecommerce Application"
          icons={icons.map((icon) => (
            <div key={icon.id}>
              {icon.css3}
              {icon.react}
            </div>
          ))}
          url="https://github.com/khushbooAggarwal15/React-project"
        />
        <ProjectCard
          img={socialmedia}
          title="Social Media Application"
          icons={icons.map((icon) => (
            <div key={icon.id}>
              {icon.react}
              {icon.nodejs}
              {icon.express}
            </div>
          ))}
          url="https://github.com/khushbooAggarwal15/MERN-APP"
        />
      </div>
    </section>
  );
};
