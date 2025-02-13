import React from 'react';
import { GenericPage } from '../components/GenericPage';
import { Title } from '../components/Title';
import { Spacing } from '../components/Spacing';
import { Text } from '../components/Text';
import { AccentMono } from '../components/AccentMono';
import { Accent } from '../components/Accent';
import { AccentCustom } from '../components/AccentCustom';
import NoteEntry from '../components/NoteEntry';
import { DownButton } from '../components/DownButton';

import AA from '../content/AA.pdf'
import AAMap from '../content/AAMap.pdf'
import ALG from '../content/ALG.pdf'
import ANL2 from '../content/ANL2.pdf'
import ANL212 from '../content/ANL212.pdf'
import BigData from '../content/BigData.pdf'
import DataMining from '../content/DataMining.pdf'
import Economia from '../content/Economia.pdf'
import MDSA from '../content/MDSA.pdf'
import MDSB from '../content/MDSB.pdf'
import OPT from '../content/OPT.pdf'


import '../assets/App.css'

export function Notes() {
  const name = "notes"
  return (
    <>
      <GenericPage active={name}>
      <Title bold={"notes"} light={"and study materials"}></Title>
      <Spacing></Spacing>
      <Text>
      In this section I will list all of the <AccentMono>Latex</AccentMono> materials 
      I created to study for my University courses. 
      Most of the books available are in Italian 🇮🇹,
       and some of them are hand written.  
       <Accent> I take no responsibility on the information and data wrote in these materials. </Accent>
       The notes will not be updated and are all related to the academic year <AccentMono>2021/2022</AccentMono>.
        Some notes have some bonus chapters for updates with <AccentMono>2022/2023</AccentMono>  course notes.
      </Text>
      <Spacing></Spacing>
      <div className='text-secondary'>
      <Text>
      ⚠ The color pattern is usually <AccentCustom color={"black"}>black</AccentCustom> for formal notes and <AccentCustom color={"grey"}>grey </AccentCustom> for personal notes or
      personal explanation of some concepts. Text in <AccentCustom color={"red"}>red</AccentCustom> is used for titles and sections. <AccentCustom color={"blue"}>  blue</AccentCustom> is used to note further details about specific topics or theorems. 
      The handwritten and hybrid notes are not print-ready, 
      some pages are longer or differntly aligned
      </Text></div>
      
      <Spacing></Spacing>

      <NoteEntry
        course = {"Machine Learning"}
        degree = {"Master Degree in Data Science"}
        language = {"Italian 🇮🇹/ English 🇬🇧"}
        format = {"Handwritten"} 
        description = {" This files are the notes I took while studying machine learning from the book \"Introduction to Machine Learning, Fourth Edition, Ethem Alpaydin\". Includes a concept map made during topic repetition and study."}
        >
          <DownButton text={"Notes"} link={AA} />
          <DownButton text={"Concept Map"} link={AAMap} />

        </NoteEntry>

        <NoteEntry
        course = {"Data Mining"}
        degree = {"Master Degree in Data Science"}
        language = {"Italian 🇮🇹"}
        format = {"Latex"} 
        description = {"Complete notes of the Data Mining course, the notes cover all syllabus topics (AA 2021/2022) with in-depth explanation of the alghoritms not covered during lessons (but still needed for the exam) Includes professor slides, professor lectures and book material (Data Mining, Charu C. Aggarval, Springer)"}
        >
          <DownButton text={"Book"} link={DataMining} />
        </NoteEntry>



        <NoteEntry
        course = {"Optimization and Decision Models"}
        degree = {"Master Degree in Data Science"}
        language = {"Italian 🇮🇹"}
        format = {"Handwritten"} 
        description = {"Aggregation of lessons, personal notes, insights from papers and thoery books. Covers real and integer linear programming, unconstrained optimization (theory and applied to machine learning), constrained optimization (dual methods and augmented lagrangian), optimization formalism for SVM and NN, genetic algorithms with Holland scheme theory."}
        >
          <DownButton text={"Notes"} link={OPT} />

        </NoteEntry>



        <NoteEntry
        course = {"Big Data Analytics"}
        degree = {"Master Degree in Data Science"}
        language = {"Italian 🇮🇹"}
        format = {"Latex"} 
        description={"Complete notes of the course, the notes integrate both books, assigned papers, lectures from the professor and slides. Missing information about the laboratory assignment and programming tasks."}
        >
          <DownButton text={"Book"} link={BigData} />

        </NoteEntry>


        <NoteEntry
        course = {"Math Foundamentals for Data Science"}
        degree = {"Master Degree in Data Science"}
        language = {"Italian 🇮🇹"}
        format = {"Handwritten"} 
        description={"Full course in Math Foundamentals in Data Science, the notes cover both Calculus (R^n) and Linear Algebra. The notes cover only the theory, so they do not cover exercize examples and practice exercizes."}
        >
          <DownButton text={"Analisi 2023"} link={ANL2} />
          <DownButton text={"Algebra 2023"} link={ALG} />
          <DownButton text={"Analisi 2021"} link={ANL212} />

        </NoteEntry>

        <NoteEntry
        course = {"Numerical Methods"}
        degree = {"Master Degree in Data Science"}
        language = {"Italian 🇮🇹"}
        format = {"Handwritten / Latex"} 
        description={"Full course in Numerical Methods for Data Science, it covers both professore lessons, lecture notes, personal explanation and insights and details from the original papers of the studied topis. The course is divided in two parts, the first one (A) covers SVD, PCA, VSM, and online information retrieval, the second one covers matrix factorization, least squares models, factorization for sparse matrices and iterative methods for all these algorithms."}
        >
          <DownButton text={"Notes A"} link={MDSA} />
          <DownButton text={"Notes B"} link={MDSB} />

        </NoteEntry>

        <NoteEntry
        course = {"Economics and data innovation"}
        degree = {"Master Degree in Data Science"}
        language = {"Italian 🇮🇹"}
        format = {"Latex"} 
        description={"A summary of all the course slides, this was not integrated with the professor lectures"}
        >
          <DownButton text={"Notes"} link={Economia} />

        </NoteEntry>
      </GenericPage>
    </> 
  );
}