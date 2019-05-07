import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3">
                <h1>Navigation</h1>
                <ul className="footer-nav">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">For Sale</a></li>
                  <li><a href="#">To Rent</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Calculator</a></li>
                  <li><a href="#">Our Company</a></li>
                  <li><a href="#">Valuation</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h1>Our Services</h1>
                <p>Buying, Selling, Letting, Developing, Renovating, Late Estate,
                Mediation, Property Disputes, New Bonds, Refinancing Existing Bonds, Valuations</p>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;