import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from './CustomCont';
import '../assets/App.css'

export function Text({children}) {
  return (
    <>
      <nav className='fw-light' style={{textAlign:"justify"}}>{children}</nav>
    </> 
  );
}