import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa";

import logo from "../../img/Logo.png";

export default function Navbar() {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const newScrollPosition = window.scrollY;
    setCurrentScrollPosition(newScrollPosition);

    if (newScrollPosition > lastScrollPosition) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollPosition(newScrollPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  const menuStyle =
    currentScrollPosition === 0
      ? {}
      : {
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          boxShadow: isVisible ? "0 3px 12px 0 rgba(0, 0, 0, 0.1)" : "none",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        };

  let menuClassName = "";
  if (window.location.pathname === "/home-2") {
    menuClassName = isVisible
      ? `menu__scroll ${
          currentScrollPosition !== 0
            ? "position-fixed bg-white"
            : "bg-transparent"
        }`
      : "menu__scroll global__transparent position-relative";
  } else {
    menuClassName = isVisible
      ? `menu__scroll ${
          currentScrollPosition !== 0 ? "position-fixed bg-white" : ""
        }`
      : "menu__scroll global__transparent position-relative";
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light menu ${
          window.location.pathname === "/signin" ||
          window.location.pathname === "/signup" ||
          window.location.pathname === "/home-2"
            ? `${menuClassName}`
            : menuClassName
        }`}
        style={menuStyle}
      >
        <div className="container p-sm-0">
          <Link className="navbar-brand menu__logo p-0 m-0" to="/">
            <img className="menu__logo-img" src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler menu__toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto menu__list my-3 my-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle menu__list-link menu__list-link--active"
                  to="/"
                  id="navbarDrop"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  home
                </Link>
                <ul
                  className="dropdown-menu menu__list-dropdown--ul overflow-hidden"
                  aria-labelledby="navbarDrop"
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      home
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/home-2">
                      home two
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      home three
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      home Four
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link menu__list-link menu__list-link--active"
                      : "nav-link menu__list-link"
                  }
                  to="/about"
                >
                  about us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link menu__list-link menu__list-link--active"
                      : "nav-link menu__list-link"
                  }
                  to="/cases"
                >
                  cases
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle menu__list-link"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  pages
                </Link>
                <ul
                  className="dropdown-menu menu__list-dropdown--ul"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/singleCase">
                      single cases
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/donate">
                      donate
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blogDetails">
                      blog details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/gallery">
                      gallery
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/team">
                      team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/testimonials">
                      testimonials
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/volunteer">
                      volunteer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="*">
                      error
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link menu__list-link menu__list-link--active"
                      : "nav-link menu__list-link"
                  }
                  to="/blog"
                >
                  blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link menu__list-link menu__list-link--active"
                      : "nav-link menu__list-link"
                  }
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
            <div className="d-sm-flex d-lg-block gap-4 mt-3 mt-lg-0">
              <Link
                to="/signin"
                className="btn menu__btn menu__btn-in mb-3 mb-lg-0"
              >
                sign in
              </Link>
              <Link
                to="/signup"
                className="btn menu__btn menu__btn-up mb-3 mb-lg-0"
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
