import React from 'react'
import Navbar from './component/Navbar/Navbar'
import styles from "./App.module.css"
import Hero from './component/Hero/Hero'

export default function App() {

  return(
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
  </div>
)}
