import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaCode, FaUser, FaGraduationCap, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const linkIcons = {
  projects: <FaCode />,
  about: <FaUser />,
  study: <FaGraduationCap />,
  experience: <FaBriefcase />,
  contact: <FaEnvelope />,
};

const socialLabels = ["GitHub", "LinkedIn"];
const socialIcons = [<FaGithub size={18} />, <FaLinkedin size={18} />];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Desktop right sidebar */}
      <nav className="hidden lg:flex fixed right-0 top-0 h-full w-48 z-30 flex-col py-10 px-6 bg-white border-l border-gray-100">
        <ul className="flex flex-col space-y-5 mt-4">
          {t.links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-base capitalize text-black transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className="text-xs font-medium text-black border border-black rounded px-2 py-1 hover:bg-black hover:text-white transition-colors duration-200"
            >
              {language === "nl" ? "EN" : "NL"}
            </button>
          </li>
        </ul>
        <ul className="mt-auto flex flex-row space-x-4">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-200"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile/Tablet hamburger button */}
      <nav className="lg:hidden fixed right-0 top-0 z-30 p-4">
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 text-black"
        >
          {isOpen ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
          <span className="text-sm font-medium">Menu</span>
        </button>
      </nav>

      {/* Mobile/Tablet menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-20 bg-white text-black px-8 pt-16 flex flex-col items-end"
          >
            <ul className="flex flex-col space-y-6 mt-4 items-end">
              {t.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={toggleMenu}
                    className="flex items-center gap-4 text-lg capitalize"
                  >
                    {link.name}
                    <span>{linkIcons[link.id]}</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={toggleLanguage}
                  className="text-sm font-medium text-black border border-black rounded px-3 py-1 hover:bg-black hover:text-white transition-colors duration-200"
                >
                  {language === "nl" ? "EN" : "NL"}
                </button>
              </li>
            </ul>
            <ul className="flex flex-col space-y-6 mt-10 pt-8 border-t border-gray-100 w-full items-end">
              {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                    className="flex items-center gap-4 text-lg"
                  >
                    <span>{socialLabels[index]}</span>
                    {socialIcons[index]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
