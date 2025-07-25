import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const TableItems = ({ blog, fetchBlogs, index }) => {
  const { axios } = useAppContext();

  const { title,createdAt } = blog;    
  console.log(blog);
  const BlogDate = new Date(createdAt);

  const deleteBlog = async () => {
    const shouldDelete = window.confirm(
      'Once you delete, your blog will be permanently deleted.'
    );
    if (!shouldDelete) return;

    try {
      const { data } = await axios.post(`api/blog/delete/`, { id : blog._id });
        console.log(data);
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const tooglePublish = async () => {
    try {
      const { data } = await axios.post(`api/blog/toogle-publish`, { id: blog._id });
      console.log(data);

      if (data.success) {
        toast.success(data.message);
        await fetchBlogs(); // ✅ Refresh UI after toggling
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-500">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p className={blog.isPublished ? 'text-green-600' : 'text-red-600'}>
          {blog.isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>
      <td className="px-2 py-4 flex text-xs gap-3">
        <button
          onClick={tooglePublish}
          className={`border px-2 py-0.5 mt-1 rounded cursor-pointer ${
            blog.isPublished ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
          }`}
        >
          {blog.isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img
          onClick={deleteBlog}
          src={assets.cross_icon}
          alt="Delete"
          className="w-8 cursor-pointer hover:scale-105 transition-all"
        />
      </td>
    </tr>
  );
};

export default TableItems;
