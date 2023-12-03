import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/khushbooaggarwal15/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/khushbooAggarwal15",
  },
  {
    name: "instagram",
    icon: <FaGitlab />,
    link: "https://gitlab.com/aggarwal.khushi1501",
  },
];

export const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          target="_blank"
          href={network.link}
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};
