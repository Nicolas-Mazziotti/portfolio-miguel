import React from 'react'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import './Header.css'

const Header = () => {
    return (
        <div className="">
            <div className='mt-20'>
                <h1 className='font-sans text-white text-7xl'>MIGUEL MAZZIOTTI</h1>
            </div>
            <div className="mt-24 flex justify-between text-white mt-[calc(100vh-500px)]">
                <div>
                    <div className='flex'>
                        <ul className='text-white w-full gap-8'>
                            <li className='flex'>
                                <ChevronDoubleRightIcon className='text-lime-500 w-12' />
                                <span className='text-4xl'>Ciberseguridad</span>
                            </li>
                            <li className='flex'>
                                <ChevronDoubleRightIcon className='text-lime-500 w-12' />
                                <span className='text-4xl'>Phyton</span>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-3 mt-11'>
                        <SocialNetworks />
                    </div>
                </div>
                <div className='w-1/3 text-justify pl-[100px]'>
                    <h2>Estudiante de la tecnicatura en Desarrollo de Software y en formación en Ciberseguridad. <br></br>Apasionado por la protección de datos y la creación de sistemas seguros</h2>
                    <div className='text-end'>
                    <button className='rounded-3xl bg-lime-500 w-32 p-2 text-black mt-6'>Descargar CV</button>
                    </div>
                    
                </div>
              {/* Primer div con background */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-[1] bg-[url('./assets/header-image-wbg.png')] bg-cover bg-no-repeat bg-center w-[600px] h-[600px]">
                </div>

                {/* Segundo div con background */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-[2] bg-[url('./assets/header-image-background.png')] bg-cover bg-no-repeat bg-center w-[900px] h-[700px]">
                </div>
            </div>
        </div>
    )
}

export default Header