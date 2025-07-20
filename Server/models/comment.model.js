import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    blog : {type : mongoose.Schema.Types.ObjectId , ref : 'blog'},
    name : {type : String, required: true},
    content : {type : String , required : true},
    isApproved : {type : Boolean , default : false}
},{timeseries:true});


const Comment = mongoose.model('comment',commentSchema);

export default Comment;