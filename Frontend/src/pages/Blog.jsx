import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import moment from 'moment';
import Loader from '../components/Loader';
const Blog = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  
  const fetchBlogData = async ()=>{
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  }

  const fetchCommentsData = async () => {
    setComments(comments_data);
  }

  const addComment = async (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    fetchBlogData();
    fetchCommentsData();
  }, []);

  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} className='absolute -top-52 -z-10 opacity-50' />
      <Navbar/>
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-purple-400 py-4 font-medium'>Published on {moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <p className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800 '>{data.title}</p>
        <p className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</p>
        <p className='inline-block py-1 px-4 rounded-full text-sm border border-purple-400/35 bg-purple-400/35'>John Doe</p>
      </div>

      <div className='mx-5 md:mx-auto max-w-5xl my-10 mt-6'>
        <img src={data.image} alt="" className='rounded-3xl mb-5'/>
        <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html: data.description }}></div>
        {/* commetns section */}
        <div className='mt-14 mb-10 max-w-5xl mx-auto'>
          <p className='font-semibold mb-4'>Comments {comments.length}</p>
          <div className='flex flex-col gap-4'>
              {comments.map((item,index) => (
                <div key={index} className='relative bg-purple-400/5 border border-purple-400/15 max-w-xl p-4 text-gray-600'>
                  <div className='flex items-center gap-2 mb-2'>
                    <img src={assets.user_icon} alt="" className='w-6' />
                    <p className='font-medium' >{item.name}</p>  
                  </div>
                  <p className='text-sm max-w-md ml-8'>{item.content}</p>
                  <p className='absolute right-3 bottom-3 flex items-center gap-2 text-xs'>{moment(item.createdAt).fromNow()}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* add comments */}
      <div className='max-w-3xl mx-auto'>
        <p className='font-semibold mb-4'>Add your comments</p>
        <form onSubmit={addComment} className=' flex flex-col  gap-4 max-w-lg mb-4'>
            <input onChange={(e) => setName(e.target.value)} type="text" name="" placeholder='Name' required className='p-2 border border-gray-300 rounded w-full outline-none ' />
            <textarea onChange={(e) => setContent(e.target.value)} name="comment" placeholder='Comment...' className='w-full p-2 border border-gray-300 text-gray-950 h-48 rounded outline-none hover:scale-105 transition-all cursor-pointer mb-3'></textarea>
            <button type='submit' className='max-w-40 rounded outline-none p-2 border border-purple-400 text-white hover:scale-105 transition-all cursor-pointer px-8 bg-purple-600'>Submit</button>
        </form>
      </div>
      {/* share button */}
      <div className='my-24 max-w-3xl mx-auto'>
        <p className='font-semibold my-4'>share this artical on social media</p>
        <div className='flex'>
            <img src={assets.facebook_icon} alt="" width={50}  className='cursor-pointer' />
            <img src={assets.twitter_icon} alt="" width={50} className='cursor-pointer' />
            <img src={assets.googleplus_icon} alt="" width={50} className='cursor-pointer' />
        </div>
      </div>

        < Footer />
    </div>
  ) : (
    < Loader />
  )
}

export default Blog