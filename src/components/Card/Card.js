/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Card.css';
import Heart from 'react-animated-heart';

const Card = ({
  name, artist, albumArtUrl, count, like, increaseCount, record, decreaseCount,
}) => {
  const [isClick, setClick] = useState(like);
  console.log('like', like);
  return (
    <div className="record-card" data-testid="card">

      <img data-testid="record-img" src={albumArtUrl} className="song-img" alt="songImg" />
      <div className="record-container">
        <p>

          {name}
        </p>
        <p>

          {artist}
        </p>
        <p>
          {count}
        </p>
        <div className="App">

          <Heart
            isClick={isClick}
            onClick={() => {
              setClick(!isClick);
              increaseCount(record);
              decreaseCount(record);
            }}
          />
        </div>

      </div>

    </div>
  );
};

export default Card;
