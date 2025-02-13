import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from './CustomCont';
import '../assets/App.css'

export function AccentCustom({color, children}) {
  return (
    <>
      <nav className='font-monospace accent-monospace' style={{color:"white", backgroundColor:color}}>{children}</nav>
    </> 
  );
}