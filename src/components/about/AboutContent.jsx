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
      <h2 className="about__h2 context">
        <span className="h2__span">Some context</span>
        Transitioning into tech
      </h2>
      <p className="about__p">
        I’ve always loved computers and creating things with them. It all
        started with custom Pokémon games with{" "}
        <a href="https://www.hackromtools.info/advance-map/">Advance Map</a> and
        a bunch of other no-code tools.
      </p>
      <p className="about__p">
        <i>Nonetheless</i> &#9472; like many others, I also believed that coding
        was something for math geniuses. My turbulent relationship with
        Mathematics led me to pursue my other great passion. That is,{" "}
        <strong>Translation</strong>.
      </p>
      <p className="about__p">
        Long story short, my profile happened to be attractive for a company.
        Not only did they see my potential for translation, but they also
        trusted my communication and social skills to assign me IT recruiting
        functions.
      </p>
      <p className="about__p">
        After looking at hundreds of profiles, I realised what we all tend to
        discover eventually: there is a vast diversity of people in the tech
        field, all of{" "}
        <strike>
          <span>them</span>
        </strike>{" "}
        <strong>us</strong> with different backgrounds. Some definitely not
        being math geniuses.
      </p>

      <h2 className="about__h2 now">
        <span className="h2__span">So...</span>
        ...what about now?
      </h2>
      <p className="about__p">
        After months of education, I can finally say that I build{" "}
        <strong>web apps</strong>. Not only the visual side of things but also
        the logic behind it. I love to pay attention to little details and to
        user interactions. I always give my best to build things beautifully and
        artisanally: I love CSS (especially with Sass) and I’m proud of building
        all my user interfaces from scratch.
      </p>
      <p className="about__p">
        I’m aware that there’s a lot of room for improvement. But here we are:
        trying and learning, day after day.{" "}
        <span className="back">And there’s no coming back</span>.
      </p>
    </div>
  );
};

export default AboutContent;
