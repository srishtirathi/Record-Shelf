/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  </div>
);

export default App;
