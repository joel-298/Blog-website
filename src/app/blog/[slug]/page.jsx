import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";




// SEARCH ENGINE OPTIMIZATION
// WE CANNOT USE METADATA HERE : because 1st we will have to fetch the data and get title and description 
// SOLUTION : we are going to use GENERATEMETA : 
export const generateMetadata = async ({ params }) => {
    const {slug} = params ; 
    const post = await getPost(slug) ; 

    return {
        title: post.title,
        description: post.desc
    };
};


const SinglePostPage = async ({params}) => {

    // SINGLE OBJECT DATA FETCHING 
    const getData = async (slug) => {
        const res = await fetch(`http://localhost:3000/api/blog/${slug}`) ; 
        if(!res.ok){
            throw new Error("Something went wrong") ; 
        }
        else{
            return res.json() ; 
        }
    }
   
    const {slug} = params ;  // getting the params that will be written after /blog/posts/-> 1
    const obj = await getData(slug) ; // passing the params in the function t fetch data

    return (
        <>
            <div className={styles.container}>
                {obj.img && (
                    <div className={styles.imgContainer}>
                        <Image src={obj.img} alt="" fill className={styles.img} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{obj.title}</h1>
                    <div className={styles.detail}>
                        {obj && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <PostUser userId={obj.userId} />  {/*// passing a single id */}
                            </Suspense>
                        )}
                        <div className={styles.detailText}>
                            <span className={styles.detailTitle}>Published</span>
                            <span className={styles.detailValue}>
                                {obj.createdAt.toString().slice(4, 16)}
                            </span>
                        </div>
                    </div>
                    <div className={styles.content}>{obj.desc}</div>
                </div>
            </div> 
        </>
    )
}

export default SinglePostPage ;




// EXPLANATION : 
// 1) this link : `https://jsonplaceholder.typicode.com/posts/1` : here after writing 1 : this will fetch the 1st object from the API 
// 2) in by writing the link like this `https://jsonplaceholder.typicode.com/posts/${slug}` : this means the ${slug} will return the number and data present on the index will be fetched from the API

// 3) REACT SUSPENSE is used to show text while the original components are being fetched from the api 
