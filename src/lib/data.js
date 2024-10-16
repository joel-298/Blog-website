import {Post, User} from "./models" ; 
import { connectToDb } from "./utils";
import {unstable_noStore as noStore} from "next/cache" ;


export const getPosts = async () => {
    try {
        connectToDb() ; 
        const posts = await Post.find() ; 
        return posts ; 
    } catch(err) {
        console.log(err) ; 
        throw new Error("Failed to fetch POSTS !") ;
    }
};
export const getPost = async (slug) => {
    try {
        connectToDb() ; 
        const post = await Post.findOne({slug}) ; 
        return post ; 
    } catch(err) {
        console.log(err) ; 
        throw new Error("Failed to fetch Post !") ;
    }
};



export const getUsers = async () => {
    try {
        connectToDb() ; 
        const users = await User.find() ; 
        return users ; 
    } catch(err) {
        console.log(err) ; 
        throw new Error("Failed to fetch USERS !") ;
    }
};
export const getUser = async (id) => {
    noStore() ; // not going to cache anymore i dont know why we are using this 
    try {
        connectToDb() ; 
        const user = await User.findById(id) ; 
        return user ; 
    } catch(err) {
        console.log(err) ; 
        throw new Error("Failed to fetch User !") ;
    }
};