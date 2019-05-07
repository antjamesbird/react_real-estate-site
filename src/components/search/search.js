import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import base from '../../base';
import './search.scss';

class Search extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();

    const searchParams = {
      multipleRef: this.multipleRef.value,
      propertyType: this.type.value,
      priceFrom: parseInt(this.priceFrom.value),
      priceTo: parseInt(this.priceTo.value),
      bedrooms: this.bedrooms.value
    }

    if (!searchParams.multipleRef) {
        alert('Please enter a web reference, city or suburb');
        return false;
      }

    base.fetch('sale', {
      context: this,
      asArray: true,
      then(data){
        const properties = data;
        _.forEach(properties, (property) => {
          if ((searchParams.multipleRef === property.web_reference
          || searchParams.multipleRef === property.suburb || searchParams.multipleRef === property.city)) {
            const price = property.price.replace(/R|r|,| /g,'');
            const priceValue = parseInt(price);
            if (searchParams.priceFrom <= priceValue && searchParams.priceTo <= priceValue) {
              if (searchParams.propertyType === property.propertyType) {
                if (searchParams.bedrooms === property.bedrooms) {
                  if (this.pathName === '/search') {
                    this.props.deleteSearchResults();
                  }
                  this.props.updateSearchResults(property);
                }
              }
            }
          }
        });
        this.context.router.history.push('/search');
      }
    });
  }

  render() {
    this.pathName = window.location.pathname;
    return (
      <div className={this.props.classList}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <label htmlFor="search">
                <input id="search" ref={(input) => this.multipleRef = input} placeholder="search for a city, suburb or web reference " type="text" name="search" />
              </label>
            </div>
            <div className="col-sm-12 col-md-2">
              <button onClick={(e) => this.handleSearch(e)} type="button" name="button">search</button>
            </div>
          </div>
          <div className="row search-params">
            <div className="col-sm-12 col-md-2">
              <label htmlFor="type">
                type
                <select ref={(input) => this.type = input} id="type" name="type" >
                  <option>House</option>
                  <option>Apartment / Flat</option>
                  <option>Townhouse</option>
                  <option>Vacant Land / Plot</option>
                  <option>Farm</option>
                  <option>Commercial Property</option>
                  <option>Industrial Property</option>
                </select>
              </label>
            </div>
            <div className="col-sm-12 col-md-2">
              <label htmlFor="FromPrice">
                price rance
                <select ref={(input) => this.priceFrom = input} id="FromPrice" name="FromPrice">
                  <option value="100000">R 100 000</option>
                  <option value="150000">R 150 000</option>
                  <option value="200000">R 200 000</option>
                  <option value="250000">R 250 000</option>
                  <option value="300000">R 300 000</option>
                  <option value="350000">R 350 000</option>
                  <option value="400000">R 400 000</option>
                  <option value="450000">R 450 000</option>
                  <option value="500000">R 500 000</option>
                  <option value="600000">R 600 000</option>
                  <option value="700000">R 700 000</option>
                  <option value="800000">R 800 000</option>
                  <option value="900000">R 900 000</option>
                  <option value="1000000">R 1 000 000</option>
                  <option value="1250000">R 1 250 000</option>
                  <option value="1500000">R 1 500 000</option>
                  <option value="1750000">R 1 750 000</option>
                  <option value="2000000">R 2 000 000</option>
                  <option value="2500000">R 2 500 000</option>
                  <option value="3000000">R 3 000 000</option>
                  <option value="3500000">R 3 500 000</option>
                  <option value="4000000">R 4 000 000</option>
                  <option value="4500000">R 4 500 000</option>
                  <option value="5000000">R 5 000 000</option>
                  <option value="6000000">R 6 000 000</option>
                  <option value="7000000">R 7 000 000</option>
                  <option value="8000000">R 8 000 000</option>
                  <option value="9000000">R 9 000 000</option>
                  <option value="10000000">R 10 000 000</option>
                  <option value="15000000">R 15 000 000</option>
                </select>
              </label>
            </div>
            <div className="col-sm-12 col-md-2">
              <label htmlFor="ToPrice">
                &nbsp;
                <select ref={(input) => this.priceTo = input} id="ToPrice" name="ToPrice">
                  <option value="100000">R 100 000</option>
                  <option value="150000">R 150 000</option>
                  <option value="200000">R 200 000</option>
                  <option value="250000">R 250 000</option>
                  <option value="300000">R 300 000</option>
                  <option value="350000">R 350 000</option>
                  <option value="400000">R 400 000</option>
                  <option value="450000">R 450 000</option>
                  <option value="500000">R 500 000</option>
                  <option value="600000">R 600 000</option>
                  <option value="700000">R 700 000</option>
                  <option value="800000">R 800 000</option>
                  <option value="900000">R 900 000</option>
                  <option value="1000000">R 1 000 000</option>
                  <option value="1250000">R 1 250 000</option>
                  <option value="1500000">R 1 500 000</option>
                  <option value="1750000">R 1 750 000</option>
                  <option value="2000000">R 2 000 000</option>
                  <option value="2500000">R 2 500 000</option>
                  <option value="3000000">R 3 000 000</option>
                  <option value="3500000">R 3 500 000</option>
                  <option value="4000000">R 4 000 000</option>
                  <option value="4500000">R 4 500 000</option>
                  <option value="5000000">R 5 000 000</option>
                  <option value="6000000">R 6 000 000</option>
                  <option value="7000000">R 7 000 000</option>
                  <option value="8000000">R 8 000 000</option>
                  <option value="9000000">R 9 000 000</option>
                  <option value="10000000">R 10 000 000</option>
                  <option value="15000000">R 15 000 000</option>
                  <option value="0">R 15 000 000+</option>
                </select>
              </label>
            </div>
            <div className="col-sm-12 col-md-2">
              <label htmlFor="Bedrooms">
                beds
                <select ref={(input) => this.bedrooms = input} id="Bedrooms" name="Bedrooms">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Search.contextTypes = {
  router: PropTypes.object
}

export default Search;