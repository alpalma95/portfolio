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
      <h1>Technologies</h1>
    </div>
  );
};

export default Tech;
