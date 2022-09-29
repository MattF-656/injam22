// React
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import React, { useState } from 'react';

// CSS
import './App.css';

// Components
import Navbar from './components/NavBar/NavBar';

// Pages
import HomePage from './pages/HomePage/HomePage';
import TeamPage from './pages/TeamPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/team-page" exact element={<TeamPage />} />
          <Route path="/admin-page" exact element={<AdminPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
