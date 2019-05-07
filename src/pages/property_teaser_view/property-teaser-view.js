import React, { Component } from 'react';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import Footer from '../../components/footer/footer';
import PropertyTeaser from '../../components/property_teaser/property-teaser';
import './property-teaser.scss';

class PropertyTeaserView extends Component {
  componentWillUnmount() {
    if (this.pathName === '/search') {
      this.props.deleteSearchResults();
      console.log('unmounted');
    }
  }

  isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
    }
    return true;
  }

  render() {
    this.pathName = window.location.pathname;
    this.heading = 'Search Results';
    if (this.isEmpty(this.props.searchResults)) {
      this.subtext = 'Your search returned no results!';
    } else {
      this.subtext = `Your search returned ${Object.keys(this.props.searchResults).length} results`;
    }
    Object.keys(this.props.property).forEach((key) => {
      if (this.props.property[key].type === 'sale') {
        this.heading = 'Property for sale'
        return;
      } 
      if (this.props.property[key].type === 'rent') {
        this.heading = 'Property to rent'
        return;
      }
    });
    return (
      <div>
        <Header />
        <Search deleteSearchResults={this.props.deleteSearchResults}  updateSearchResults={this.props.updateSearchResults} classList="search-component no-carousel" />
        <main className="main" role="main">
          <div className="container sale-properties">
            <h1>{this.heading}</h1>
            <p>{this.subtext}</p>

            {
              Object
                .keys(this.props.property)
                .map(key => <PropertyTeaser key={key} details={this.props.property[key]} />)
            }
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default PropertyTeaserView;
