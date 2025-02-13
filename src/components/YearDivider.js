import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from './CustomCont';
import '../assets/App.css'

export function YearDivider({children}) {
  return (
    <>
     <div >
      <span className='fs-3 text-end fw-lighter' >{children}</span>
      <hr></hr>
      </div>
    </> 
  );
}