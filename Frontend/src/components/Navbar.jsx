import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
    // const navigate = useNavigate();
    const {navigate , token} = useAppContext();
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <img 
            onClick={()=> navigate('/')} 
            src={assets.logo}
            alt="logo" 
            className='w-3 sm:w-44 cursor-pointer'
        />

        <button
         onClick={()=> navigate('/admin')}
         className='bg-purple-400 text-white flex items-center px-6 py-2  rounded-full gap-2 cursor-pointer'>
          {token ? 'Dashboard' : 'Login'}
          <img src={assets.arrow} alt="arrow" className='w-3' />
        </button>
    </div>
  )
}

export default Navbar