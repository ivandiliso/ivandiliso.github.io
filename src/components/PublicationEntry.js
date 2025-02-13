import React from "react";
import { Accent } from "./Accent";
import '../assets/App.css'


export default function PublicationEntry ({ 
  conference, 
  type,
  title, 
  authors, 
  journal, 
  date, 
  pdfLink, 
  biblink 
}) {
  return (
    <div className="propic-container">
      
      <div>
      <div className="pubbox" style={{marginRight:"20px"}}>{conference}</div>
      <div className="pubbox-general" style={{marginRight:"20px"}}>{type}</div>  
      </div>

      {/* Right Content */}
      <div className="ml-4 containter-flex">
      
        <div className="fs-7 fw-normal ">{title}</div>
        {/* Authors */}
        <div className="fs-7 fw-light text-secondary">{authors}</div>
        {/* Journal & Date */}
        <div className="fs-7 fw-light text-secondary"><span className="fst-italic">{journal}</span>, <Accent>{date}</Accent></div>
        
        <div className="propic-container">
          <a href={pdfLink} className="pbtn">PDF</a> 
          <a href={biblink} className="pbtn">BIB</a></div>
      </div>

    </div>
  );
}