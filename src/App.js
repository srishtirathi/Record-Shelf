/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AllRecords from './components/AllRecords/AllRecords';
import RecordsByCategory from './components/RecordsByCategory/RecordsByCategory';
import { getRecords } from './utils/api';
import { groupByCategory } from './utils/recordUtil';

const App = () => {
  const [allRecords, setAllRecords] = useState([]);
  const [recordByCategory, setRecordByCategory] = useState({});
  useEffect(async () => {
    // console.log(await getRecords());
    const orders = await getRecords();
    // console.log('orders', orders);

    const categoryData = groupByCategory(orders);
    setAllRecords(orders);
    setRecordByCategory(categoryData);
    // console.log('allrecords', allRecords);
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/allrecords">
            <AllRecords allRecords={allRecords} />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category" exact>
            <RecordsByCategory recordByCategory={recordByCategory} />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
};

export default App;
