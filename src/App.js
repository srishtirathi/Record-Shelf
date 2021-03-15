/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route>
          <Home path="/" exact />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
