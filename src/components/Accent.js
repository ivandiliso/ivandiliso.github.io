import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from './CustomCont';
import '../assets/App.css'

export function Accent({children}) {
  return (
    <>
      <nav className='fw-normal accent-text'>{children}</nav>
    </> 
  );
}