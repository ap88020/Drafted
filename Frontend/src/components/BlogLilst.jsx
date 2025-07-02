import React, { useState } from 'react'
import {blog_data, blogCategories} from '../assets/assets'
import {motion} from 'motion/react'
import BlogCard from './BlogCard';

const BlogLilst = () => {
    const [menu, setMenu] = useState('All');
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative w-fit mx-auto px-4 py-2 rounded'>
            {blogCategories.map((e) => (
                <div key={e} className='relative font-bold'>
                    <button
                        onClick={()=> setMenu(e)} 
                        className={`cursor-pointer  ${menu === e && 'px-4 pt-0.5 text-white'} `}>
                        {e}

                        {menu === e && (
                            <motion.div layoutId="underline"
                                transition={{type:'spring',stiffness:600, damping:60}}
                                className='absolute left-0 top-0 right-0 h-7 -z-10 rounded-full bg-purple-400'>
                            </motion.div>
                        )}
                    </button>
                </div>
            ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16'>
            {blog_data.filter((blog) => menu == 'All' ? true : blog.category == menu).map((blog) => < BlogCard key={blog._id} blog={blog} />)}
        </div>
    </div>
  )
}

export default BlogLilst