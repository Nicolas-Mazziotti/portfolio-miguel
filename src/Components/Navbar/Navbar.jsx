import React from 'react'
import LanguageButtons from '../LanguageButtons/LanguageButtons'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
        <LanguageButtons/>
        <ul className='flex text-slate-50 text-lg gap-5 justify-center'>
            <li>
                <a href="">HOME</a>
                <span></span>
            </li>
            <li>
                <a href="">ABOUT</a>
                <span></span>
            </li>
            <li>
                <a href="">SKILLS</a>
                <span></span>
            </li>
            <li>
                <a href="">PORTFOLIO</a>
                <span></span>
            </li>
            <li>
                <a href="">CONTACT</a>
                <span></span>
            </li>
        </ul>
    </div>
  )
}

export default Navbar