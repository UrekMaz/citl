import './App.css'

import Homepage from './Homepage'
import LoginPage from './login/LoginPage'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './Register/RegistrationPage';
import Startup from './startup/Startup';
import MainContent from './explore_startup/MainContent';
import PitchersApp from './explore_startup/PitchersApp';
import NetworkingEvents from './webmashup/NetworkingEvents';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/startup/:id" element={<Startup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/startup_search" element={<PitchersApp/>}/>
        <Route path="/event" element={<NetworkingEvents />} />
      </Routes>
    </Router>
  );
}

export default App;

