import "../styles/Navbar.css";

// Necesario <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script> para usar los iconos
const Navbar = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Logo
        </a>

        <input type="checkbox" id="check" />
        <label className="icons" htmlFor="check">
          <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i>
        </label>

        <nav className="navbar">
          <a href="#" style={{ "--i": 0 }}>
            About
          </a>
          <a href="#" style={{ "--i": 1 }}>
            Services
          </a>
          <a href="#" style={{ "--i": 2 }}>
            Contact
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
