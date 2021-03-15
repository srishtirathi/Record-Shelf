/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './RecordsByCategory.css';

const RecordsByCategory = ({ recordByCategory }) => (
  <div className="app-container">

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
              />
            </div>
          ))}

        </div>
      </div>
    ))}
  </div>
);
export default RecordsByCategory;
