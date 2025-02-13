import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/App.css'

export default function Navbar({active}) {

  const current_active = active
  const non_active_link = "nav-link fw-light no-accent"
  const active_link = "nav-link fw-normal accent"



  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" >
      
      <div className="container-fluid" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
      <a className="navbar-brand" href="#" >
      {
        current_active === "about" ? (
          <div><span className="fw-bold">Home </span><span className="fw-light">page</span></div>
        ) : (
          <div><span className="fw-bold">Ivan </span><span className="fw-light">Diliso</span></div>
        )

      }
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className={current_active === "about" ? active_link : non_active_link} href="/#/about" >about</a>
          </li>
          <li className="nav-item">
            <a className={current_active === "publications" ? active_link : non_active_link} href="/#/publications">publications</a>
          </li>
          <li className="nav-item">
            <a className={current_active === "notes" ? active_link : non_active_link} href="/#/notes">notes</a>
          </li>
          <li className="nav-item">
            <a className={current_active === "academic" ? active_link : non_active_link} href="/#/academic">academic</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}