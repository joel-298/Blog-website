import mongoose from "mongoose" ; 

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        min:3,
        max:30
    },
    email:{
        type:String,
        require:true,
        unique:true,
        max:30 
    },
    password:{
        type:String,
        require:true,
        unique:true,
        min:6,
        max:30 
    },
    img:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true}) ; 



const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
    },
    img:{
        type:String
    },
    userId:{
        type:String,
        required:false
    },
    slug:{
        type:String,
        required:false,
        unique:true
    }
},{timestamps:true}) ; 



// if we already have USER or POST then use the existing one if not then create a new one .....
export const User = mongoose.models?.User || mongoose.model("User",userSchema) ; 
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema) ; 