import { NavLink, Link } from "react-router-dom";

import { Logo } from "../../assets";

import "./Header.scss";

const Header = () => {
  const setIsActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  return (
    <header className="header p-y-6 bg-light-orange">
      <nav className="container flex justify-between align-items-center text-lg">
        <Link to="/">
          <img className="logo" src={Logo} alt="Website Logo" />
        </Link>

        <ul className="flex align-items-center gap-8 fw-600 mb-0" role="list">
          <li>
            <NavLink className={setIsActive} to="/host">
              Host
            </NavLink>
          </li>
          <li>
            <NavLink className={setIsActive} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={setIsActive} to="/vans">
              Vans
            </NavLink>
          </li>

          <li>
            <NavLink className={setIsActive} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
