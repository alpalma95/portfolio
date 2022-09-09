import "../../styles/components/_btn.scss";

const Btn = ({ title, iconClassName, link }) => {
  return (
    <a className="contact__btn" href={link} target="_blank">
      {title} <i className={iconClassName}></i>
    </a>
  );
};

export default Btn;
