import React from 'react';
import { motion } from "framer-motion";
import Renisha from '../../assets/image/Renisha.png';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const SlideUp = (delay) => {
  return {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      }
    }
  }
}

const Hero = () => {
  return (
    <main className='relative'>
      <div className='container min-h-[600px] flex justify-center items-center relative z-10 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between'>
          <div className='space-y-3 text-center md:text-left'>
            <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className='relative text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mt-9 uppercase text-outline text-transparent'>
              I'M RENISHA
            </motion.h1>
            <motion.h1
              variants={SlideUp(1)}
              initial="hidden"
              whileInView="show"
              className='text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold uppercase '>
              Web Developer
            </motion.h1>
            <motion.p
              variants={SlideUp(1.5)}
              initial="hidden"
              whileInView="show"
              className='text-sm md:text-base  lg:text-[17px]'>
              I am a skilled and passionate web Developer
            </motion.p>
            <motion.div
              variants={SlideUp(2)}
              initial="hidden"
              whileInView="show"
              className='flex justify-center md:justify-start gap-4 mt-4'>
              <a href="https://github.com/renishapipaliya" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="hover:text-gray-600" />
              </a>
              <a href="https://www.linkedin.com/in/renishapipaliya" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="hover:text-gray-600" />
              </a>
              <a href="https://wa.me/6355737477" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} className="hover:text-gray-600" />
              </a>
            </motion.div>
            <Link to='Contact' spy={true} smooth={true} offset={-70} duration={500}>
              <motion.button
                variants={SlideUp(2.5)}
                initial="hidden"
                whileInView="show"
                className='btn-primary gap-4 inline-block mt-10'>
                Contact
              </motion.button>
            </Link>
          </div>
          <div className='relative'>
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              
              transition={{ duration: 0.6 }}
              src={Renisha} alt='' className='w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl img-shadow pt-20' />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
        whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        className='w-[2500px] h-[2500px] rounded-3xl bg-lightYellow top-[-30%] absolute left-[70%] z-0'>
      </motion.div>
    </main>
  )
}

export default Hero;
