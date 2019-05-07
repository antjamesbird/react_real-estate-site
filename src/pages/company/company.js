import React, { Component } from 'react';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import Footer from '../../components/footer/footer';
import sanjay from '../images/sanjay.jpg';
import dolly from '../images/dolly.jpg';
import './company.scss';

class CompanyView extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search updateSearchResults={this.props.updateSearchResults} classList="search-component no-carousel" />
        <main id="companyView" className="main" role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>About us:</h1>
                <p>We Aim to sell your property at the best possible price in the shortest possible
                  time and therefore make it our mission to provide you with an accurate valuation.
                  Find out how we conduct this valuation by calling one of our experts on 076 2566 711
                </p>
                <h1>Our Services Include:</h1>
                <ul>
                  <li>Buying &amp; Selling</li>
                  <li>Residential</li>
                  <li>Commercial</li>
                  <li>Industrial</li>
                  <li>Vacant Land</li>
                  <li>New Bond</li>
                  <li>Refinancing Existing Bonds</li>
                  <li>Development</li>
                  <li>Renovating</li>
                  <li>Mediation</li>
                  <li>Property Disputes</li>
                  <li>Late Estates</li>
                </ul>
                <h1>Meet the experts:</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="imgContainer clearfix">
                  <div className="img">
                    <img src={sanjay} alt="Sanjay Math"/>
                  </div>
                  <div className="details">
                    <h3>Sanjay Math</h3>
                    <p>Cell: 076 256 6711</p>
                    <p>Email: <a href="mailto:homespecialistinfo@gmail.com">homespecialistinfo@gmail.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="imgContainer clearfix">
                  <div className="img">
                    <img src={dolly} alt="Dolly Math"/>
                  </div>
                  <div className="details">
                    <h3>Dolly Math</h3>
                    <p>Cell: 076 289 5424</p>
                    <p>Email: <a href="mailto:homespecialistinfo@gmail.com">homespecialistinfo@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h1>Meet our partners:</h1>
                <ul>
                  <li>M.Y. Baig & Company</li>
                  <li>Subhash Maharaj & Company</li>
                  <li>Beharie Incoperated - <a href="http://www.beharieinc.co.za/" target="_blank">www.beharieinc.co.za</a></li>
                  <li>Arvin Singh Attorneys</li>
                  <li>P. Ramjathan & Associates</li>
                  <li>JJ Accounting & Tax Consultants (Pty) Ltd - <a href="http://www.jjatc.co.za/" target="_blank">www.jjatc.co.za</a></li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default CompanyView;
