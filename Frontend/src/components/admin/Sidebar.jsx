import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r-2 border-gray-100 pt-6 min-h-screen'>
        <NavLink end={true} to='/admin' className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 md:max-w-64 cursor-pointer ${isActive && "bg-purple-100  border-r-4 border-purple-300 "}`}>
            <img src={assets.home_icon} alt=""  className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Dashbord</p>
        </NavLink>

        <NavLink to='/admin/addBlog' className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 md:max-w-64 cursor-pointer ${isActive && "bg-purple-100  border-r-4 border-purple-300 "}`}>
            <img src={assets.add_icon} alt=""  className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Add Blog</p>
        </NavLink>

        <NavLink  to='/admin/listBlog' className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 md:max-w-64 cursor-pointer ${isActive && "bg-purple-100  border-r-4 border-purple-300 "}`}>
            <img src={assets.list_icon} alt=""  className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Blog List</p>
        </NavLink>

        <NavLink end={true} to='/admin/comments' className={({isActive}) => `flex items-center gap-5 py-3.5 px-3 md:px-9 md:max-w-64 cursor-pointer ${isActive && "bg-purple-100  border-r-4 border-purple-300 "}`}>
            <img src={assets.comment_icon} alt=""  className='min-w-4 w-5' />
            <p className='hidden md:inline-block'>Comments</p>
        </NavLink>
    </div>
  )
}

export default Sidebar