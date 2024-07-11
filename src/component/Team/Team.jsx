import React from 'react'
import team from "../../data/team.json";
import { getImageUrl } from '../../utils';
import styles from "./Team.module.css";

export default function Team () {
  return (
    <section className={styles.container} id='ourTeam'>
        <h1 className={styles.title}>OUR TEAM</h1>
        <div className={styles.content}>
            {team.map((member,id)=>(
                <div key={id} className={styles.contentItems}>
                    <img src={getImageUrl(member.Image)} alt={`${member.Name} Image`}  className={styles.memberImg}/>
                    <div className={styles.contentText}>
                      <h1>{member.Name}</h1>
                      <p>{member.Description}</p>
                    </div>
                </div>
          ))}
        </div>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
