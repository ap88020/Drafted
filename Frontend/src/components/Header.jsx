import React from 'react'
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative overflow-hidden'>
      
      {/* Background image */}
      <img 
        src={assets.gradientBackground} 
        alt="background" 
        className='absolute top-1/2 left-1/2 w-full max-w-none -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50' 
      />

      <div className='text-center mt-20 mb-8'>
        <div className='inline-flex justify-center items-center px-6 py-1.5 gap-4 mb-4 border border-purple-400/40 bg-purple-400/40 text-sm text-purple-600 rounded-full '>
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} alt="star_icon" className='w-2.5' />
        </div>
        
        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-tight text-gray-700'>
          Your own <span className='text-purple-500'>blogging</span> <br /> platform.
        </h1>

        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs'>
          Welcome to your personal blogging space.  
          Share your thoughts, ideas, and stories with the world.  
          Powered by modern design and AI-enhanced features.
        </p>

        <form className='flex items-center p-2 justify-between max-w-[35rem] mx-auto overflow-hidden border border-gray-400 bg-white rounded'>
            <input 
              type="text" 
              name="search"
              aria-label="Search for blogs"
              placeholder="Search for blogs"
              className='w-full h-full p-2 outline-none' 
            />
            <button className='px-4 py-2   bg-purple-500 text-white hover:bg-purple-600 transition hover:scale-90 '>
              Search
            </button>
          </form>
       
      </div>
    </div>
  )
}

export default Header;
