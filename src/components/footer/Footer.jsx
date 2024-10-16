import Image from "next/image" ; 
import Link from "next/link"; 
import styles from "./footer.module.css" ; 

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}>Lama creative throughs agenct @ All rights reserved.</div>
    </div>
  )
}

export default Footer
