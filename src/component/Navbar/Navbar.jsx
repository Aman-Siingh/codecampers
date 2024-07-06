import React from 'react'
import styles from "./Navbar.module.css"
import { useState } from 'react'
import { getImageUrl } from '../../utils';

export default function Navbar() {
    const[menuOpen,setMenuOpen] = useState(false);

  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <img src="/logo.png" alt="logo" className={styles.logo}/>
            <h1 className={styles.title}>CODE CAMPERS</h1>
        </div>
        <div>
            <img src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="closeIcon" onClick={() => setMenuOpen(!menuOpen)} className={styles.menuBtn}/> 
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
        </div>
    </section>
  )
}
