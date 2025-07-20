import jwt from 'jsonwebtoken'
import Blog from '../models/blog.models.js';
import Comment from '../models/comment.model.js';
export  const adminLogin = async (req,res) => {
    try {
        const {email , password} = req.body;

        if(!email || !password) {
            return res.json({success : false , message : "email or password required"});
        }

        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({success : false , message : "Invalid credentials"});
        }

        const token = jwt.sign({email} , process.env.JWT_SECRET)

        return res.json({success : true , token : token});

    } catch (error) {
        console.log(error);
        res.json({
            success : false,
            message : error.message
        })
    }
}

export const getAllBlogsAdmin = async (req,res) =>  {
  try {
    const blogs = await Blog.find({}).sort({createdAt : -1});
    res.status(200).json({success:true,blogs})       
  } catch (error) {
    res.status(400).json({success:false,message:err.message});
  }
}

export const getAllComments = async (req,res) => {
    try {
        const comments = await Comment.find({}).populate('blog').sort({createdAt:-1});

        res.status(200).json({success:true,comments});

    } catch (error) {
        res.status(400).json({success:false,message:err.message});
    }
}

export const getDashboard = async (req,res) => {
    try {
        const recentBlogs = await Blog.find({}).sort({createdAt:-1}).limit(5);
        const blogs = await Blog.countDocuments();
        const comments = await Comment.countDocuments();
        const drafts = await Blog.countDocuments({isPublished:false});

        const dashboardData = {
            recentBlogs, blogs, comments, drafts
        }

        res.status(200).json({success:true,dashboardData});

    } catch (error) {
        res.status(400).json({success:false,message:err.message});
    }
}

export const deleteCommentById = async (req,res) => {
    try {
        const {id} = req.body;
        await Comment.findByIdAndDelete(id);
        res.staus(200).json({success:true,message:"Comment deleted successfully"});
    } catch (error) {
        res.status(400).json({success:false,message:err.message});
    }
}

export const approvedCommentById = async (req,res) => {
    try {
        const {id} = req.body;
        await Comment.findByIdAndUpdate(id,{isApproved:true});
        res.status(200).json({success:true,message:"Comment approved successfully"});
    } catch (error) {
        res.status(400).json({success:false,message:err.message});
    }
}