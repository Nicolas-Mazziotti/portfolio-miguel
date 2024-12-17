import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageButtons = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <div className="language-buttons-container">
      <button className='btn-english' onClick={() => changeLanguage('en')}>EN</button>
      <button className='btn-spanish' onClick={() => changeLanguage('es')}>ES</button>
    </div>
  )
}

export default LanguageButtons