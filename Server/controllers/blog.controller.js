import fs from 'fs';
import Blog from '../models/blog.models.js';
import imagekit from '../config/imageKit.js';
import Comment from '../models/comment.model.js';
import main from '../config/gemni.js'

export const addBlog = async (req, res) => {
  try {

    const { title, subTitle, description, category , isPublished} = JSON.parse(req.body.blog);
    const imageFile   = req.file;

    if (!title || !description || !category || !imageFile) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
        file: fileBuffer,
        fileName: imageFile.originalname,
        folder:"/blogs"
    })

    const optimizedImageUrl = imagekit.url({
        path: response.filePath,
        transformation:[
            {quality:'auto'},
            {format:'webp'},
            {width:'1280'}
        ]
    })

    const image = optimizedImageUrl;

    await Blog.create({title,subTitle,description,category,image, isPublished});

    res.status(200).json({success:true, message:'Blog added successfully'});
    

  } catch (err) {
    res.status(401).json({ success: false, message: err.message });
  }
};

export const getAllBlog = async (req,res) => {
  try {
    const blogs = await Blog.find({isPublished : true});

    res.status(200).json({success:true,blogs});

  } catch (err) {
    res.status(401).json({message:err.message});
  }
}

export const getBlogById = async (req,res) => {

  try {
    const {blogId} = req.params;
    
    if(!blogId){
      return res.status(400).json({success:false, message:"Id is missing"});
    }

    const blog = await Blog.findById(blogId);

    res.status(200).json({success:true, blog});

  } catch (error) {
    res.status(400).json({success:false, message:error.message});
  }

}

export const deleteById = async (req,res)=>{
  try {
    const { id } = req.body;
    if(!id){
      return res.status(401).json({success:false, message:"blogId is missing"});
    }
   const deleteBlog =  await Blog.findByIdAndDelete(id);

   if(!deleteBlog){
      return res.status(401).json({success:false, message:"blog not found"});
   }

  //  console.log(deleteBlog);
    await Comment.deleteMany({blog: id});

    res.status(200).json({success : true , message:"blog deleted successfully"});

  } catch (err) {
    res.status(400).json({success:false , message:err.message});
  }
}

export const tooglePublish = async (req,res) => {
  try {

    const { id } = req.body;
    const blog  = await Blog.findById(id);


    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    blog.isPublished = !blog.isPublished;
    await blog.save();
    
    res.status(200).json({success:true , message:"Blog status updated"});
    
  } catch (err) {
    res.status(400).json({success:false,message:err.message});
  } 
}

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;

    if (!blog || !name || !content) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    await Comment.create({ blog, name, content });

    res.status(200).json({ success: true, message: "Comment added for review" });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


export const getBlogComments = async (req,res) => {
  try {
    const {blogId} = req.body;
    const comments = await Comment.find({blog : blogId, isApproved:true}).sort({createdAt:-1});

    res.status(200).json({success:true,comments});

  } catch (error) {
    res.status(400).json({success:false,message:err.message});
    
  }
}

export const generateContent = async (req,res) => {
  try {
    const {prompt} = req.body;
    const content = await main(prompt+ 'Generate a blog content for this topic in siple text format'); 
    
    res.status(200).json({ success: true, content });

  } catch (error) {
    res.status(500).json({success:false, message:error.message});
    console.log(error)
  }
}
