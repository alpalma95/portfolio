import ProjectsContent from "../components/projects/ProjectsContent.jsx";

import "../styles/components/_section.scss";
import "../styles/pages/_projects.scss";
import "../styles/pages/_about.scss";

const Projects = ({ active, setActiveSection, setShowMenu }) => {
  return (
    <section
      className={`projects section ${
        active ? "section--active" : "section--inactive"
      }`}
      onClick={() => {
        setActiveSection("projects");
        setShowMenu(true);
      }}
    >
      {active ? <></> : <h1>Projects</h1>}{" "}
      {active ? <ProjectsContent /> : <></>}
    </section>
  );
};

export default Projects;
