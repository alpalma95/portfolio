import AboutContent from "../components/about/AboutContent.jsx";
import "../styles/components/_section.scss";

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
      <div className="about__h1">
        <h1>About</h1>
      </div>

      {active ? <AboutContent /> : <></>}
    </section>
  );
};

export default About;
