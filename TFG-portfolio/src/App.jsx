import React from 'react';
import { Header } from './header-banner/header.jsx';
import { SectionCardCarrousel } from './Section-Card-Carrousel/sectionCardCarrousel.jsx';
import { VideoSection } from './video-section/videoSection.jsx';
import './App.css'


export function App() {
  const title='OpenCV and Python application for automotive spotlight image processing';
  const titleProjectSection='Funciones Principales';
  const projectCards=[
    [['#Arduino'],['Arduino.png'],['OPEN LIGHT CONTROLLER']],
    [['#DUT'],['DUT.png'],['DUT TEST']],
    [['#EMC'],['EMC.png'],['EMC TEST']],
    [['#CheckUpdates'],['Update.png'],['CHECK UPDATES Y OTRAS FUNCIONES']]
  ];
  
  const idIntro='intro';
  const titleIntro='Introduccion';
  const videoIntro='EMC.mp4';
  const textIntro=['La idea principal del proyecto fue migrar y conseguir que funcionase una aplicación (antigua y obsoleta) para la empresa de automóviles Valeo.',
  'Su principal funcionalidad es analizar videos de diversos focos automovilísticos cuando son sometidos a ruido electromagnético '+
   'y detectar cualquier anomalía en su funcionamiento. Este proceso se denomina test de compatibilidad electromagnética (EMC).'];

  return (
  <>
  <Header title={title} />
  <section className='margin-flexbox'>
    <VideoSection id={idIntro} title={titleIntro} video={videoIntro} texts={textIntro} classVideoSectionContent={'video-section-content'}/>
  </section>
  <section className='flexbox-blue'>
    <SectionCardCarrousel title={titleProjectSection} projectCards={projectCards}/>
  </section>
  <section className='margin-flexbox'>
  <VideoSection id={idIntro} title={titleIntro} video={videoIntro} texts={textIntro} classVideoSectionContent={'video-section-content'}/>
  <VideoSection id={idIntro} title={titleIntro} video={videoIntro} texts={textIntro} classVideoSectionContent={'reverse-video-section-content'}/>
  </section>
 
  </>
 
    
  )
}