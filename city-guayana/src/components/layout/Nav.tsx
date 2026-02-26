import { useState } from "react";
import Button from "../Button";
import { motion, AnimatePresence } from "framer-motion";

const navItem = [
  {
    name: "Cursos",
    href: "#",
  },
  {
    name: "Beneficios",
    href: "#",
  },
  {
    name: "Graduados",
    href: "#",
  },
  {
    name: "Nosotros",
    href: "#",
  },
];

type Props = {};

function Nav({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-20  fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md">
      <nav className="hidden h-full mx-10 sm:flex justify-between items-center ">
        {" "}
        <h1>logo</h1>
        <div className="flex gap-8 mx-4">
          {navItem.map((item) => (
            <a
              key={item.name}
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>
        <Button className=" font-poppins w-37.5 bg-primary px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 text-white shadow-lg hover:scale-102 transition-transform duration-300 ease-in-out">
          Inscribirme
        </Button>
      </nav>

      <nav className="sm:hidden h-full flex-col items-center relative">
        <div className="flex justify-between items-center h-full">
          <Button onClick={handleClick} className="px-6">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
          <h1 className="px-6">logo</h1>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }} // Cómo empieza (invisible y arriba)
              animate={{ opacity: 1, y: 0 }} // Cómo se ve activo
              exit={{ opacity: 0, y: -20 }} // Cómo se va (hacia arriba)
              transition={{ duration: 0.3, ease: "easeOut" }}
              className=" w-full pt-4 bg-white shadow-lg border-t border-gray-100 "
              onClick={handleClick}
            >
              <div className="flex flex-col w-full h-full gap-4 ">
                {navItem.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-gray-100 w-full text-center pb-4 last:border-none"
                  >
                    <a href={item.href}>{item.name}</a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Nav;
