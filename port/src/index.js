import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import En from './Language/En';
import Ptbr from './Language/ptBr';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<En />} />
        <Route path="/ptBr" element={<Ptbr />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
