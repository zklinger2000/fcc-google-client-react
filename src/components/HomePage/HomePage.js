import React from 'react';
import Helmet from 'react-helmet';
import './HomePage.scss';
import FccSVG from '../FccSVG/FccSVG';

// TODO: Create a server.js file to serve app from 'dist/' like on portfolio site when on Heroku
const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet
        title="FCC Google Client"
        titleTemplate="%s | React"
      />
      <div className="jumbotron">
        <FccSVG/>
      </div>
    </div>
  );
};

export default HomePage;
