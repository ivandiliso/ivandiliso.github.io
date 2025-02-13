import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from './CustomCont';
import '../assets/App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

export function DownButton({
    text,
    link
}) {
  return (
    <>
    <div style={{marginRight:"50px"}}><a href={link} id="pdfLink" target="_blank" className='down-btn'><FontAwesomeIcon  icon={faFileDownload} size="1x" />&nbsp;{text}</a></div>
    </> 
  );
}