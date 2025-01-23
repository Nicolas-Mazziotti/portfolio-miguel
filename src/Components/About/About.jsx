import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t} = useTranslation()
  const [showModal, setShowModal] = useState(false);
  return (
    <div
    className="flex flex-col mt-52 bg-white p-5 pt-12 bg-[url('/assets/background-about.png')] bg-no-repeat bg-[bottom_-100px_left_190px] sm:bg-[bottom_-250px_left_350px] md:bg-[bottom_-200px_left_500px]  lg:bg-[bottom_-300px_left_670px] xl:bg-[bottom_-350px_left_900px] 2xl:bg-[bottom_-350px_left_1000px] 3xl:bg-[bottom_-350px_left_1400px] 4xl:bg-[bottom_-350px_left_1600px] md:bg-[length:740px_620px] xl:bg-[length:840px_720px] bg-contain bg-[length:700px_620px]">
      <motion.h2 className='text-start text-4xl sm:text-6xl'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }} // Se anima una sola vez cuando el div está al 50% en pantalla 
      >{t("about.title")}</motion.h2>
      <motion.p className='mt-10 text-lg text-start w-[90%]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }} // Se anima una sola vez cuando el div está al 50% en pantalla 
      >{t("about.resume")}
        </motion.p>
        <button
        onClick={() => setShowModal(true)}
        className="flex items-center rounded-3xl bg-lime-400 p-3 pl-5 text-black mt-6 space-x-2 hover:bg-[#93F203] w-[180px]"
      >
        <span>{t("about.button")}</span>
        <ArrowDownTrayIcon className="h-5 w-5" />
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <img
              src="./assets/certificado-ciberseguridad.jpeg"
              alt="Certificado"
              className="w-[350px] md:w-auto h-[200px] md:h-[600px]"
            />
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-lime-400 text-black p-2 rounded-md hover:bg-[#93F203]"
            >
              {t("about.modal")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 

export default About