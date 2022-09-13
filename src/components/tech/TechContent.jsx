import { mainTech, sideTech } from "./tech";
import "../../styles/components/TechContent.scss";

const TechContent = () => {
  return (
    <div className="tech-content">
      <h2 className="tech-content__h2-left">Main stack</h2>
      <p className="tech-content__p-left">
        Stack I use for most of my projects
      </p>
      <div className="tech-content__stack">
        {mainTech.map((x, i) => {
          return (
            <div key={i} className="tech-card">
              <div className="tech-card__img-wrapper">
                <img src={x.logo} alt={`${x.name} logo`} />
              </div>

              <h6 className="tech-card__title">{x.name}</h6>
            </div>
          );
        })}
      </div>
      <h2 className="tech-content__h2-right">Other stack I use</h2>
      <p className="tech-content__p-right">
        Stack I've used and I'm still exploring
      </p>
      <div className="tech-content__stack">
        {sideTech.map((x, i) => {
          return (
            <div key={i} className="tech-card">
              <div className="tech-card__img-wrapper">
                <img src={x.logo} alt={`${x.name} logo`} />
              </div>

              <h6 className="tech-card__title">{x.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechContent;
