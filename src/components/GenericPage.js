import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from './CustomCont';

export function GenericPage({active, children}) {
  return (
    <>
      <Navbar active={active}></Navbar>
      <Container>{children}</Container>
      <Footer></Footer>
    </> 
  );
}