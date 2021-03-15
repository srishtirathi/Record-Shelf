/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './AllRecords.css';

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

// AllRecords.propTypes = {

//   increaseCount: PropTypes.func.isRequired,
//   decreaseCount: PropTypes.func.isRequired,
//   updateLike: PropTypes.func.isRequired,

//   allRecords: PropTypes.shape({
//
//   }).isRequired,
// };

export default AllRecords;
