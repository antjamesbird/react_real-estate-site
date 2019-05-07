import React from 'react';
import './featured-links.scss';

class FeaturedLinks extends React.Component {
  render() {
      return (
        <div>
          <div className="container">
            <div id="featured-links" className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="featured-content">
                  <i className="icon icon-newsletter"></i>
                  <h2>About us</h2>
                  <p>Your property experts in real estate.</p>
                  <ul>
                    <li>Buying</li>
                    <li>Selling</li>
                    <li>Rentals</li>
                    <li>Renovation</li>
                    <li>Valuations</li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="featured-content">
                  <i className="icon icon-find"></i>
                  <h2>Contact Us</h2>
                  <p>Looking for a getaway? View our list of holiday getaways.</p>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="featured-content">
                  <i className="icon icon-listing"></i>
                  <h2>List your property</h2>
                  <p>List with us an experience a hassle free property sale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default FeaturedLinks;
