import React, { Component } from 'react';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import Footer from '../../components/footer/footer';
import PropTypes from 'prop-types';
import './property-detail.scss';

class PropertyDetailView extends Component {

  constructor() {
    super();
    this.handleEnquiry = this.handleEnquiry.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentWillMount() {
    this.propertyDetail = JSON.parse(localStorage.getItem('property-detail'));
  }

  handleImageChange(e, url) {
    e.preventDefault();
    this.props.showMainImage(url);
  }

  handleEnquiry(e) {
    window.currentWebRef = this.propertyDetail.web_reference;
    this.context.router.history.push('/contact');
  }

  render() {
    const images = this.propertyDetail.property_images;
    let mainImg = null;
    let imgCollection = null;
    if(this.propertyDetail.property_images) {
      mainImg = <img src={this.props.displayImgUrl || images[0]} alt="main_img"/>
      imgCollection = images.map(url => <div key={url} className="col-md-3 showcase-img"><a href={url} onClick={(e) => this.handleImageChange(e, url)} data-lightbox="showcaseProperty"><img className="showcase-img" key={url} src={url} alt="propertyimage"/></a></div>);
    }
    return (
      <div>
        <Header />
        <Search updateSearchResults={this.props.updateSearchResults} classList="search-component no-carousel" />
        <main className="main" role="main">
          <div className="container property-details">
            <div className="row">
              <div className="col-md-8 no-padding main-img">
                <h1 className="title">{this.propertyDetail.title || ''}</h1>
                <h2>{this.propertyDetail.price || 'N/A'}</h2>
                <p>{this.propertyDetail.city}, {this.propertyDetail.suburb || ''}</p>
                <div className="container-fluid">
                  <div className="col-md-12">
                    {mainImg}
                  </div>
                  <div className="row prop-images">
                    {imgCollection}
                  </div>
                </div>
                <p>{this.propertyDetail.description}</p>
                <h3>Property Details</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Type of Property</td>
                      <td>{this.propertyDetail.propertyType || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Erf Size</td>
                      <td>{this.propertyDetail.erf_size || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Floor Size</td>
                      <td>{this.propertyDetail.floor_size || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Levies</td>
                      <td>{this.propertyDetail.levies || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Rates and Taxes</td>
                      <td>{this.propertyDetail.rates_and_taxes || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Listing Date</td>
                      <td>{this.propertyDetail.listing_date || 'N/A'}</td>
                    </tr>
                  </tbody>
                </table>
                <h3>Property Details</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Bedrooms</td>
                      <td>{this.propertyDetail.bedrooms || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Bathroom</td>
                      <td>{this.propertyDetail.bathrooms || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Kitchen</td>
                      <td>{this.propertyDetail.kitchen || 'N/A'}</td>
                    </tr>
                  </tbody>
                </table>
                <h3>Reception Rooms:</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Lounge</td>
                      <td>{this.propertyDetail.lounge || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Dining Room</td>
                      <td>{this.propertyDetail.dining_room || 'N/A'}</td>
                    </tr>
                  </tbody>
                </table>
                <h3>External Features:</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Garage</td>
                      <td>{this.propertyDetail.garage || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Garden</td>
                      <td>{this.propertyDetail.garden || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Pool</td>
                      <td>{this.propertyDetail.pool || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td>Outbuilding</td>
                      <td>{this.propertyDetail.outbuilding || 'N/A'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4 no-padding side-panel">
                <h2>Contact Agent</h2>
                <p>Web Reference: {this.propertyDetail.web_reference}</p>
                <p>Agents Name: {this.propertyDetail.agents_name}</p>
                <p>Agents Number: {this.propertyDetail.agents_number}</p>
                <p>Agents Email: {this.propertyDetail.agents_email}</p>
                <button className="btn btn-outline-primary btn-block" onClick={(e) => this.handleEnquiry(e)}>Enquire About This Property</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

PropertyDetailView.contextTypes = {
  router: PropTypes.object
}

export default PropertyDetailView;