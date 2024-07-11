import React from 'react'
import { getImageUrl } from '../../utils'

export default function Footer() {
  return (
    <section>
        <ul>
          <li>
            <a href="">
              <img src={getImageUrl("social/twitter.png")} alt="twitter Icon" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={getImageUrl("social/instagram.png")} alt="Instagram Icon" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={getImageUrl("social/facebook.png")} alt="facebook Icon" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={getImageUrl("social/linkedin.png")} alt="linkedin Icon" />
            </a>
          </li>
        </ul>
        <div>
          <h2>We will show you a different perspective to see this world.
              You will be learning new and interesting facts.
              Stay tuned…..

              Disclaimer: Contains Knowledgeable information which may make you intelligent, read at your own risk!!</h2>
        </div>
        <div>
                <img src="/logo.png" alt="logo"/>
                <p>CODE CAMPERS</p>
        </div>
    </section>
  )
}
