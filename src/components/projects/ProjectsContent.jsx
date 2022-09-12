import ProjectCard from "./ProjectCard.jsx";

import pickMeWeb from "../../assets/pick-me-web.png";
import pickMeMobile from "../../assets/pick-me-mobile.png";
import todoWeb from "../../assets/todo-web.png";
import todoMobile from "../../assets/todo-mobile.png";
import portfolioWeb from "../../assets/portfolio-web.png";
import portfolioMobile from "../../assets/portfolio-mobile.png";
import Img from "../../components/projects/Img.jsx";
import Socials from "../../components/projects/Socials.jsx";

const ProjectsContent = () => {
  return (
    <>
      <div className="projects-content">
        <h1 className="about__h1">
          {" "}
          <span className="about__h1__name">Álvaro Palma Mancheño</span>
          <span className="about__h1__position">Full Stack</span> Developer
        </h1>
        <div className="about__socials">
          <Img />
          <Socials />
        </div>
      </div>
      <div className="title-wrapper">
        <h2 className="projects__h2 projects-subtitle">
          <span className="h2__span">My projects</span>
          Things that I'm proud of
        </h2>
      </div>

      <ProjectCard
        title="Pick Me App"
        img1={pickMeWeb}
        alt1="Preview on web of the Pick Me App project"
        img2={pickMeMobile}
        alt2="Preview on mobile of the Pick Me App project"
        liveLink="https://pickme-project.herokuapp.com/"
        ghLink="https://github.com/alpalma95/dont-waste-food"
        description="Web app aiming at reducing food waste"
        tech={["React", "Flask", "SQLAlchemy"]}
      />
      <ProjectCard
        title="Fancy Todo List"
        img1={todoWeb}
        alt1="Preview on web of the Fancy todo list project"
        img2={todoMobile}
        alt2="Preview on mobile of the Fancy todo list project"
        liveLink="https://fancy-todo-list.vercel.app/"
        ghLink="https://github.com/alpalma95/fancy-todo-front"
        description="Todo list with user authentication"
        tech={["React", "Node", "Express", "Mongoose"]}
      />
      <ProjectCard
        title="My Portfolio Site"
        img1={portfolioWeb}
        alt1="Preview on web of my portfolio site"
        img2={portfolioMobile}
        alt2="Preview on mobile of my portfolio site"
        liveLink="https://alpalma95.github.io/portfolio/"
        ghLink="https://github.com/alpalma95/portfolio/"
        description="Fully responsive and dynamic portfolio site"
        tech={["React", "Sass"]}
      />
    </>
  );
};

export default ProjectsContent;
