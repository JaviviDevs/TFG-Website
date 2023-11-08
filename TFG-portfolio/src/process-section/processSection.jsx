import { LeftCircleCard } from '../left-circle-card/leftCircleCard';
import './processSection.css'


export function ProcessSection({title,texts,FunctionsCards}) {
  
  return (
    <article className='process'>
        <span className='orangeborder-process'></span>
        <h3 className='process-h3'>{title}</h3>
        <section className='process-content'>
          <section className='process-content-text'>
            {texts.map((text, indx) => (
                <p className='process-content-text-p' key={indx}>{text}</p>
            ))}
          </section>
          <section className='process-colum-flexbox'>
            {FunctionsCards.map((card, indx) => (
                    <LeftCircleCard key={indx} company={card[0]} work={card[1]}/>
            ))}
          </section>
        </section>
        
    </article>
    
  )
}