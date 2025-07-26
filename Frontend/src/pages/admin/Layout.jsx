import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar';

export const Layout = () => {
    const navigate = useNavigate();

    const logout = async () => {
      localStorage.removeItem('token');
      navigate('/admin');
      window.location.reload();
    }

  return (
    <>
        <div className='flex items-center justify-between py-2 px-4 h-[70px] sm:px-12 border-b border-gray-300'>
            <img onClick={()=>navigate('/')} src={assets.new_logo} alt="logo" className='w-32 sm:w-40 cursor-pointer ' />
            <button onClick={logout} className='text-sm px-8 py-2 bg-purple-400 rounded-full cursor-pointer' >Logout</button>
        </div>
        <div className='flex h-[calc(100vh - 70px)]'>
            < Sidebar />
            <Outlet />
        </div>
    </>
  )
}
