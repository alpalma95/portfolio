import Img from "../projects/Img.jsx";
import Socials from "../projects/Socials.jsx";

const AboutContent = () => {
  return (
    <div className="about-content">
      <h2 className="about__h2 context">
        <span className="h2__span">Some context</span>
        Transitioning into tech
      </h2>
      <p className="about__p">
        I’ve always loved computers and creating things with them. It all
        started with custom Pokémon games made with{" "}
        <a href="https://www.hackromtools.info/advance-map/" target="_blank">
          Advance Map
        </a>{" "}
        and a bunch of other no-code tools. <i>Nonetheless</i> &#9472; like many
        others, I also believed that coding was something for math geniuses. My
        turbulent relationship with Mathematics led me to pursue my other great
        passion. That is, <strong>Translation</strong>.
      </p>

      <p className="about__p">
        Long story short, my profile happened to be attractive for a company who
        trusted my communication and social skills to assign me, among other
        tasks, the maintenance of their website. It all started being related to
        the content and, little by little, they were assigning me more
        responsabilities code-wise, which paired pretty well with the
        self-taught path I had started to learn web development.
      </p>

      <h2 className="about__h2 now">
        <span className="h2__span">So...</span>
        ...what about now?
      </h2>
      <p className="about__p">
        After months of education, I can finally say that I build{" "}
        <strong>web apps</strong>. Not only the visual side of things but also
        the logic behind them. I always give my best to build things beautifully
        and artisanally: I love CSS (especially with <strong>Sass</strong>) and
        I’m proud of building all my user interfaces from scratch.
      </p>
      <p className="about__p">
        I’m aware that there’s always room for improvement. But here we are:
        trying and learning, day after day.{" "}
        <strong>And there’s no coming back</strong>.
      </p>
    </div>
  );
};

export default AboutContent;
