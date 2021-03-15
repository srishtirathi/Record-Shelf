/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecords } from '../../utils/api';
import Card from '../Card/Card';
import './AllRecords.css';
import { groupByCategory } from '../../utils/recordUtil';
import RecordsByCategory from '../RecordsByCategory/RecordsByCategory';

const AllRecords = ({
  allRecords, increaseCount, decreaseCount, updateLike,
}) => (

  <div>
    <div>
      <Link to="/category"><button type="button" className="allcategory-button" /></Link>
    </div>
    <br />
    <h1>all songs</h1>
    <div className="app-container">
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
        <div className="inventory-container">
          <Card
            name={record.name}
            artist={record.artist.name}
            albumArtUrl={record.albumArtUrl}
            count={record.count}
            like={record.like}
            increaseCount={increaseCount}
            record={record}
            decreaseCount={decreaseCount}
            updateLike={updateLike}
          />
        </div>
      ))}
    </div>
  </div>
);
export default AllRecords;
