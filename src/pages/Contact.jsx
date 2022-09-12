import Btn from "../components/contact/Btn.jsx";
import "../styles/components/_section.scss";
import "../styles/pages/_contact.scss";

const Contact = ({ active, setActiveSection, setShowMenu }) => {
  const contactContent = (
    <div>
      <Btn
        title="Email"
        iconClassName="fa-regular fa-envelope"
        link="mailto:alpalma95@gmail.com"
      />
      <Btn
        title="LinkedIn"
        iconClassName="fa-brands fa-linkedin-in"
        link="https://www.linkedin.com/in/al-pm/?locale=en_US"
      />
      <Btn
        title="GitHub"
        iconClassName="fa-brands fa-github"
        link="https://github.com/alpalma95"
      />
    </div>
  );

  return (
    <div
      className={`contact section ${
        active ? "section--active" : "section--inactive"
      }`}
      onClick={() => {
        setActiveSection("contact");
        setShowMenu(true);
      }}
    >
      <div className="about__h1">
        <h1>Contact</h1>
      </div>
      {active ? contactContent : <></>}
    </div>
  );
};

export default Contact;
