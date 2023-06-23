import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App';
import Nav from './nav';
import Header from './header';
import Testpagina from './Testpagina';
import Page from './Page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact="true" path='/' element={<App />} />
        <Route path='/Page' element={<Page />} />
        <Route path='/Testpagina' element={<Testpagina />} />
      </Routes>
      <Nav />
    </Router>
  </React.StrictMode>
);