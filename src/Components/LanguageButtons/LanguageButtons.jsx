import React from 'react'
import { useTranslation } from 'react-i18next'


const LanguageButtons = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <div className=''>
      <button className='border border-lime-500 text-white rounded-t-l mr-1.5 p-0.5' onClick={() => changeLanguage('en')}>EN</button>
      <button className='border border-lime-500 text-white rounded-r-l p-0.5' onClick={() => changeLanguage('es')}>ES</button>
    </div>
  )
}

export default LanguageButtons