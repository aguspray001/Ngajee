import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import DetailSurahPage from './DetailSurahPage';

import HomePage from './HomePage';
import SplashPage from './SplashPage';

const MainApp = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<SplashPage/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path='/detail' element={<DetailSurahPage/>} />
        </Routes>
    </Router>
  )
}

export default MainApp