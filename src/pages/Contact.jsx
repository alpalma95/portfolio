const Contact = ({ active, setActiveSection, setShowMenu }) => {
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
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
