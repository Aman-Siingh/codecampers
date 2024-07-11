import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.icons}>
          <li>
            <a href="">
              <img src={getImageUrl("social/twitter.png")} alt="twitter Icon" className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={getImageUrl("social/instagram.png")} alt="Instagram Icon" className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={getImageUrl("social/facebook.png")} alt="facebook Icon" className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={getImageUrl("social/linkedin.png")} alt="linkedin Icon" className={styles.socialIcon} />
            </a>
          </li>
        </ul>
        <div className={styles.text}>
          <p>We will show you a different perspective to see this world.
              You will be learning new and interesting facts.
              Stay tuned…..
          </p>
        </div>
      </div>  
        <div className={styles.brand}>
                <img src="/logo.png" alt="logo"/>
                <p>CODE CAMPERS</p>
        </div>
        <div className={styles.topBlur}></div>
    </section>
  )
}
