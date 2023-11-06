import React from 'react';
import { Header } from './header-banner/header.jsx';
import { SectionCardCarrousel } from './Section-Card-Carrousel/sectionCardCarrousel.jsx';
import './App.css'


export function App() {
  const title='OpenCV and Python application for automotive spotlight image processing';
  const titleProjectSection='Proyectos';
  const projectCards=[
    [['#Arduino'],['Arduino.png'],['OPEN LIGHT CONTROLLER']],
    [['#DUT'],['DUT.png'],['DUT TEST']],
    [['#EMC'],['EMC.png'],['EMC TEST']],
    [['#CheckUpdates'],['Update.png'],['CHECK UPDATES']]
    
   
  ];
  
  return (
  <section className='margin-flexbow'>
    <Header title={title} />
    <SectionCardCarrousel title={titleProjectSection} projectCards={projectCards}/>
  </section>
    
  )
}