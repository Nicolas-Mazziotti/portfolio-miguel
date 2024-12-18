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
    <div className='flex justify-between'>
        <LanguageButtons/>

        <div className="md:hidden">
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6 cursor-pointer text-slate-50" onClick={toggleMenu} />
        ) : (
          <Bars3BottomRightIcon className="w-6 h-6 cursor-pointer text-slate-50" onClick={toggleMenu} />
        )}
      </div>
        {/* <Bars3BottomRightIcon/>
        <XMarkIcon/> */}
        <ul
    className={`absolute md:relative md:flex text-slate-50 md:text-lg md:gap-5 md:justify-center w-full md:w-auto top-0 md:p-0 transition-transform duration-300 
      ${menuOpen ? 'top-24 translate-y-0' : '-translate-y-full'}
      md:top-auto md:translate-y-0`}>
            <li>
                <a href="">{t('navbar.home')}</a>
                <span></span>
            </li>
            <li>
                <a href="">{t('navbar.about')}</a>
                <span></span>
            </li>
            <li>
                <a href="">{t('navbar.skills')}</a>
                <span></span>
            </li>
            <li>
                <a href="">PORTFOLIO</a>
                <span></span>
            </li>
            <li>
                <a href="">{t('navbar.contact')}</a>
                <span></span>
            </li>
        </ul>
    </div>
  )
}

export default Navbar