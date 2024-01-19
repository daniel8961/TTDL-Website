import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Skills from './Pages/Portfolio/Skills';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio/*' element={<Portfolio />} />
        <Route path='/portfolio/skills' element={<Skills />} />
        {/* </Route> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <Outlet />
      </div>
    </BrowserRouter>
  );
}

export default App;
