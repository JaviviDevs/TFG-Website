import './projectCardCarrousel.css'
import { FlipCard } from '../Flip-Card/flipCard';
import { useState,useEffect} from 'react';


export function ProjectCardsCarrousel({cards}) {
    const [cardsList, setCardList] = useState(cards);
    let iter = [];

    for (let i = 0; i < cardsList.length; i++) {
      iter.push(i);
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
      if (currentIndex < cardsList.length-1) {//En la ultima iteracion no se ve ningun elemento por eso, ponemos 1 menos
        setCurrentIndex(currentIndex + 1);
      } else {
        // Si estás en el último elemento, vuelve al primero.
        setCurrentIndex(0);
      }
    };
  
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        // Si estás en el último elemento, vuelve al primero.
        setCurrentIndex(cardsList.length-1); 
      }
    };
  
    const cardContainerStyle = {
      transform: `translateX(-${currentIndex * 215}px)`, 
      transition: 'transform 0.5s ease',
    };

    return (
      <article className='project-cards-carrousel'>
        <button className='project-cards-carrousel-button' onClick={prevSlide}>&lt;</button>
        <section className='project-cards-carrousel-container' >
            {iter.map((iter, indx) => (
                <FlipCard key={indx} 
                          link={cardsList[(iter)%cards.length][0][0]} 
                          img={cardsList[(iter)%cards.length][1][0]}
                          textFunction={cardsList[(iter)%cards.length][2][0]}
                          style={cardContainerStyle}/>
            ))}
        </section>
        <button className='project-cards-carrousel-button' onClick={nextSlide}>&gt;</button>
      </article>
    );
}

