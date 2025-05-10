import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

// Optional if using React Router
// import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // AOS animation setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Delay closing menu for better UX
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div data-aos="fade-down" data-aos-duration="900" className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Tuhin</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Mohanty</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item, index) => (
            <li
              data-aos="fade-down"
              data-aos-duration={`${1000 + index * 500}`}
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div data-aos="fade-down" data-aos-duration="2900" className="hidden md:flex space-x-4">
          <a href="https://github.com//DevCraftsmanship" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/_inpursuitofpeace_?igsh=d2VlODlzNnVxYnJs&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tuhinmohanty" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com//DevCraftsmanship" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/tuhinmohanty" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/_inpursuitofpeace_?igsh=d2VlODlzNnVxYnJs&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
