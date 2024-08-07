import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import CartWidget from "./CartWidget";

// Necesario <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script> para usar los iconos
const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Proyectos HYM
        </Link>

        <input type="checkbox" id="check" />
        <label className="icons" htmlFor="check">
          <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i>
        </label>

        <nav className="navbar">
          <NavLink to={"/category/Planificacion"}>Planificación</NavLink>
          <NavLink to={"/category/Desarrollos"}>Desarrollos</NavLink>

          <Link to="/cart">
            <CartWidget />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
