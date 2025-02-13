import React from "react";
import { Accent } from "./Accent";
import '../assets/App.css'
import { Text } from "./Text";


export default function NoteEntry (
  { 
  course, 
  degree,
  language, 
  format, 
  description, 
  children
}) {
  return (
    <div className="note-container">
      
      <div>
      {children}
      </div>

      {/* Right Content */}
      <div className="ml-2 containter-flex">
      
        <div className="font-monospace fs-6 fw-bold ">{course}</div>
        {/* Authors */}
        <div className="fs-6 fw-lighter text-secondary">{degree}</div>
        {/* Journal & Date */}
        <div className="fs-6 fw-lighter text-secondary"><span className="fst-italic">{language}</span>, <Accent>{format}</Accent></div>
       <Text>{description}</Text>
      </div >
    </div>
  );
}