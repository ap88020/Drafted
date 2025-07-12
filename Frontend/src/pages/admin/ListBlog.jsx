import React, { useEffect, useState } from 'react'

import { blog_data } from '../../assets/assets';
import TableItems from '../../components/TableItems';

export const ListBlog = () => {
  const [blogs, setBlog] = useState([]);

  const fetchBlogs = async () => {
    setBlog(blog_data);
  }

  useEffect(() => {
    fetchBlogs();
  }, [])
  

  return (
    <div className='flex flex-col w-full pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1 className='font-medium'>All blogs</h1>
      <div className='relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white mt-4'>
            <table className='w-full text-sm text-gray-600'>
              <thead className='text-xs text-gray-600 text-left uppercase'>
                <tr>
                  <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                  <th scope='col' className='px-2 py-4' >Blog Title</th>
                  <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                  <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                  <th scope='col' className='px-2 py-4' >Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog,index) => {
                  return <TableItems key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} /> 
                })}
              </tbody>
            </table>
        </div>

    </div>
  )
}
