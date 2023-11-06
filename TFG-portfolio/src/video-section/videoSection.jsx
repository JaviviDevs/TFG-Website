import './videoSection.css'


export function VideoSection({id,title,video,texts,classVideoSectionContent}) {
  
  return (
    <article className='video-section' id={id}>
        <h3 className='video-section-h3'>{title}</h3>
        <section className={classVideoSectionContent}>
            <video className='video-section-content-video' controls>
                <source src={`./video/${video}`} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
            </video>
            <section className='video-section-content-description'>
                {texts.map((text, indx) => (
                    <p className='video-section-content-p' key={indx}>{text}</p>
                ))}
            </section>
           
        </section>
    </article>
    
  )
}