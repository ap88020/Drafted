import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill';
import {useAppContext} from '../../context/AppContext';
import toast from 'react-hot-toast';
import {parse} from 'marked';

export const AddBlog = () => {
  const {axios} = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image , setImage] = useState(false);
  const [title , setTitle] = useState('');
  const [subTitle , setSubTitle] = useState('');
  const [category , setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {
  if (!title) return toast.error("Please enter a title");

    try {
      setLoading(true); 
      const { data } = await axios.post('/api/blog/generate', { prompt: title });

      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message || "Failed to generate content");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
};


  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog = {
        title,
        subTitle,
        description:quillRef.current.root.innerHTML,
        category,
        isPublished
      }

      const formData = new FormData();
      formData.append('blog',JSON.stringify(blog));
      formData.append('image',image);

      const {data} = await axios.post(`api/blog/add`,formData);
      console.log(data);
      
      if(data.success){
        toast.success(data.message);
        setImage(false);
        setTitle('');
        quillRef.current.root.innerHTML='' 
        setCategory('Startup');
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current , {theme : 'snow'});
    }
  },[]);

  return (
    <form onSubmit={submitHandler} className='flex bg-blue-50/50 h-full w-full text-gray-600 overflow-scroll' >
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 md:m-10 shadow rounded' >
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img 
            src={!image ? assets.upload_area : URL.createObjectURL(image)} 
            alt="image" 
            className='mt-2 h-16 rounded cursor-pointer'
          />
          <input 
            onChange={(e)=> setImage(e.target.files[0])}
            type="file"
            id='image'
            hidden 
            required
          />
        </label>
        <p className='mt-4'>Blog Title</p>
        <input 
          type="text" 
          placeholder='Type here' 
          required
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={e => setTitle(e.target.value)}
          value={title}   
        />

        <p className='mt-4'>Sub Title</p>
        <input 
          type="text" 
          placeholder='Type here' 
          required
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={e => setSubTitle(e.target.value)}
          value={subTitle}   
        />

        <p className='mt-4'>Blog Description</p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          <div ref={editorRef}     className='h-64 w-full border border-gray-300 rounded bg-white overflow-y-auto'></div>
          {loading && <div className='absolute bottom-0 right-0 left-0 top-0 flex items-center justify-center bg-black/10'>
            <div className='w-8 h-8 rounded-full border-2 border-t-white animate-spin'></div>
          </div>}
          <button 
            disabled={loading}
            type='button' 
            onClick={generateContent} 
            className='absolute bottom-1 right-1 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer' 
          >Generate with Ai
          </button>
        </div>

        <p className='mt-4'>Blog catogery</p>
        <select name="category" className='mt-2 px-3 py-2 border text-gray-500 border-gray-600 outline-none rounded'
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="" >Select Catogery</option>
          {blogCategories.map((item,idx) => {
            return <option value={item} key={idx} > {item} </option>
          })}
        </select>

        <div>
          <p className='flex gap-2 mt-4  ' >Publish Now</p>
          <input type="checkbox" checked={isPublished} className='scale-125 cursor-pointer' onChange={e => setIsPublished(e.target.checked)}/>
        </div>
        <button disabled={isAdding} type='submit' className='mt-8 w-40 h-10 bg-purple-400 text-white rounded cursor-pointer text-sm'>{isAdding ? 'Adding...' : 'Add Blog'} </button>
      </div>
    </form>
  )
}
