import AboutContent from "../components/about/AboutContent.jsx";

const About = ({ active, setActiveSection, setShowMenu }) => {
  return (
    <section
      className={`about section ${
        active ? "section--active" : "section--inactive"
      }`}
      onClick={() => {
        setActiveSection("about");
        setShowMenu(true);
      }}
    >
      {active ? <></> : <h1>About</h1>}
      {active ? <AboutContent /> : <></>}
    </section>
  );
};

export default About;
