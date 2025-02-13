import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogleScholar} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

 
import { GenericPage } from '../components/GenericPage';
import { AccentMono } from '../components/AccentMono';
import { Accent } from '../components/Accent';
import { Text } from '../components/Text';
import { Spacing } from '../components/Spacing';
import '../assets/App.css'
import { Title } from '../components/Title';

export function About() {
  const name = "about"
  return (
    <>
      <GenericPage active={name}>

      {/* TITOLO E NOME */}

      <Title bold={"Ivan"} light={"Diliso"}></Title>
      <div className='font-monospace'>
      <Accent>University of Bari Aldo Moro <img width='3%' src='https://www.uniba.it/it/dati-homepage/icona-uniba.png'></img></Accent>, 
      <span className='fw-bold'> ARA 🦜</span> Laboratory, Bari, Italy 🇮🇹</div>

      <Spacing />


      {/* PROPIC E TESTO */}
      
      <div className='propic-container'>
      <div style={{marginRight:"20px"}}>
      <Text>
          Hi everyone! I'm Ivan Diliso, a Phd student from Bari, Italy. 
          I graduated in <Accent>Computer Science</Accent> in 2021 and got my Master's in <Accent>Data Science</Accent> in 2024. 
          
          <Spacing />
          
          My <span className='fw-bold'>current research </span>is focused on <Accent>neurosymbolic learning</Accent> for <Accent>knowledge graphs</Accent>, 
          ontologies, <Accent>description logics</Accent> and their domain-specific application in the railway engeneering 🛤️🚉! 
      
          <Spacing />

          Specifically I'm studying how to <Accent>inject background knowledge</Accent> in knowledge graph embedding models,
          with the parallel task of evaluating the capabilities of the model to represent the learned semantics.

          <Spacing />

          In the past I have worked  on <Accent>computer vision</Accent> for image classification and adversarial attacks, <Accent>genetic optimization </Accent> 
          and <Accent>quantum computing</Accent> focusing in hybrid model for contrastive learning and clustering.
      
      </Text>
      </div>
      <div>
        <img className="propic"src='https://avatars.githubusercontent.com/u/33879857?s=400&u=a5dc2ac7908cc3c5a7c50971897f2d52f6c8ee86&v=4'/>
        <div  style={{marginTop:"20px", marginLeft:"15px"}}>
          <a title="Github" className='link-icon' href='https://github.com/ivandiliso' ><FontAwesomeIcon  icon={faGithub} size="2x" /></a>
          <a title="Scholar" className='link-icon' href='https://scholar.google.com/citations?user=zTCMLbkAAAAJ&hl=it'><FontAwesomeIcon  icon={faGoogleScholar} size="2x" /></a>
          <a title="Mail" className='link-icon' href='mailto:navispeshd@gmail.com'><FontAwesomeIcon  icon={faEnvelope} size="2x" /></a>
          <a title="Curriculum Vitae" className='link-icon' href='https://github.com/ivandiliso'><FontAwesomeIcon  icon={faFileAlt} size="2x" /></a>
        </div>
      
      </div>
      </div>
     
      </GenericPage>
    </> 
  );
}