import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './Scss/App.scss';

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Docks from './Pages/Docks';
import MainWork from './Pages/MainWork';
import News from './Pages/News';
import EP from './Pages/EP';
import II from './Pages/II';
import LC from './Pages/LC';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="page">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/documents' element={<Docks />} />
          <Route path='/work' element={<MainWork />} />
          <Route path='/news' element={<News />} />
          <Route path='/ep' element={<EP />} />
          <Route path='/ii' element={<II />} />
          <Route path='/lc' element={<LC />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
