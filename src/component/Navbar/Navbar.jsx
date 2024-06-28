import React from 'react'
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <img src="" alt="logo" className={styles.logo}/>
            <h1 className={styles.title}>Code Campers</h1>
        </div>
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <a href="#home">Home</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#events">Events</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#ourTeam">Our Team</a>
            </li>
            <li className={styles.menuItem}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </section>
  )
}
