import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import styled from 'styled-components';
//import { AccountBox } from './components/accountBox';
import HomePage from './components/HomePage';

import AccountBox from './components/accountBox/accountBox'; // Check capitalization
 // Check capitalization
 // Adjust the path as needed
//import HomePage from './components/HomePage/HomePage'; 

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AccountBox />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;


/*
// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountBox from './components/accountBox/accountBox'; // Adjust the path as needed
import HomePage from './components/HomePage'; // Adjust the path as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AccountBox />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

*/
