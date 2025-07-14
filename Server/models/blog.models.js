import mongoose from "mongoose";


const blogSChema = new mongoose.Schema ({
    title : {type : String , requred : true},
    subTitle : {type : String },
    description : {type : String , requred : true},
    category : {type : String, required : true},
    image : {type : String , required : true},
    isPublished : {type : String , required : true}
},{timestamps : true});

const Blog = mongoose.model('blog',blogSChema);

export default Blog;