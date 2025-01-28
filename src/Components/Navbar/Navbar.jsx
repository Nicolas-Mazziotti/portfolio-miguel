import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageButtons from '../LanguageButtons/LanguageButtons'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/16/solid'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolling, setScrolling] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    const {t} = useTranslation()

    const scrollToSection = (sectionId, event) => {
      event.preventDefault(); 
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          toggleMenu();
        }, 1000);
      }
    };


    useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) { // Cambia el valor para detectar el scroll que desees
              setScrolling(true);
          } else {
              setScrolling(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      
      // Cleanup en caso de que el componente se desmonte
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className= {`flex justify-between p-5 bg-black fixed w-full z-40 ${scrolling ? 'bg-[#130f0fb8]': 'bg-black'}`}>
        <LanguageButtons/>

        <div className="md:hidden z-10">
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6 cursor-pointer text-black-50 fixed left-[80%]" onClick={toggleMenu} />
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
            <li className='hover:text-lime-500' onClick={(e) => scrollToSection("home", e)}> 
                <a href="">{t('navbar.home')}</a>
                <span></span>
            </li>
            <li className='hover:text-lime-500' onClick={(e) => scrollToSection("about", e)}>
                <a href="">{t('navbar.about')}</a>
                <span></span>
            </li>
            <li className='hover:text-lime-500' onClick={(e) => scrollToSection("skills",e )}>
                <a href="">{t('navbar.skills')}</a>
                <span></span>
            </li>
            <li className='hover:text-lime-500' onClick={(e) => scrollToSection("portfolio",e)}> 
                <a href="">{t('navbar.portfolio')}</a>
                <span></span>
            </li>
            <li className='hover:text-lime-500' onClick={(e) => scrollToSection("contact",e)}>
                <a href="">{t('navbar.contact')}</a>
                <span></span>
            </li>
        </ul>
    </div>
  )
}

export default Navbar