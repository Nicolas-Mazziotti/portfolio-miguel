import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageButtons from '../LanguageButtons/LanguageButtons'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/16/solid'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    const {t} = useTranslation()
  return (
    <div className='flex justify-between p-5 bg-black'>
        <LanguageButtons/>

        <div className="md:hidden z-10 mr-5">
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6 cursor-pointer text-black-50 fixed " onClick={toggleMenu} />
        ) : (
          <Bars3BottomRightIcon className="w-6 h-6 cursor-pointer text-slate-50" onClick={toggleMenu} />
        )}
      </div>
        {/* <Bars3BottomRightIcon/>
        <XMarkIcon/> */}
        <ul
    className={`fixed top-0 right-0 h-full w-[300px] bg-white text-black flex flex-col gap-5 p-6 pt-28 transition-transform duration-300 md:relative md:flex md:flex-row md:items-center md:text-white md:gap-5 md:bg-transparent md:p-0 md:w-auto md:h-auto
        ${menuOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
      >
            <li className='hover:text-lime-500'>
                <a href="">{t('navbar.home')}</a>
                <span></span>
            </li>
            <li className='hover:text-lime-500'>
                <a href="">{t('navbar.about')}</a>
                <span></span>
            </li>
            <li className='hover:text-lime-500'>
                <a href="">{t('navbar.skills')}</a>
                <span></span>
            </li>
            <li className='hover:text-lime-500'> 
                <a href="">PORTFOLIO</a>
                <span></span>
            </li>
            <li className='hover:text-lime-500'>
                <a href="">{t('navbar.contact')}</a>
                <span></span>
            </li>
        </ul>
    </div>
  )
}

export default Navbar