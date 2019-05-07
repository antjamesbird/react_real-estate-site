import React, { Component } from 'react';
import Logo from '../logo/logo';
import Nav from '../nav/nav'
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header" role="banner">
        <Logo />
        <Nav />
      </header>
    );
  }
}

export default Header;