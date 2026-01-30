import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LINKS } from "../constants";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
      },
    },
  };

  return (
    <>
      <nav className="fixed right-0 top-0 z-30 p-4">
        <button onClick={toggleMenu} className="rounded-md p-2 text-black">
          {isOpen ? (
            <FaTimes className="h-6 w-6 text=black" />
          ) : (
            <FaBars className="h-6 w-6 text-black" />
          )}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="fixed inset-0 z-20 flex flex-col justify-center bg-white text-black"
          >
            <ul className="space-y-6 group">
              {LINKS.map((link) => (
                <motion.li variants={linkVariants} key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={toggleMenu}
                    className="text-5xl font-semibold uppercase tracking-wide lg:text-9xl
                    transition-opacity duration-300
                    group-hover:opacity-30 hover:!opacity-100"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
