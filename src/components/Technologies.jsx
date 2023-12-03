import {
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiStyledcomponents,
  SiCss3,
  SiGit,
  SiCypress,
  SiFirebase,
  SiVercel,
  SiRedux,
} from "react-icons/si";

import "../styles/components/technologies.sass";

const stacks = [
  { id: "html", name: "HTML", icon: <SiHtml5 /> },
  { id: "css", name: "CSS", icon: <SiCss3 /> },
  { id: "typescript", name: "TYPESCRIPT", icon: <SiTypescript /> },
  { id: "javascript", name: "JAVASCRIPT", icon: <SiJavascript /> },
  { id: "reactjs", name: "REACT.JS", icon: <SiReact /> },
  { id: "nodejs", name: "Next.JS", icon: <SiNextdotjs /> },
  { id: "sass", name: "SASS", icon: <SiSass /> },
  { id: "cypress", name: "Cypress", icon: <SiCypress /> },
  { id: "firebase", name: "Firebase", icon: <SiFirebase /> },
  { id: "vercel", name: "Vercel", icon: <SiVercel /> },
  { id: "redux", name: "Redux", icon: <SiRedux /> },
  {
    id: "styledcomponents",
    name: "STYLED-COMPONENTS",
    icon: <SiStyledcomponents />,
  },

  { id: "git", name: "GIT", icon: <SiGit /> },
];

export const Technologies = () => {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {stacks.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
