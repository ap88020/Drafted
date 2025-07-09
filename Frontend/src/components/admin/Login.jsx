import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault();
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-sm max-md:m-6 border border-purple-400/30 shadow-xl shadow-purple-500/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full text-center py-6'>
            <h1 className='font-bold text-3xl'><span className='text-purple-500/50'>Admin</span> Login</h1>
            <p className='font-light'>Enter your credentials to access the admin panel </p>
          </div>
          <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600 p-4'>
              <div className='flex flex-col'>
                <label>Email</label>
                <input
                  onChange={e=>setEmail(e.target.value)} value={email} 
                  type="email" name="email" required placeholder='your email' className='border-0 border-b-2 text-gray-600 p-2 mb-6 outline-none' />
              </div>
              <div className='flex flex-col'>
                <label>Password</label>
                <input
                  onChange={e=>setPassword(e.target.value)} value={password} 
                  type="password" name="email" required placeholder='your password' className='border-0 border-b-2 text-gray-600 p-2 mb-6 outline-none' />
              </div>
              <button type="submit" className='w-full mb-2 bg-purple-500/25 rounded-lg p-2 hover:bg-purple-500/40 text-black transition-all  '>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login