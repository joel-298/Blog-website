import styles from "./home.module.css" ;
import Image from "next/image" ; 

const HomePage = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Throughs Agency.</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam nobis at, perspiciatis laudantium quidem incidunt eveniet amet, aliquid minima, consequatur aperiam similique assumenda placeat unde hic doloremque debitis vitae.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brand}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default HomePage;