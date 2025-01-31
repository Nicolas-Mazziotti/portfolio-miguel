import React from 'react'

const Footer = () => {
  return (

<footer className="rounded-lg shadow bg-[#131212]  m-4 bg-black">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/assets/images/logo-abk-bg.png" className="h-8" alt="Logo abk karting" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ABK Karting</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href='' className="hover:underline me-4 md:me-6">Nosotros</a>
                </li>
                <li>
                    <a href='' className="hover:underline me-4 md:me-6">Comisión Directiva</a>
                </li>
                <li>
                    <a href='' className="hover:underline me-4 md:me-6">Reglamento</a>
                </li>
                <li>
                    <a href='' className="hover:underline me-4 md:me-6">Políticas de Privacidad</a>
                </li>
                <li>
                    <a href='' className="hover:underline">Contacto</a>
                </li>
            </ul>
        </div> */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025. Todos los Derechos Reservados.</span>
        <span className='block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400'>Desarrollado por <a href="https://solvantech.com/" className='text-white'>Solvantech</a></span>
    </div>
</footer>
  )
}

export default Footer