const About = ({ active, setActiveSection, setShowMenu }) => {
  return (
    <div
      className={`about section ${
        active ? "section--active" : "section--inactive"
      }`}
      onClick={() => {
        setActiveSection("about");
        setShowMenu(true);
      }}
    >
      <h1>About</h1>
    </div>
  );
};

export default About;
