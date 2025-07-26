import express from "express";
import { addBlog, addComment, deleteById, generateContent, getAllBlog, getBlogById, getBlogComments, tooglePublish } from "../controllers/blog.controller.js";
import upload from "../middleware/multer.middleware.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add",upload.single('image'),auth,addBlog);
blogRouter.get('/all',getAllBlog);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete',auth,deleteById);  
blogRouter.post('/toogle-publish',auth,tooglePublish);

blogRouter.post('/add-comment',addComment);
blogRouter.post('/comments',getBlogComments);

blogRouter.post('/generate',auth,generateContent);

export default blogRouter;