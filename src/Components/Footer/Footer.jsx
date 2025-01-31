import React from 'react'

const Footer = () => {
  return (

<footer className="rounded-lg shadow bg-[#131212]  m-4 bg-black">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025. Todos los Derechos Reservados.</span>
        <span className='block text-center text-sm text-gray-500 sm:text-center dark:text-gray-400'>Desarrollado por <a href="https://solvantech.com/" className='text-white'>Solvantech</a></span>
    </div>
</footer>
  )
}

export default Footer