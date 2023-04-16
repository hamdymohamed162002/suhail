import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../staticData";
import "./navbar.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  function handleClick(event, navLink) {
    event.preventDefault();
    const section = document.getElementById(navLink.path);
    setActiveLink(navLink.label);
    section.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <header className="navbar">
        <nav aria-label="Global">
          <div className="flex items-center justify-between">
            <Link
              to={"/"}
              className="flex-none text-2xl font-bold text-[#307979] hover:text-amber-500 duration-150 ease-in-out logo"
            >
              <p className="flex flex-col gap-y-0">
                <span className="leading-3 tracking-[0.17em]">SUHAIL</span>
                <span className="text-base tracking-wider text-center">
                  Comunidad Musulmana
                </span>
              </p>
            </Link>
            {/* burger menu */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-full shadow-sm hs-collapse-toggle hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="w-4 h-4 hs-collapse-open:hidden"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hidden w-4 h-4 hs-collapse-open:block"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
            <ul className="flex flex-col py-6 mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-center md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
              {navLinks.map((navLink) => {
                return (
                  <li
                    className={`nav-hover-effect ${
                      activeLink === navLink.label && "active"
                    }`}
                    key={navLink.id}
                  >
                    <a
                      href="#"
                      onClick={(event) => handleClick(event, navLink)}
                    >
                      {navLink.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Mobile  */}
          <div
            id="navbar-collapse-with-animation"
            className="absolute bottom-0 left-0 hidden w-full overflow-hidden transition-all duration-300 translate-y-full bg-white custom-shadow hs-collapse basis-full grow md:hidden"
          >
            <ul className="flex flex-col px-4 py-6 shadow gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-center md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
              {navLinks.map((navLink) => {
                return (
                  <li
                    className={`nav-hover-effect ${
                      activeLink === navLink.label && "active"
                    }`}
                    key={navLink.id}
                  >
                    <a
                      href="#"
                      onClick={(event) => handleClick(event, navLink)}
                    >
                      {navLink.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <button
          className="fixed p-2 bg-transparent border border-black rounded-full hover:border-amber-500 group bottom-8 right-8 hover:bg-amber-500"
          onClick={(event) =>
            handleClick(event, { label: "Home", path: "home" })
          }
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black group-hover:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </button>
      </header>
    </>
  );
};

export default Navbar;
