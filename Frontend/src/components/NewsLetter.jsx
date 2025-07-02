import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center space-y-2 my-12'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a blog!</h1>
        <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest blog, new tech, and exclusive news. </p>
    <form className='flex items-center p-2 justify-between max-w-2xl w-full mx-auto overflow-hidden border border-gray-400 bg-white rounded'>
        <input 
            type="email" 
            name="email"
            aria-label="Email address"
            placeholder="Enter your email address"
            required
            className='w-full h-full px-4 py-2 outline-none' 
        />
        <button 
            type='submit' 
            className='px-4 py-2 bg-purple-500 text-white hover:bg-purple-600 transition hover:scale-95'
        >
            Subscribe
        </button>
    </form>

    </div>

  )
}

export default NewsLetter