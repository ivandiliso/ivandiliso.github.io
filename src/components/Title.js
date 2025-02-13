import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from './CustomCont';
import '../assets/App.css'

export function Title({bold, light}) {
  return (
    <>
      <div className='fs-2'> <span className='fw-bold'>{bold}</span> <span className='fw-light'>{light}</span></div>
    </> 
  );
}