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
import AllRecords from './components/AllRecords/AllRecords';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/allrecords">
          <AllRecords />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>

      </Switch>

    </BrowserRouter>
  </div>
);

export default App;
