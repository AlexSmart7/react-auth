import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkIsActive = (isActive, isPending) => {
    if (isPending) return "header__item-link";
    if (isActive) return "header__item-link header__item-link--is-active";
    else return "header__item-link";
  };

  return (
    <nav className="header">
      <NavLink to="/" className="header__logo">
        LOGO
      </NavLink>
      <ul className="header__nav-list">
        <li className="header__list-item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              linkIsActive(isActive, isPending)
            }
          >
            Home
          </NavLink>
        </li>
        <li className="header__list-item">
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              linkIsActive(isActive, isPending)
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="header__list-item">
          <NavLink
            to="/secret"
            className={({ isActive, isPending }) =>
              linkIsActive(isActive, isPending)
            }
          >
            Secret
          </NavLink>
        </li>
        <li className="header__list-item">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              linkIsActive(isActive, isPending)
            }
          >
            Login
          </NavLink>
        </li>
        <li className="header__list-item">
          <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
              linkIsActive(isActive, isPending)
            }
          >
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
