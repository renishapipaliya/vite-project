import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const NavMenu = [
  {
    id: 1,
    title: "Home",
    path: "home",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Skill",
    path: "skill",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Project",
    path: "project",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Contact",
    path: "contact",
    delay: 0.4,
  },
];

const SlideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-lg fixed w-full z-50'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-2xl font-bold uppercase text-outline text-transparent'
        >
          RENISHA
        </motion.h1>
        <div className='hidden md:flex space-x-7'>
          {NavMenu.map((menu) => (
            <motion.li
              key={menu.id}
              variants={SlideDown(menu.delay)}
              initial="initial"
              animate="animate"
              className='nav-menu list-none'
            >
              <Link
                to={menu.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='text-[18px] cursor-pointer font-semibold'
            
              >
                {menu.title}
              </Link>
            </motion.li>
          ))}
        </div>
        <motion.div
          variants={SlideDown(1)}
          initial="initial"
          animate="animate"
          className='md:hidden'
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='h-10 w-10 grid place-items-center rounded-full text-white bg-dark'
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-white shadow-lg'>
          <ul className='flex flex-col items-center space-y-4 py-4'>
            {NavMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='text-[18px] cursor-pointer font-semibold'
                  onClick={() => setIsOpen(false)}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
