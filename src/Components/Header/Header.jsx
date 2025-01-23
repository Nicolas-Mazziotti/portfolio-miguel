import React, { useState, useEffect } from 'react'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './Header.css'

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const {t} = useTranslation()

    useEffect(() => {
        const handleScroll = () => {
            // setScrollY(window.scrollY);
            requestAnimationFrame(() => setScrollY(window.scrollY));
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="p-5 h-[70vh] md:h-[75vh] ">
            <div className='mt-5'>
                <motion.h1 className='font-sans text-white text-5xl md:text-7xl text-start md:text-center'
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}  
                transition={{ delay: 1, duration: 0.8 }}
                >MIGUEL MAZZIOTTI</motion.h1>
            </div>
            <div className="mt-1 flex sm:mt-1  flex-col-reverse md:flex-row justify-between text-white md:mt-[calc(100vh-500px)]">
                <div>
                    <div className='flex mt-8'>
                        <ul className='text-white w-full gap-8'>
                            <motion.li className='flex'
                                //  className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -50 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }} 
                            >
                                <ChevronDoubleRightIcon className='text-lime-500 w-10' />
                                <span className='text-2xl md:text-4xl'>Ciberseguridad</span>
                            </motion.li>
                            <motion.li className='flex'
                                initial={{ opacity: 0, x: -50 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ duration: 1, ease: "easeOut", delay: 1 }} 
                            >
                                <ChevronDoubleRightIcon className='text-lime-500 w-10' />
                                <span className='text-2xl md:text-4xl'>Python</span>
                            </motion.li>
                        </ul>
                    </div>
                    <motion.div className='flex gap-3 mt-11'
                     initial={{ opacity: 0, y: 50 }} 
                     animate={{ opacity: 1, y: 0 }} 
                     transition={{ duration: 1, ease: "easeOut", delay: 1 }} 
                    >
                        <SocialNetworks/>
                    </motion.div>
                </div>
                <div className='text-start mt-6 text-lg md:w-1/3 md:text-justify md:pl-[100px]  overflow-x-hidden overflow-y-hidden'>
                    <motion.h2
                     initial={{ opacity: 0, x: 50 }} 
                     animate={{ opacity: 1, x: 0 }} 
                     transition={{ duration: 1, ease: "easeOut", delay: 1 }} 
                    >{t('header.subtitle')}</motion.h2>
                    <motion.div className="text-start md:text-end"
                    initial={{ opacity: 0, y: 100 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }} 
                    >
                        <a href='assets/docs/CV-Miguel-Mazziotti.pdf'
                            download='CV-Miguel-Mazziotti.pdf'
                            className="flex items-center rounded-3xl bg-lime-500 p-3 pl-5 text-black mt-6 space-x-2 hover:bg-white w-[180px]">
                            <span>Descargar CV</span>
                            <ArrowDownTrayIcon className="h-5 w-5" />
                        </a>
                    </motion.div>

                </div>
                {/* Primer div con background */}
                <div
                    className="object-contain absolute bottom-0 left-1/2 -z-[1] bg-[url('/assets/header-image-wbg.png')] bg-cover bg-no-repeat bg-center w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
                    style={{
                        transform: `translate(-50%, ${scrollY * 0.7}px)`,
                    }}
                ></div>


                {/* Segundo div con background */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-[2] bg-[url('/assets/header-image-background.png')] bg-cover bg-no-repeat bg-center opacity-[0.8] w-[500px] h-[400px] md:w-[900px] md:h-[700px]"
                    style={{
                        transform: `translate(-50%, ${scrollY * 0.7}px)`,
                    }}>
                </div>
            </div>

        </div>
    )
}

export default Header