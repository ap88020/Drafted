import express from 'express';
import { adminLogin, approvedCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from '../controllers/admin.controller.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router();

adminRouter.post("/login",adminLogin);
adminRouter.get("/comments",getAllComments);
adminRouter.get("/blogs",auth,getAllBlogsAdmin);
adminRouter.post("/delete-comment",auth,deleteCommentById);
adminRouter.post("/approved-comment",auth,approvedCommentById);
adminRouter.get("/dashboard",auth,getDashboard);

export default adminRouter;