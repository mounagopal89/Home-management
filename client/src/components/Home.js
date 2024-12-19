import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for slides
import HomeImage from '../Homemng.jpg'; // Import the home image
import Familycnt from '../Familycnts.jpg'; // Import the family contacts image

const Home = () => {
  return (
    <div className="slides">
      <div className="slide">
        <h2>Home Maintenance</h2>
        <img src={HomeImage} alt="Home Management" className="home-img" />
        <p>Details about home maintenance projects.</p>
      </div>
      <Link to="/family-contacts" className="slide-link">
        <div className="slide">
          <h2>Family Contacts</h2>
          <img src={Familycnt} alt="Family Contacts" className="fam-conts-img"/>
          <p>Information about family contacts.</p>
        </div>
      </Link>
      <div className="slide">
        <h2>Kids Nutrients</h2>
        <p>Information and charts about kids' nutrition.</p>
      </div>
      <div className="slide">
        <h2>Veda Art</h2>
        <p>Details about hobbies and interests.</p>
      </div>
    </div>
  );
};

export default Home;