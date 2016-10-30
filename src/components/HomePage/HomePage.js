import React from 'react';
import Helmet from 'react-helmet';
import './HomePage.scss';
import FccSVG from '../FccSVG/FccSVG';

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
