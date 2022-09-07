import { useState } from "react";
import "./styles/_app.scss";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Tech from "./pages/Tech.jsx";
import Contact from "./pages/Contact.jsx";
import Menu from "./components/Menu.jsx";
import "./styles/_app.scss";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="App">
      <Menu
        showMenu={showMenu}
        setActiveSection={setActiveSection}
        setShowMenu={setShowMenu}
      />
      <About
        active={activeSection === "about"}
        setActiveSection={setActiveSection}
        setShowMenu={setShowMenu}
      />
      <Projects
        active={activeSection === "projects"}
        setActiveSection={setActiveSection}
        setShowMenu={setShowMenu}
      />
      <Tech
        active={activeSection === "tech"}
        setActiveSection={setActiveSection}
        setShowMenu={setShowMenu}
      />
      <Contact
        active={activeSection === "contact"}
        setActiveSection={setActiveSection}
        setShowMenu={setShowMenu}
      />
    </div>
  );
}

export default App;
