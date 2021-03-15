/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { getRecords } from '../../utils/api';
import Card from '../Card/Card';
import './AllRecords.css';

const AllRecords = () => {
  const [allRecords, setAllRecords] = useState([]);
  useEffect(async () => {
    // console.log(await getRecords());
    const orders = await getRecords();
    // console.log('orders', orders);
    setAllRecords(orders);
    // console.log('allrecords', allRecords);
  }, []);
  return (
    <div className="allrecords">

      {/*
      {allRecords.map((record) => (<h1>{record.name}</h1>))}

      {
        allRecords.map((record) => (
          <div>
            <h1>{record.name}</h1>

          </div>
        ))
      } */}
      {/* {allRecords.map((record) => (<Card record={record} />))} */}
      {allRecords.map((record) => (
        <div>
          <Card name={record.name} artist={record.artist.name} albumArtUrl={record.albumArtUrl} />
        </div>
      ))}
    </div>
  );
};
export default AllRecords;
