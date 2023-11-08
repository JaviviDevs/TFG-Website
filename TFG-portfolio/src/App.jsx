import React from 'react';
import { Header } from './header-banner/header.jsx';
import { SectionCardCarrousel } from './Section-Card-Carrousel/sectionCardCarrousel.jsx';
import { VideoSection } from './video-section/videoSection.jsx';
import { ProcessSection } from './process-section/processSection.jsx';
import { FooterSection } from './footer-section/footerSection.jsx';
import './App.css'


export function App() {
  const title='OpenCV and Python application for automotive spotlight image processing';

  const titleProjectSection='Mejoras más significativas (RF y RNF)';
  const projectCards=[
    [['#Arduino'],['Arduino.png'],['OPEN LIGHT CONTROLLER']],
    [['#DUT'],['DUT.png'],['DUT TEST']],
    [['#EMC'],['EMC.png'],['EMC TEST']],
    [['#Upgrades'],['Update.png'],['OTRAS MEJORAS']]
  ];

  const FunctionsCards=[
    ['1º. Open light Controller','Generar un archivo de configuración para el encendido y apagado de los focos.'],
    ['2º. Open/New DUT','Realizar un test DUT donde se crean los ROIs (Regiones de Interés).'],
    ['3º. Open/New EMC','Realizar un test EMC (Electro-Magnetic Compatibility) donde se comprueba el correcto funcionamiento de los focos y se genera el reporte.']
  ];
  
  const idOpenLight='Arduino';
  const idDUT='DUT';
  const idEMC='EMC';
  const idUpgrades='Upgrades';
 

  const titleIntro='Introducción';
  const titleOpenLight='Open light controller';
  const titleDUT='Test DUT';
  const titleEMC='Test EMC';
  const titleUpgrades='Otras mejoras';
  const subtitle='Mejoras';

  const videoEMC='EMC.mp4';
  const videoDUT='DUT.mp4';
  const videoOpenLight='OpenLight.mp4';
  const videoUpgrades='OtrasMejoras.mp4';


  const textIntro=['El objetivo principal de este Trabajo de Fin de grado es el desarrollo de una aplicación que pretende '+
  'detectar las fluctuaciones en la iluminación emitida por los focos de los automóviles (ya sea mediante una cámara que graba en vivo '+
  'al foco o usando un vídeo) siguiendo unos perfiles que forman los diferentes ROIs (Regiones de Interés) generando en el proceso informes '+
  'HTML en base64.','Para cumplir esto, la aplicación se compone de tres funcionalidades principales dispuestas en un orden secuencial necesario para generar el informe:'];

  const textOpenLight=['Se trata del control de la activación y desactivación de las luces de los faros a través de uno o dos Valeo Relay Shields (dispositivos de control basados en Arduino) configurados para ejecutar esta tarea de manera precisa.'];

  const textDUT=['Se lleva a cabo una prueba del Dispositivo Bajo Prueba (DUT), en la cual se definen las Regiones de Interés (ROIs) que representan las áreas donde se requiere verificar el correcto funcionamiento del foco.',
  'Tal y como se muestra en el vídeo, el proceso consta de cuatro partes: primero un formulario a rellenar, segundo escoger entre usar la cámara o un video, tercero recortar el vídeo y cuarto crear los ROIs.' 
  ];

  const textEMC=['Se efectúa un test de Compatibilidad Electromagnética (EMC) que identifica las fluctuaciones en la luminosidad al comparar un keyframe extraído del vídeo, en el cual el foco funciona correctamente, con los demás frames del video, específicamente en las áreas designadas como ROIs.',
  'Tal y como se puede apreciar en el vídeo, el test está formado por cuatro partes: un formulario con toda la información del test, escoger entre usar la cámara o un video, el análisis (se realiza el test) y por último generar el informe.'
  ];

  const textUpgrades=['En esta sección se recopilan las mejoras más significativas que no están asociadas a ninguna funcionalidad principal en particular.'];

  const reqOpenLight=[
  'RF7. El software debe permitir al usuario configurar los focos de un automóvil utilizando uno o dos Valeo Relay Shields, y guardar esta configuración de luces.',
  'RNF1. El software debe ser capaz de detectar cuándo se desconecta un Valeo Relay Shield, en cualquier momento.',
  'RNF2. El software debe ser capaz de volver a conectar un Valeo Relay Shield por un corto período de tiempo después de que se haya desconectado.',
  'RNF6. El software debe tener una barra de estado que informe sobre las operaciones del usuario y el estado de la aplicación.',
  'RNF7. El software debe guardar los datos en archivos XML, a diferencia de antes, que se hacía en formato de texto (TXT).'
  ];

  const reqDUT=[
  'RF1. El software debe permitir al usuario crear una nueva prueba DUT.',
  'RF3. El software debe permitir al usuario abrir un archivo DUT.',
  'RNF9. En los formularios de prueba de DUT, cuando el usuario selecciona un foco de automóvil, debería resaltarse.',
  'RNF10. Cuando el usuario abre un archivo DUT o EMC, en los formularios de pruebas de DUT o EMC, debe aparecer un nuevo campo que contenga la ruta del video que se utilizó en la prueba.',
  'RNF11. Cuando el usuario abre un archivo DUT, los puntos de recorte deben mostrarse en la ventana donde el usuario recorta la imagen.',
  'RNF12. Cuando el usuario abre un archivo DUT, las regiones de interés (ROIs) deben mostrarse en la ventana de recorte y permitir la creación de las ROIs.',
  'RNF13. En la prueba DUT, en las ventanas donde el usuario recorta la imagen y crea las ROIs, el software debe ser capaz de separar la vista de la cámara y la vista de zoom, permitiendo trabajar con dos o incluso tres pantallas.'
  ];

  const reqEMC=[
  'RF2. El software debe permitir al usuario crear una nueva prueba de EMC.',
  'RF4. El software debe permitir al usuario abrir un archivo EMC.',
  'RNF14. En la prueba de EMC, cuando comienza el análisis y el usuario selecciona una región de interés (ROI), esta debe resaltarse en la vista de fotograma clave (Keyframe view).',
  'RNF15. En la prueba de EMC, cuando comienza el análisis y el usuario selecciona una alerta, esta debe mostrarse.',
  'RNF16. El software debe ser capaz de agregar un gráfico que muestre la diferencia de luminancia entre el fotograma clave y el video para cada región de interés (ROI) en el informe generado.'
  ];

  const reqUpgrades=[
  'RF6. El software debe permitir al usuario abrir un archivo DUT o EMC reciente.',
  'RF8. El software debe permitir al usuario cambiar entre los temas blanco y negro.',
  'RNF18. El software debe tener una barra de herramientas.',
  'RF9. El software debe permitir al usuario verificar información adicional. (En el video pone RNF9 debido a una errata)',
  'RF10. El software debe permitir al usuario verificar actualizaciones y actualizar la aplicación si es necesario. (En el video pone RNF10 debido a una errata)',
  'RF11. El software debe permitir al usuario seleccionar uno de varios idiomas: inglés, español y francés.'
  ];

  
  const footerLinks=[
    ['../doc/TFG__Javier_Exposito_Martinez_2022_23.pdf','IconPDF.png','Memoria del TFG'],
    ['../doc/Presentacion.pdf','IconPDF.png','Presentación del TFG']
  ];

  return (
  <>
  <Header title={title} />
  <section className='margin-flexbox'>
    <ProcessSection title={titleIntro} texts={textIntro} FunctionsCards={FunctionsCards}/>
  </section>
  <section className='flexbox-blue'>
    <SectionCardCarrousel title={titleProjectSection} projectCards={projectCards}/>
  </section>
  <section className='margin-flexbox'>
    <VideoSection id={idOpenLight} title={titleOpenLight} subtitle={subtitle} video={videoOpenLight} texts={textOpenLight} classVideoSectionContent={'video-section-content'} requisitos={reqOpenLight}/>
    <VideoSection id={idDUT} title={titleDUT} subtitle={subtitle} video={videoDUT} texts={textDUT} classVideoSectionContent={'reverse-video-section-content'} requisitos={reqDUT}/>
    <VideoSection id={idEMC} title={titleEMC} subtitle={subtitle} video={videoEMC} texts={textEMC} classVideoSectionContent={'video-section-content'} requisitos={reqEMC}/>
    <VideoSection id={idUpgrades} title={titleUpgrades} subtitle={subtitle} video={videoUpgrades} texts={textUpgrades} classVideoSectionContent={'reverse-video-section-content'} requisitos={reqUpgrades}/>
  </section>
  <section className='flexbox-blue'>
    <FooterSection links={footerLinks}/>
  </section>
 
  </>
 
    
  )
}