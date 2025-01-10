import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-[#6805F1] p-4  h-[90vh] md:h-[90vh] flex justify-center items-center w-[100%] bg-[url('/assets/contact-image-background.png')] bg-cover bg-no-repeat bg-center  md:bg-[length:700px_620px]">
      <div className="flex flex-col h-[80vh] p-5 md:pt-36 md:pb-36 md:flex-row justify-around items-center w-full border rounded bg-[url('/assets/contact-chat-background.png')]  bg-no-repeat bg-center bg-[length:300px_220px]"> {/* Centra el contenido y ajusta el ancho */}
        <motion.div className="text-center md:text-start mb-6 md:mb-0"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl text-white">¿Buscando trabajar</h2>
          <h3 className='text-3xl sm:text-4xl font-sans text-white'>juntos?</h3>
          <p className="text-white mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, error.</p>
          <div className='flex gap-2 mt-4'>
          <svg aria-hidden="true" className="w-[15px] fill-lime-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
          <p className='text-white font-bold'>DISPONIBLE PARA TRABAJAR</p>
          </div>          
        </motion.div>
        <motion.div className="flex flex-col space-y-4 w-full max-w-sm"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.5 }}        
        >
            <div className='flex gap-5'>
                {/* Primer input */}
          <div>
            <label htmlFor="name" className="text-start text-white block mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              placeholder="Ingresa tu nombre"
            />
          </div>
          {/* Segundo input */}
          <div>
            <label htmlFor="email" className="text-start text-white block mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              placeholder="Ingresa tu email"
            />
          </div>
            </div>
          
          {/* Tercer input */}
          <div>
            <label htmlFor="message" className="text-start text-white block mb-1">Message</label>
            <textarea
              id="message"
              className="w-full p-2 border rounded-md"
              rows="4"
              placeholder="Escribe un mensajedr"
            ></textarea>
          </div>
          <button className='rounded-3xl bg-lime-500 p-3 pl-5 text-black mt-6 space-x-2 hover:bg-white'>ENVIAR</button>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Contact;
