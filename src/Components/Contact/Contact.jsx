import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from '../Spinner/Spinner';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';


const Contact = () => {

  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });    
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Por favor, completa el reCAPTCHA.');
      return;
    }
    setIsLoading(true)
    console.log(formData)
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;   

    emailjs
      .send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, publicKey)
      .then((response) => {
        console.log('Email enviado:', response.text);
        // alert('Email enviado correctamente');
        setIsLoading(false)
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
      }, 5000);
        setFormData(initialFormData)
        setCaptchaValue(null);
        
      })
      .catch((error) => {
        console.error('Error al enviar el email:', error);
        alert('Error al enviar el email');
      });


  };

  const { t } = useTranslation()
  return (
    <div
      id='contact'
      className="bg-black p-4  h-[90vh] md:h-[90vh] flex justify-center items-center w-[100%] bg-[url('/assets/contact-image-background2.png')] bg-cover bg-no-repeat bg-center  md:bg-[length:700px_620px]">
      <div className="flex flex-col h-[80vh] p-5 md:pt-36 md:pb-36 md:flex-row justify-around items-center w-full border rounded bg-[url('/assets/contact-chat-background2.png')]  bg-no-repeat bg-center bg-[length:300px_220px]"> {/* Centra el contenido y ajusta el ancho */}
        <motion.div className="text-center md:text-start mb-6 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl text-white">{t("contact.title")}</h2>
          <h3 className='text-3xl sm:text-4xl font-sans text-white'>{t("contact.title2")}</h3>
          <p className="text-white mt-4">{t("contact.subtitle")}</p>
          <div className='flex gap-2 mt-4'>
            <svg aria-hidden="true" className="w-[15px] fill-lime-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
            <p className='text-white font-bold'>{t("contact.available")}</p>
          </div>
        </motion.div>
        <motion.div className="flex flex-col space-y-4 w-full max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <div className='flex gap-5'>
              {/* Primer input */}
              <div>
                <label htmlFor="name" className="text-start text-white block mb-1">{t("contact.form.name")}</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-md"
                  placeholder={t("contact.placeholder.name")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Segundo input */}
              <div>
                <label htmlFor="email" className="text-start text-white block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md"
                  placeholder={t("contact.placeholder.email")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Tercer input */}
            <div>
              <label htmlFor="message" className="text-start text-white block mb-1">{t("contact.form.message")}</label>
              <textarea
                id="message"
                className="w-full p-2 border rounded-md"
                rows="4"
                placeholder={t("contact.placeholder.message")}
                value={formData.message}
                  onChange={handleChange}
                  required
              ></textarea>
            </div>

            {/* reCAPTCHA */}
            <div className="mt-4">
              <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_KEY} onChange={handleCaptchaChange} />
            </div>

            {isLoading && <Spinner />}
            {successMessageVisible && (
                    <div className="text-green-500 font-bold mt-4">
                        MENSAJE ENVIADO EXITOSAMENTE
                    </div>
                )}
            <button type="submit" className='w-[150px] rounded-3xl bg-lime-500 p-3 pl-4 text-black mt-6 space-x-2 hover:bg-white'>ENVIAR</button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
