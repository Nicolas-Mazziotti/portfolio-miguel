import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './Components/LanguageData/LanguageConfig.js'
import 'i18next'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}> {/* Envolver App con I18nextProvider */}
      <App />
    </I18nextProvider>
  </StrictMode>,
)
