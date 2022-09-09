import ImgGroup from "./ImgGroup.jsx";

import "../../styles/components/_projectCard.scss";

const ProjectCard = ({
  title,
  img1,
  alt1,
  img2,
  alt2,
  liveLink,
  ghLink,
  description,
  tech,
}) => {
  return (
    <div className="project-card">
      <ImgGroup img1={img1} alt1={alt1} img2={img2} alt2={alt2} />
      <div className="project-card__info">
        <h3>{title}</h3>
        <p className="project-card__info__description">{description}</p>
        <p className="project-card__info__tech">
          <i className="fa-solid fa-hammer"></i>
          {tech.map((tech) => (
            <span>{tech}</span>
          ))}
        </p>
        {title === "My Portfolio Site" ? (
          <></>
        ) : (
          <a
            className="project-card__info__btn project-card__info__btn--live"
            href={liveLink}
            target="_blank"
          >
            Live
          </a>
        )}
        <a
          className="project-card__info__btn project-card__info__btn--code"
          href={ghLink}
          target="_blank"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
