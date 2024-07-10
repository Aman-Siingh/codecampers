import React from 'react'
import Navbar from './component/Navbar/Navbar'
import styles from "./App.module.css"
import Hero from './component/Hero/Hero'
import Team from "./component/Team/Team.jsx"
import Events from './component/Events/Events.jsx'

export default function App() {

  return(
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <Team/>
    <Events/>
  </div>
)}
