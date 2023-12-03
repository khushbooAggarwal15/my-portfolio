import "../styles/components/maincontent.sass";

import { About } from "./About";
import { Technologies } from "./Technologies";
import { Experience } from "./experience";

export const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Technologies />
      <Experience />
    </main>
  );
};
