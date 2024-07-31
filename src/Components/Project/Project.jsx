import React from 'react';
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";
import GREETO from '../../assets/image/GREETO.png';
import Invoice from '../../assets/image/Invoice.png';
import Trippy from '../../assets/image/Trippy.png';
import DarkLightMode from '../../assets/image/Darklightmode.png';
import Mobileshop from '../../assets/image/Mobileshop.png';


const ProjectData = [
    {
        id: 1,
        name: "Trippy",
        img: Trippy,
        link: "https://github.com/renishapipaliya/trippy-website.git",
        delay: 0.4,
    },
    {
        id: 2,
        name: "GREETO",
        img: GREETO,
        link: "https://github.com/renishapipaliya/ecom-superadmin-master.git",
        delay: 0.8,
    },
    {
        id: 3,
        name: "Invoice",
        img: Invoice,
        link: "https://github.com/renishapipaliya/invoice.git",
        delay: 1.2,
    },
    {
        id: 4,
        name: "DarkLightMode",
        img: DarkLightMode,
        link: "https://github.com/renishapipaliya/Project-1.git",
        delay: 1.4,
    },
    {
        id: 5,
        name: "Mobileshop",
        img: Mobileshop,
        link: "https://github.com/renishapipaliya/frida.git",
        delay: 1.8,
    },
]

const Project = () => {
    return (
        <section>
            <div className='container mx-auto px-4 py-24'>
                <motion.h3
                    variants={SlideUp(0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    className='text-4xl text-center font-league font-semibold uppercase py-8'
                >
                    Projects
                </motion.h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center'>
                    {ProjectData.map((item) => (
                        <motion.div
                            key={item.id}
                            className='group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl'
                            variants={SlideUp(item.delay)}
                            initial="hidden"
                            whileInView="show"
                        >
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className='w-full sm:w-80 p-2 pt-8 mx-auto img-shadow group-hover:scale-110
                                 group-hover:translate-y-1 group-hover:cursor-zoom-out transition-all duration-400'
                                />
                            </a>
                            <div>
                                <p className='text-xl font-semibold'>{item.name}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <button className='btn-primary'>Open now</button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;
