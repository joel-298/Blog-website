"use server"

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";        // importing database
import { signIn } from "./auth";
// import { signIn, signOut } from "./auth";
// import bcrypt from "bcryptjs";

// if we are using server actions then our function needs to be async wether we are returning a async event or not 
export const addPost = async (formData) => { // formData is going to be an object which will contin each and every element from form while CREATING POST

    const {title , desc , slug , userId } = Object.fromEntries(formData) ;

    try {
        connectToDb() ;
        const newPost = new Post({                   // import this too 
            title , desc , slug , userId
        });
        await newPost.save() ;                         // Saving in database
        console.log("saved to db");
        revalidatePath("/blog");                    // when ever we add a new post its going to revalidate to our blog page which will get refresh and update the data 
        // revalidatePath("/admin"); 

    } catch(err) {
        console.log(err) ; 
        return {error : "Something went wrong !"} ;
    }
}

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData) ; 

    try {
        connectToDb() ; 
        await Post.findByIdAndDelete(id);
        console.log("Deleted from db") ; 
        revalidatePath("/blog") ; 
    } catch (err) {
        console.log("deleted from db") ; 
        return {error : "Something went wrong"} ; 
    }
}






export const handleGithubLogin = async () => {
    // "use server"
    await signIn("github") ;
}

export const handleLogout = async () => {
    // "use server"
    await signOut() ;
}