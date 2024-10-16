import Link from "next/link";
import Image from "next/image";
import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";



const PostUser = async ({userId}) => {

    // FETCH SINGLE USER'S DATA 
    // const getData = async (userId) => {
    //     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` , {cache:"no-store"}) ;
    // }
    const user = await getUser(userId) ; 


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={user.img ? user.img : "/noavatar.png"} alt="" width={50} height={50} className={styles.avatar} />
      </div>
      <div className={styles.texts}>
        <span className={styles.title}>Aurthor</span>
        <span className={styles.username}>{user.username}</span>
      </div>      
    </div>
  )
}

export default PostUser
