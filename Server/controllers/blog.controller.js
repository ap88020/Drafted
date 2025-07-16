import fs from 'fs';
import Blog from '../models/blog.models.js';
import imagekit from '../config/imageKit.js';

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

    res.json({success:true, message:'Blog added successfully'});
    

  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
