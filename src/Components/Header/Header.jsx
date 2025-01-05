import React, { useState, useEffect } from 'react'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import './Header.css'

const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="p-5 h-[80vh]">
            <div className='mt-5'>
                <h1 className='font-sans text-white text-4xl md:text-7xl'>MIGUEL MAZZIOTTI</h1>
            </div>
            <div className="mt-1 flex sm:mt-1  flex-col-reverse md:flex-row justify-between text-white md:mt-[calc(100vh-500px)]">
                <div>
                    <div className='flex mt-8'>
                        <ul className='text-white w-full gap-8'>
                            <li className='flex'>
                                <ChevronDoubleRightIcon className='text-lime-500 w-10' />
                                <span className='text-2xl md:text-4xl'>Ciberseguridad</span>
                            </li>
                            <li className='flex'>
                                <ChevronDoubleRightIcon className='text-lime-500 w-10' />
                                <span className='text-2xl md:text-4xl'>Python</span>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-3 mt-11'>
                        <SocialNetworks />
                    </div>
                </div>
                <div className='text-start mt-6 md:w-1/3 md:text-justify md:pl-[100px]'>
                    <h2>Estudiante de la tecnicatura en Desarrollo de Software y en formación en Ciberseguridad. <br></br>Apasionado por la protección de datos y la creación de sistemas seguros</h2>
                    <div className="text-start md:text-end">
                        <a href='public/assets/docs/CV-Miguel-Mazziotti.pdf' 
                        download='CV-Miguel-Mazziotti.pdf'
                        className="flex items-center rounded-3xl bg-lime-500 p-3 text-black mt-6 space-x-2 hover:bg-white w-[160px]">
                            <span>Descargar CV</span>
                            <ArrowDownTrayIcon className="h-5 w-5" />
                        </a>
                    </div>

                </div>
                {/* Primer div con background */}
                <div
                    className="object-contain absolute bottom-0 left-1/2 -z-[1] bg-[url('./assets/header-image-wbg.png')] bg-cover bg-no-repeat bg-center w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
                    style={{
                        transform: `translate(-50%, ${scrollY * 0.7}px)`,
                    }}
                ></div>


                {/* Segundo div con background */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-[2] bg-[url('./assets/header-image-background.png')] bg-cover bg-no-repeat bg-center opacity-[0.8] w-[500px] h-[400px] md:w-[900px] md:h-[700px]"
                    style={{
                        transform: `translate(-50%, ${scrollY * 0.7}px)`,
                    }}>
                </div>
            </div>

        </div>
    )
}

export default Header