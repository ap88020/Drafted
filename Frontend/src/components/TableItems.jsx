import React from 'react'
import { assets } from '../assets/assets';

const TableItems = ({blog, fetchBlogs, index}) => {

    const {title , createdAt} = blog;
    const BlogDate = new Date(createdAt);

  return (
    <tr className='border-y border-gray-500'>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4'>{title}</td>
        <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
        <td className='px-2 py-4 max-sm:hidden'>
            <p 
                className={`${blog.isPublished ? 'text-green-600' : 'text-red-600'}`}
            >{blog.isPublished ? 'Published' : 'Unpublished'}</p>
        </td>
        <td className='px-2 py-4 flex text-xs gap-3'>
            <button
                className='border px-2 py-0.5 mt-1 rounded cursor-pointer'
            >
                {blog.isPublished ? 'Unpublished' : 'Published'}
            </button>
            <img src={assets.cross_icon} alt="" className='w-8 cursor-pointer hover:scale-105 transition-all' />
        </td>
    </tr>
  )
}

export default TableItems