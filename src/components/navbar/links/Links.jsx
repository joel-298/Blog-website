"use client";
import Link  from "next/link" ;
import { useState } from "react" ;
import Image from "next/image" ; 
import NavLink from "./navLink/navLink"; 
import styles from "./links.module.css";
import { handleLogout } from "@/lib/actions";

const Links = ({session}) => {

    const [open,setOpen] = useState(false) ; 

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ]

    // TEMPORARY
    const isAdmin = true ; 

  return (
    <div className={styles.container}>
        <div className={styles.links}>
        {links.map((link=>(                                                     // ------------(1)
            <NavLink item={link} key={link.title}/>                               
            // <Link href={link.path} key={link.title}>{link.title}</Link>
        )))} { 
            session?.user ?(
                <>
                    {session.user?.isAdmin && <NavLink item={{title:"Admin", path:"/admin"}}/>}
                    <form action={handleLogout}>
                        <button className={styles.logout}>Logout</button>
                    </form>
                </>
            ) : (
                <NavLink item={{title: "Login", path:"/login"}}/>
            )
        }
        </div>

        <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
            <Image src="/menu.png" alt="" width={30} height={30} />
        </button>
        {
            open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item = {link} key={link.title} />
                    ))}
                </div>
            )
        }
   </div>
  );
};

export default Links ;



// EXPLANATION : 
//(1) in this case  :-                {links.map((link=>(                                                     // ------------(1)
                                    //     <NavLink item={link} key={link.title}/>                               
                                    //     // <Link href={link.path} key={link.title}>{link.title}</Link>
                                    // )))} { 

// WE CAN WRITE THIS AS : 
                                    // {links.map( ( e =>(                                                     // where 'e' is the object : ----(2)
                                    //     <NavLink item={e} key={link.title}/>                               
                                    //     // <Link href={e.path} key={e.title}>{e.title}</Link>
                                    // )))} { 

// (2) and we are passing this 'e' object to the <NavLink/> element through variable 'item' ------------(3)

// (3) So in the element of <NavLink/> we are going to access the key-value of object like this : item.title , item.path etc ...... 