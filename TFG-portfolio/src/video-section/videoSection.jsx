import { LeftCircleCard } from '../left-circle-card/leftCircleCard';
import './videoSection.css'


export function VideoSection({id,title,subtitle,video,texts,classVideoSectionContent,requisitos}) {
  
  return (
    <article className='video-section' id={id}>
        <h3 className='video-section-h3'>{title}</h3>
        {texts.map((text, indx) => (
            <p className='video-section-p' key={indx}>{text}</p>
        ))}
        <section className={classVideoSectionContent}>
            <video className='video-section-content-video' controls>
                <source src={`./video/${video}`} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
            </video>
            <section className='video-section-content-upgrades'>
                <h4 className='video-section-h4'>{subtitle}</h4>
                {requisitos.map((req, indx) => (
                    <LeftCircleCard key={indx} company={''} work={req}/>
                ))}
            </section>
        </section>
    </article>
    
  )
}