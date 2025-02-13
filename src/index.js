import React from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import * as ReactDOMClient from 'react-dom/client';

import { NoPage } from './pages/NoPage';
import { Academic } from './pages/Academic'
import { About } from './pages/About'
import { Notes } from './pages/Notes'
import { Publications} from './pages/Publications'


const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)
  
/**
 * Main App Router
 * 
 */
export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

/**
 * APP RENDERING
 * 
 */
root.render(<App />, );
