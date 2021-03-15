/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './RecordsByCategory.css';

const RecordsByCategory = ({
  recordByCategory, increaseCount, decreaseCount, updateLike,
}) => (
  <div className="app-container">
    <div>
      <Link to="/allrecords"><button type="button" className="category-button" /></Link>
    </div>

    {Object.keys(recordByCategory).map((genre) => (
      <div>

        {' '}

        <h1>{genre}</h1>
        <div className="inventory-container">
          {recordByCategory[genre].map((record) => (
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
                updateLike={updateLike}
              />
            </div>
          ))}

        </div>
      </div>
    ))}

  </div>
);
export default RecordsByCategory;
