/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecordsByCategory.module.css';
import Card from '../Card/Card';
import './RecordsByCategory.css';

const RecordsByCategory = ({
  recordByCategory, increaseCount, decreaseCount, updateLike,
}) => (
  <div className="app-container-category">
    <div>
      <Link to="/allrecords"><button type="button" className="category-button-category" /></Link>
    </div>

    {Object.keys(recordByCategory).map((genre) => (
      <div>

        {' '}
        {console.log(`./${genre}.png`)}
        <img src={`../../assets/${genre}.png`} alt="genre" />
        <h1>{genre}</h1>

        <div className="inventory-container-category">
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
