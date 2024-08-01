import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.png";
import js from "../../assets/image/js.png";
import reactlogo from "../../assets/image/React.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";
import Nodejs from '../../assets/image/Node.js.png';

const DessertData = [
    {
        id: 1,
        name: "HTML",
        img: html,
        Percentage: "85%",
    },
    {
        id: 2,
        name: "CSS",
        img: css,
        Percentage: "85%",
    },
    {
        id: 3,
        name: "JS",
        img: js,
        Percentage: "80%",
    },
    {
        id: 4,
        name: "REACT JS",
        img: reactlogo,
        Percentage: "80%",
    },
    {
        id: 5,
        name: "Node JS",
        img: Nodejs,
        Percentage: "50%",
    },

];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Skill = () => {
    return (
        <section>
            <div className='container mx-auto px-4 py-12'>
                <motion.h3
                    variants={SlideUp(0)}
                    initial="hidden"
                    whileInView="show"
                    className='text-2xl font-semibold text-darkGreen uppercase py-8 text-center'>
                    Skill
                </motion.h3>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    arrows={false}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    containerClass="carousel-container"
                >
                    {DessertData.map((item) => {
                        return (
                            <motion.div
                                key={item.id}
                                initial="hidden"
                                whileInView="show"
                                className='group bg-white/50 shadow-md p-3 m-3 rounded-lg'>
                                <div className='flex gap-4 items-center'>
                                    <img src={item.img} alt={item.name} className='w-20 h-20 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]' />
                                    <div>
                                        <h3 className='text-xl font-semibold'>{item.name}</h3>
                                        <p className='text-xl text-yellow-500'>{item.Percentage}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default Skill;
