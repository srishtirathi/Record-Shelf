/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';

const Card = ({ name, artist, albumArtUrl }) => (
  <div className="record-card" data-testid="card">

    <img data-testid="record-img" src={albumArtUrl} className="song-img" alt="songImg" />
    <div className="record-container">
      <p>

        {name}
      </p>
      <p>

        {artist}
      </p>
    </div>

  </div>
);
export default Card;
