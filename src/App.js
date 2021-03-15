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
import { getRecords, getRecordWithLikes } from './utils/api';
import { groupByCategory } from './utils/recordUtil';

const App = () => {
  const [allRecords, setAllRecords] = useState([]);
  const [allRecordsWithLikes, setAllRecordsWithLikes] = useState([]);
  const [recordByCategory, setRecordByCategory] = useState({});
  useEffect(async () => {
    // console.log(await getRecords());
    const orders = await getRecords();
    // console.log('orders', orders);
    const recordsWithLikes = await getRecordWithLikes();
    const categoryData = groupByCategory(orders);

    setAllRecords(orders);
    setRecordByCategory(categoryData);
    setAllRecordsWithLikes(recordsWithLikes);
    // console.log('allrecords', allRecords);
  }, []);

  const increaseCount = (item) => {
    if (item.like) return;

    const updatedProducts = allRecordsWithLikes.map((product) => (product.id === item.id ? {
      ...product,
      count: product.count + 1,
      like: true,
    } : product));

    const updatedGroupedProducts = groupByCategory(updatedProducts);

    setAllRecordsWithLikes(updatedProducts);
    setRecordByCategory(updatedGroupedProducts);
  };
  const decreaseCount = (item) => {
    if (!item.like) return;

    const updatedProducts = allRecordsWithLikes.map((product) => (product.id === item.id ? {
      ...product,
      count: product.count - 1,
      like: false,
    } : product));

    const updatedGroupedProducts = groupByCategory(updatedProducts);

    setAllRecordsWithLikes(updatedProducts);
    setRecordByCategory(updatedGroupedProducts);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/allrecords">
            <AllRecords
              allRecords={allRecordsWithLikes}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
            />
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
