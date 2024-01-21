import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HomeLayout from './Pages/Home/HomeLayout';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Skills from './Pages/Portfolio/Skills';
import Contact from './Pages/Contact/Contact';
import Layout from './Pages/Layout';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomeLayout />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio/*' element={<Portfolio />} />
            <Route path='/portfolio/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
