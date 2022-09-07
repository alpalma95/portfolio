import Img from "./Img.jsx";
import Socials from "./Socials.jsx";

const AboutContent = () => {
  return (
    <div className="about-content">
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
  );
};

export default AboutContent;
