import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets';
import CommentTableItem from './CommentTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';


export const Comments = () => {
  const [comments , setComments] = useState([]);
  const [filter , setFilter] = useState('Not Approved')

  const {axios} = useAppContext();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/admin/comments');
      data.success ? setComments(data.comments) : toast.error(data.message);
      // console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchComments();
  }, [])
  

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-12 bg-blue-50/50'>
      <div className='flex justify-between items-center max-w-3xl'>
      <h1>Comments</h1>
        <div className='flex gap-4'>

          <button onClick={()=>setFilter('Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${ filter === 'Approved' ? 'text-purple-400' : 'text-gray-500' }`} >Approved</button>

          <button onClick={()=>setFilter('Not Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${ filter === 'Not Approved' ? 'text-purple-400' : 'text-gray-500' }`} >Not Approved</button>

        </div>
      </div>

      <div className='relative h-4/5 max-w-3xl overflow-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 text-left uppercase'>
            <tr>
              <th scope='col' className='px-6 py-3'>Blog Title & Comment</th>
              <th scope='col' className='px-6 py-3 max-sm:hidden'>Date</th>
              <th scope='col' className='px-6 py-3'>Action</th> 
            </tr>
          </thead>
          <tbody>
            {comments
              .filter(c =>
                filter === 'Approved' ? c.isApproved : !c.isApproved  
              )
              .map((comment, idx) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  index={idx + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}
