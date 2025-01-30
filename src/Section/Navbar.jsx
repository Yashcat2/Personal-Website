import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <div className="fixed top-0 left-0 w-full px-6 md:px-[150px] py-4 bg-black flex justify-between items-center z-50">
      {/* Logo */}
      <a
        href="#home"
        className="text-xl md:text-2xl font-extrabold text-[var(--text-color)]  ml-16 cursor-pointer transition ease-in-out duration-200 hover:scale-110"
        onClick={() => setActiveLink("#home")}
      >
        Yashodha{' '}
        <span className="text-[#00b3ff] text-shadow-main-color">
          Gunawardhana
        </span>
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 md:space-x-8">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className={`text-sm md:text-base font-medium text-[var(--text-color)] transition ease-in-out duration-300 cursor-pointer border-b-[3px] ${activeLink === "#home" ? "border-[#00b3ff] text-[#00b3ff]" : "border-transparent hover:text-[#00b3ff] hover:border-[#00b3ff]"}`}
          onClick={() => setActiveLink("#home")}
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className={`text-sm md:text-base font-medium text-[var(--text-color)] transition ease-in-out duration-300 cursor-pointer border-b-[3px] ${activeLink === "#skills" ? "border-[#00b3ff] text-[#00b3ff]" : "border-transparent hover:text-[#00b3ff] hover:border-[#00b3ff]"}`}
          onClick={() => setActiveLink("#skills")}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className={`text-sm md:text-base font-medium text-[var(--text-color)] transition ease-in-out duration-300 cursor-pointer border-b-[3px] ${activeLink === "#projects" ? "border-[#00b3ff] text-[#00b3ff]" : "border-transparent hover:text-[#00b3ff] hover:border-[#00b3ff]"}`}
          onClick={() => setActiveLink("#projects")}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className={`text-sm md:text-base font-medium text-[var(--text-color)] transition ease-in-out duration-300 cursor-pointer border-b-[3px] ${activeLink === "#contact" ? "border-[#00b3ff] text-[#00b3ff]" : "border-transparent hover:text-[#00b3ff] hover:border-[#00b3ff]"}`}
          onClick={() => setActiveLink("#contact")}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;