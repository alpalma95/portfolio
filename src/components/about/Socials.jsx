const Socials = () => {
  return (
    <div className="socials-wrapper">
      <ul>
        <li key="email">
          <i className="fa-regular fa-envelope"></i>{" "}
          <a href="mailto:alpalma95@gmail.com">Email</a>
        </li>
        <li key="linkedin">
          {" "}
          <i className="fa-brands fa-linkedin-in"></i>{" "}
          <a
            href="https://www.linkedin.com/in/al-pm/?locale=en_US"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li key="github">
          <i class="fa-brands fa-github"></i>{" "}
          <a href="https://github.com/alpalma95" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
