import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logos/LogoNoBG.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("#182b38");

  const TEXT_FONT = "text-xl";
  const LOGO_HEIGHT = "h-48";

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((s) => !s);

  const changeNavbarBg = () => {
    if (window.scrollY >= 50) {
      setNavbarBg("rgba(24, 43, 56, 1)");
    } else {
      setNavbarBg("#182b38");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  const getSectionOffset = (section) => {
    return section === "solutions" ? -20 : -80;
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: getSectionOffset(section),
    });
    setIsMenuOpen(false);
  };

  const goToSection = (section) => {
    if (location.pathname === "/" || location.pathname === "/techbridge") {
      scrollToSection(section);
      return;
    }

    navigate("/");

    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: getSectionOffset(section),
      });
    }, 350);

    setIsMenuOpen(false);
  };

  return (
    <nav
      className="navbar h-20 px-4 text-white fixed top-0 w-full z-30 transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: navbarBg }}
    >
      <div
        className="container mx-auto flex h-full items-center relative"
        style={{ fontFamily: "Bookman Old Style, serif", fontWeight: 100 }}
      >
        <button
          onClick={() => goToSection("home")}
          className="shrink-0 focus:outline-none"
          aria-label="Go to home"
        >
          <img
            src={logo}
            alt="TechBridge Group IT Solutions Company in Lebanon"
            className={`${LOGO_HEIGHT} transition duration-300 ease-in-out select-none`}
            draggable="false"
            decoding="async"
          />
        </button>

        <ul
          className={`hidden lg:flex ml-auto justify-end items-center gap-8 ${TEXT_FONT} nav-text`}
        >
          <li
            className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
            onClick={() => goToSection("home")}
          >
            Home
          </li>

          <li
            className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
            onClick={() => goToSection("story")}
          >
            About us
          </li>

          <li className="relative group px-2 py-2 cursor-pointer whitespace-nowrap">
            <div
              className="hover:text-cyan-500"
              onClick={() => goToSection("mission")}
            >
              Our Mission
            </div>
            <div className="absolute right-0 hidden group-hover:block mt-2 bg-[#6F6D39] text-white shadow-md rounded-md whitespace-nowrap">
              {/* submenu reserved */}
            </div>
          </li>

          <li
            className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
            onClick={() => goToSection("vision")}
          >
            Our Vision
          </li>

          <li
            className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
            onClick={() => goToSection("solutions")}
          >
            Our Solutions
          </li>

          <li
            className="px-2 py-2 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
            onClick={() => goToSection("footer")}
          >
            Contact Us
          </li>
        </ul>

        <button
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          className="lg:hidden ml-auto text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="lg:hidden absolute right-4 top-full mt-3 w-56 rounded-lg shadow-lg bg-[#182b38] border border-white/10">
            <ul className={`flex flex-col ${TEXT_FONT} nav-text`}>
              <li
                className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
                onClick={() => goToSection("home")}
              >
                Home
              </li>

              <li
                className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
                onClick={() => goToSection("story")}
              >
                About us
              </li>

              <li
                className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
                onClick={() => goToSection("mission")}
              >
                Our Mission
              </li>

              <li
                className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
                onClick={() => goToSection("vision")}
              >
                Our Vision
              </li>

              <li
                className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
                onClick={() => goToSection("solutions")}
              >
                Our Solutions
              </li>

              <li
                className="px-4 py-3 hover:text-cyan-500 cursor-pointer whitespace-nowrap"
                onClick={() => goToSection("footer")}
              >
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;