import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Renisha from '../../assets/image/Renisha.png';
import { motion } from "framer-motion";
import { SlideUp } from '../Hero/Hero';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kl4a2dp', 'template_n1m9ji6', form.current, '1c5tmn8v9dzCW8bPh')
            .then(
                () => {
                    toast.success('Email sent successfully!', { autoClose: 2000 });
                },
                (error) => {
                    toast.error(`Failed to send email: ${error.text}`, { autoClose: 2000 });
                },
            );
    };

    return (
        <div className='container mx-auto px-4 py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center'>
                <form className='space-y-5 w-full max-w-lg' ref={form} onSubmit={sendEmail}>
                    <motion.h1
                        className='text-2xl font-semibold'
                        variants={SlideUp(0.4)}
                        initial="hidden"
                        whileInView="show"
                    >
                        Contact
                    </motion.h1>
                    <motion.input
                        variants={SlideUp(0.8)}
                        initial="hidden"
                        whileInView="show"
                        className='text-xl w-full h-10 font-serif relative z-10 border border-gray-400 outline-none rounded-lg px-2'
                        name='from_name'
                        placeholder='Name'
                        required
                    />
                    <div className='flex flex-col md:flex-row gap-2'>
                        <motion.input
                            variants={SlideUp(1.2)}
                            initial="hidden"
                            whileInView='show'
                            className='text-xl font-serif w-full h-10 relative z-10 border border-gray-400 outline-none rounded-lg px-2'
                            name='email'
                            placeholder='Email'
                            required
                        />
                        <motion.input
                            variants={SlideUp(1.4)}
                            initial="hidden"
                            whileInView="show"
                            className='text-xl font-serif w-full h-10 relative z-10 border border-gray-400 outline-none rounded-lg px-2'
                            name='phone'
                            placeholder='Phone No.'
                            required
                        />
                    </div>
                    <div>
                        <motion.textarea
                            variants={SlideUp(1.8)}
                            initial="hidden"
                            whileInView="show"
                            className='text-xl w-full h-24 font-serif relative z-10 border border-gray-400 outline-none rounded-lg px-2'
                            name='message'
                            placeholder='Message'
                            required
                        />
                    </div>
                    <motion.button
                        variants={SlideUp(2.2)}
                        initial="hidden"
                        whileInView="show"
                        className='btn-primary w-full md:w-auto'
                        type='submit'
                    >
                        Send
                    </motion.button>
                    <ToastContainer />
                </form>
                <div className='relative'>
                    <motion.img
                        initial={{ opacity: 0, x: -100, y: 100 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        whileHover={{ scale: 1.2, rotate: 15, x: 50, y: -50 }}
                        transition={{ duration: 0.8, delay: 0.5, scale: { duration: 0.5 } }}
                        src={Renisha}
                        alt=''
                        className='relative z-10 w-full lg:max-w-xs img-shadow'
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className='absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-80 w-80 bg-lightYellow md:h-[411px] md:w-[400px] rounded-t-full'
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
