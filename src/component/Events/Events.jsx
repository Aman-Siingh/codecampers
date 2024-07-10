import React from 'react'
import events from "../../data/events.json";
import { getImageUrl } from '../../utils';
import styles from "./Events.module.css";

export default function Events() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>EVENTS</h1>
        <div className={styles.eventCards}>
            {
                events.map((Event,id)=>{
                    return(
                        <div key={id} className={styles.eventCard}>
                            <img src={getImageUrl(Event.Image)} alt={Event.Name} className={styles.eventImg} />
                            <div className={styles.cardText}>
                                <h2>{Event.Name}</h2>
                                <p>{Event.Description}</p>
                            </div>    
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
