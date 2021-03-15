import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h4>Seems a bit empty in here :(</h4>
    <Link to="/allrecords"><button type="button">Sync</button></Link>
  </div>
);
export default Home;
