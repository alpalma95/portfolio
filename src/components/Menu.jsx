const Menu = ({ showMenu, setActiveSection, setShowMenu }) => {
  return (
    <div
      className="menu"
      onClick={() => {
        setActiveSection("");
        setShowMenu(false);
      }}
    >
      <i
        className={`fa-solid fa-angles-right ${showMenu ? "block" : "none"}`}
      ></i>
    </div>
  );
};

export default Menu;
