import React from 'react';
import {ProjectCardsCarrousel} from '../Project-Card-Carrousel/projectCardCarrousel.jsx'
import './sectionCardCarrousel.css'


export function SectionCardCarrousel({title,projectCards}) {
  
  return (
    <article className='projects' id='Projects'>
        <h3 className='projects-h3'>{title}</h3>
        < ProjectCardsCarrousel cards={projectCards}/>
    </article>
    
  )
}