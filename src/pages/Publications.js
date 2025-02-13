import React from 'react';
import { GenericPage } from '../components/GenericPage';
import PublicationEntry from '../components/PublicationEntry';
import { Text } from '../components/Text';
import { YearDivider } from '../components/YearDivider';
import { Spacing } from '../components/Spacing';
import { Title } from '../components/Title';

export function Publications() {
  const name = "publications"
  return (
    <>
      <GenericPage active={name}>
      
      <Title bold={"research"} light={"publications"}></Title>

      
      <YearDivider>2023</YearDivider>
      <PublicationEntry 
        conference = {"SEBD"}
        type={"Quantum Computing"}
        title = {"A Hybrid Quantum-Classical Framework for Binary Classification in Online Learning"}
        authors = {"Corrado Loglisci, Ivan Diliso, Donato Malerba"}
        journal = {"SEBD 2023: 31st Symposium on Advanced Database System"} 
        date = {"2023"}
        pdfLink = {"https://ceur-ws.org/Vol-3478/paper79.pdf"}
        biblink={"https://scholar.googleusercontent.com/scholar.bib?q=info:Ft7hy80aooUJ:scholar.google.com/&output=citation&scisdr=ClFxpVsKELTnnhIdZt4:AFWwaeYAAAAAZ64bft67uw5UWeTBvXoe2mA2w8U&scisig=AFWwaeYAAAAAZ64bfupMTtBaEjMgr7ExVBTaZxs&scisf=4&ct=citation&cd=-1&hl=it&scfhb=1"}
      ></PublicationEntry>



      </GenericPage>
    </> 
  );
}