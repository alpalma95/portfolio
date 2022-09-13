import TechContent from "../components/tech/TechContent.jsx";
import "../styles/components/_section.scss";
import "../styles/pages/_tech.scss";

const Tech = ({ active, setActiveSection, setShowMenu }) => {
  return (
    <div
      className={`tech section ${
        active ? "section--active" : "section--inactive"
      }`}
      onClick={() => {
        setActiveSection("tech");
        setShowMenu(true);
      }}
    >
      <div className="about__h1">
        <h1>Tech</h1>
        {active ? <TechContent /> : <></>}
      </div>
    </div>
  );
};

export default Tech;
