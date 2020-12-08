import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, route) {
    e.preventDefault();
    this.context.router.history.push(route);
  }

  render() {
    const pathname = window.location.pathname;
    return (
      <nav className="navigation" role="navigation">
        <ul>
          <li>
            <a href="#" className={pathname === '/' ? 'active' : 'notactive'} onClick={(e) => this.handleClick(e, '/')}>Home</a>
          </li>
          <li>
            <a href="#" className={pathname === '/sale' ? 'active' : 'notactive'} onClick={(e) => this.handleClick(e, '/sale')}>For Sale</a>
          </li>
          <li>
            <a href="#" className={pathname === '/rent' ? 'active' : 'notactive'} onClick={(e) => this.handleClick(e, '/rent')}>Rentals</a>
          </li>
          <li>
            <a href="#" className={pathname === '/calculator' ? 'active' : 'notactive'} onClick={(e) => this.handleClick(e, '/calculator')}>Bond Calculator</a>
          </li>
          <li>
            <a href="#" className={pathname === '/company-profile' ? 'active' : 'notactive'} onClick={(e) => this.handleClick(e, '/company-profile')}>Our Company</a>
          </li>
          <li>
            <a href="#" className={pathname === '/contact' ? 'active' : 'notactive'} onClick={(e) => this.handleClick(e, '/contact')}>Contact</a>
          </li>
          <li>
            <a href="#"  onClick={(e) => this.handleClick(e, '/admin')}>Admin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

Nav.contextTypes = {
  router: PropTypes.object
}

export default Nav;