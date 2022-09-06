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
      <h1>Projects</h1>
    </section>
  );
};

export default Projects;
