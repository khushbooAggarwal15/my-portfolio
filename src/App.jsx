import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

import "./styles/components/app.sass";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <div id="portfolio">
        <h1>Khushboo Aggarwal</h1>
        <Sidebar />
        <MainContent />
      </div>
      <div className="project-content">
        <Projects />
      </div>
    </>
  );
}

export default App;
