import Avatar from "../img/photo.jpeg";
import { Link } from "react-router-dom";

import { SiJavascript, SiReact, SiSass } from "react-icons/si";

import "../styles/components/sidebar.sass";

import CV from "../../public/Khushboo_cv.pdf";

import { SocialNetworks } from "./SocialNetworks";
import { InformationContainer } from "./InformationContainer";

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Khushboo Aggarwal" />
      <p className="title">Software Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <Link to={CV} target="_blank" className="btn" download>
        Download Resume
      </Link>
    </aside>
  );
};
