"use client" ; 
import Link from "next/link" ; 
import Image from "next/image" ; 
import { usePathname ,useRouter, useSearchParams } from "next/navigation";
import styles from "./navigationtest.module.css" ;

const NavigationTestPage = () => {
  
    
    // CLIENT SIDE NAVIGATION 
    const router = useRouter() ; 
    const pathname = usePathname() ; 
    const searchParams = useSearchParams() ; // for getting the query after the router  -->http://localhost:3000/navigationtest
    const q = searchParams.get("q"); 
    console.log(pathname) ;
    console.log(q) ;                         // for printing the query          ----> http://localhost:3000/navigationtest?q=test

    const handleClick = () => {
        console.log("clicked") ;
        // router.push("/") ;          // is used to maintain browser history 
        // router.replace("/")      // does not maintain router history 
        // router.refresh("/")      // refresh our current router and asks request from server again , so basically this is used -> (like not using e.preventDefault in react js)

        // CREATE BUTTONS based on Browser history : 
        // router.back() ;           // prev page
        router.forward() ;           // next page 
    }

  return (
    <div>
      <Link href="/" prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage
