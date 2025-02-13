import React from 'react';
import { GenericPage } from '../components/GenericPage';
import { Title } from '../components/Title';


export function Academic() {
  const name = "academic"
  return (
    <>
      <GenericPage active={name}>
        <Title bold={"academic"} light={"activities"}></Title>
      </GenericPage>
    </> 
  );
}