import React, { Component } from 'react';
import './logo.scss';
import mainLogo from './logo.png'

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={mainLogo} alt="Logo" />
        <a href="/">
          <h1>Home Specialist Premier Property <br /><span>Real Estate Agency</span></h1>
        </a>
      </div>
    );
  }
}

export default Logo;