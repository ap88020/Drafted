import ImageKit from '../config/imageKit.js';
import fs from 'fs'
import Blog from '../models/blog.models.js';

export const addBlog = async (req,res) => {
    try {
        const {title , subTitle , description ,category, isPublished} = req.body;
        const imageFile = req.file;

        if(!title || !description || !category || imageFile){
            return res.json({succeess : true , message : "Missing required fields"});
        }

        const imageBuffer = fs.readFileSync(imageFile.path);

        const response = await ImageKit.upload({
            file : imageBuffer,
            fileName : imageFile.originalname,
            folder :"/blogs"

        });

        const optimizedImageUrl = ImageKit.url({
            path : response.filePath,
            transformation : [
                {quality : 'auto'},
                {format : 'webp'},
                {width : '1280'}
            ] 
        })

        const image = optimizedImageUrl;

        await Blog.create({title,subTitle,description,category,image,isPublished});

        res.json({succeess : true , message : "Blog added successfully"});
        
    } catch (error) {
        res.json({success : false , message : error.message});
    }
}