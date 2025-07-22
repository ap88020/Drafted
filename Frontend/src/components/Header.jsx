import React, { useRef } from 'react'
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Header = () => {

  const {input,setInput} = useAppContext();
  
  const inputRef = useRef();
  const submitHandler = async (e)=>{
    e.preventDefault();
    setInput(inputRef.current.value);
  }
  const setClear = () => {
    setInput('');
    inputRef.current.value = '';
  }
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

        <form
          onSubmit={submitHandler} 
          className='flex items-center p-2 justify-between max-w-[35rem] mx-auto overflow-hidden border border-gray-400 bg-white rounded'>
            <input
              ref={inputRef} 
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
      <div className='text-center'>
        {
          input &&  <button onClick={setClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-slate-900 cursor-pointer'>Clear Search</button>
        }
      </div>
    </div>
  )
}

export default Header;
