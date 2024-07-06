import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
        <img src={getImageUrl("hero/heroImage.png")} alt="heroImage" className={styles.heroImg}/>
        <sub className={styles.content}>
            <div className={styles.brand}>
                <img src="/logo.png" alt="logo"/>
                <p>CODE CAMPERS</p>
            </div>
            <div className={styles.contentItems}>
                <h1>Hackathon</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae exercitationem sed accusamus, sint, atque, est commodi debitis maxime culpa earum dolor laboriosam harum aut eaque magni eius voluptate molestias?</p>
                <a href="">Register Now</a>
            </div>
        </sub>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
