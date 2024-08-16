import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    
    <footer className='bg-blue-600 text-white p-4 shadow-md mt-6 bottom-0 w-full fixed text-center'>
      <Link to={'https://github.com/Paulo-Borges?tab=repositories'} target="_blank" className='text-2xl font-semibold'>&copy; Borges 2024</Link>

    </footer>
    
  )
}

export default Footer
