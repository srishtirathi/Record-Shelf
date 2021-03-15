/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecords } from '../../utils/api';
import Card from '../Card/Card';
import './AllRecords.css';
import { groupByCategory } from '../../utils/recordUtil';
import RecordsByCategory from '../RecordsByCategory/RecordsByCategory';

const AllRecords = ({ allRecords, increaseCount, decreaseCount }) => (

  <div className="allrecords">
    <div>
      <Link to="/category"><button type="button" className="category-button">category</button></Link>
    </div>
    <br />
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
        <Card
          name={record.name}
          artist={record.artist.name}
          albumArtUrl={record.albumArtUrl}
          count={record.count}
          like={record.like}
          increaseCount={increaseCount}
          record={record}
          decreaseCount={decreaseCount}
        />
      </div>
    ))}
  </div>
);
export default AllRecords;
