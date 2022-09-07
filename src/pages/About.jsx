import AboutContent from "../components/about/AboutContent.jsx";
import "../styles/components/_section.scss";
import "../styles/pages/_about.scss";

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
