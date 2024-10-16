import Link from "next/link" ; 
import Image from "next/image" ; 
import styles from "./blog.module.css" ;
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
    
    // DATA FETCHING : 
    const getData = async () => {
        const res = await fetch("http://localhost:3000/api/blog" , {next:{revalidate:3600}}  ) ; // ------(3) , {cache: "no-store"} // (4)
    
        if(!res.ok) {
            throw new Error("Something went wrong"); 
        }
        else{
            return res.json() ; 
        }
    
    }
    const posts = await getData() ;

   

    return (
        <div className={styles.container}>
            {posts.map(ele => (
                <div className={styles.post} key={ele.id}>
                    <PostCard post={ele}/> 
                </div>
            ))}
        </div>
    )
}

export default BlogPage ; 




// 1) In this blogpage element we are going to pass the object of POSTCARD received from api to the element <PostCard/>
// 2) And in the element <PostCard/> we are going to accss it through variable 'post' : post.image , post.title, etc ....
// 3) {cache: "no-store"} // means refreshing data every time we leave the page and visit it again because it works for the sidte that updates the api reguraly 
// 4) {next{revalidate:3600}} // measnig refreshing data after every one hour
