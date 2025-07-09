import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import TableItems from '../../components/TableItems'

export const Dashboard = () => {
  const [dashBoardData, setDashBoardData] = useState({
    blogs : 0,
    drafts : 0,
    comments : 0,
    recentBlogs : [],
  })

  const fetchDashboard = () => {
    setDashBoardData(dashboard_data)
  } 

  useEffect(() => {
    fetchDashboard();
  }, [])
  
  return (
    <div className='flex-1 p-3 md:p-10 md:bg-blue-50/50'>
      <div className='flex flex-wrap gap-4'>  
        <div className='flex justify-center text-center gap-3 bg-white p-4 px-5 rounded min-w-56 hover:scale-105 transition-all shadow cursor-pointer'>
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className='text-gray-600 font-semibold text-xl'>{dashBoardData.blogs}</p>
            <p className='text-gray-400 font-light'>Blog</p>
          </div>
        </div>
        <div className='flex justify-center text-center gap-3 bg-white p-4 px-5 rounded min-w-56 hover:scale-105 transition-all shadow cursor-pointer'>
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className='text-gray-600 font-semibold text-xl'>{dashBoardData.drafts}</p>
            <p className='text-gray-400 font-light'>Draft</p>
          </div>
        </div>
        <div className='flex justify-center text-center gap-3 bg-white p-4 px-5 rounded min-w-56 hover:scale-105 transition-all shadow cursor-pointer'>
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className='text-gray-600 font-semibold text-xl'>{dashBoardData.comments}</p>
            <p className='text-gray-400 font-light'>Blog</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex items-center gap-4 mt-6 text-gray-600 mb-2'>
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>
        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
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
                {dashBoardData.recentBlogs.map((blog,index) => {
                  return <TableItems key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1} /> 
                })}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}
