import React from 'react'
import { CardComponent } from './CardComponent'
import './CardSection.css'
import knight from './CardImg/image-7.png'
import space from './CardImg/BestGameUrNotAllowedToTalkAbout 2.png'
import arcade from './CardImg/JapaneseArcades 2.png'

export const CardSection = () => {
  return (
    <ul className='CardRow'>
      <li>
        <CardComponent
          img={knight}
          alt="Hollow Knight"
          title="Darling of Indie Games"
          author="John Doe" />
      </li>
      <li>
        <CardComponent
          img={space}
          alt="Outer Wilds"
          title="Best Game You Cannot Talk About"
          author="Taline Harley" />
      </li>
      <li>
        <CardComponent
          img={arcade}
          alt="Arcade"
          title="Bastion of Arcades"
          author="Fredrik Dreyer" />
      </li>
    </ul>

  )
}
