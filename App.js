import React, { Component } from 'react';
import Home from './pages/home/home';
import Admin from './admin/admin'
import PropertyTeaserView from './pages/property_teaser_view/property-teaser-view';
import PropertyDetailView from './pages/property_detail_view/property-detail-view';
import CompanyView from './pages/company/company';
import ContactView from './pages/contact/contact';
import CalculatorView from './pages/calculator/calculator';
import { sale, rent} from './common/payload';
import base from './base';
import { grid } from 'bootstrap-css';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.addProperty = this.addProperty.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
    this.loadSampleData = this.loadSampleData.bind(this);
    this.showCalcResults = this.showCalcResults.bind(this);
    this.showMainImage = this.showMainImage.bind(this);
    this.updateAuthState = this.updateAuthState.bind(this);
    this.updateNoState = this.updateNoState.bind(this);
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.deleteSearchResults = this.deleteSearchResults.bind(this);
    this.state = {
      sale: {},
      rent: {},
      searchResults: {},
      showHiddenResults: false,
      displayImgUrl: null,
      authenticationStatus: false,
      noState: true
    }
  }

  componentWillMount() {
    this.saleRef = base.syncState(`sale`, {
      context: this,
      state: 'sale'
    });
    this.rentRef = base.syncState(`rent`, {
      context: this,
      state: 'rent'
    });
    this.rentRef = base.syncState(`searchResults`, {
      context: this,
      state: 'searchResults'
    });
  }

  deleteSearchResults(property) {
    const state = {...this.state.searchResults};
    Object.keys(state).forEach((key) => {
      state[key] = null;
    });
    this.setState({ searchResults: state });
  }

  updateSearchResults(property) {
    const state = {...this.state.searchResults};
    const timestamp = Date.now();
    state[`prop${timestamp}`] = property;
    this.setState({ searchResults: state });
  }

  addProperty(property, type) {
    const state = {...this.state[type]};
    const timestamp = Date.now();
    state[`prop${timestamp}`] = property;
    if (type === 'sale') {
      this.setState({ sale: state });
    } else if (type === 'rent') {
      this.setState({ rent: state });
    }
  }

  updateProperty(type, name, updatedProperty) {
    const state = {...this.state[type]};
    state[name] = updatedProperty;
    if (type === 'sale') {
      this.setState({ sale: state });
    } else if (type === 'rent') {
      this.setState({ rent: state });
    }
  }

  deleteProperty(type, key) {
    const state = {...this.state[type]};
    state[key] = null;
    if (type === 'sale') {
      this.setState({ sale: state });
    } else if (type === 'rent') {
      this.setState({ rent: state });
    }
  }

  showCalcResults(result) {
    let state = {...this.state.showHiddenResults};
    state = result;
    this.setState({ showHiddenResults: state });
  }

  updateAuthState(result) {
    let state = {...this.state.authenticationStatus};
    state = result;
    this.setState({ authenticationStatus: state });
  }

  updateNoState(status) {
    let state = {...this.state.noState};
    state = status;
    this.setState({ noState: state });
  }

  showMainImage(result) {
    let state = {...this.state.displayImgUrl};
    state = result;
    this.setState({ displayImgUrl: state });
  }

  loadSampleData() {
    this.setState({
      sale,
      rent
    })
  }

  render() {
    let view = null;
    const url = window.location.pathname;
    switch(url) {
      case '/':
          view = <Home 
                  loadSampleData={this.loadSampleData} 
                  forSale={this.state.sale}
                  rent={this.state.rent} 
                  updateNoState={this.updateNoState}
                  updateSearchResults={this.updateSearchResults} />
          break;
      case '/sale':
          view = <PropertyTeaserView 
                  updateSearchResults={this.updateSearchResults} 
                  property={this.state.sale} />
          break;
      case '/rent':
          view = <PropertyTeaserView
                  property={this.state.rent}
                  updateSearchResults={this.updateSearchResults} />
          break;
      case '/search':
          view = <PropertyTeaserView 
                  updateSearchResults={this.updateSearchResults}
                  deleteSearchResults={this.deleteSearchResults} 
                  property={this.state.searchResults}
                  searchResults={this.state.searchResults} />
          break;
      case '/company-profile':
          view = <CompanyView updateSearchResults={this.updateSearchResults} />
          break;
      case '/contact':
          view = <ContactView updateSearchResults={this.updateSearchResults} />
          break;
      case '/calculator':
          view = <CalculatorView 
                  showCalcResults={this.showCalcResults} 
                  showHiddenResults={this.state.showHiddenResults}
                  updateSearchResults={this.updateSearchResults} />
          break;
      case '/property-detail':
          view = <PropertyDetailView 
                  updateSearchResults={this.updateSearchResults} 
                  displayImgUrl={this.state.displayImgUrl} 
                  showMainImage={this.showMainImage} 
                  property={this.state.rent} />
          break;
      case '/admin':
          view = <Admin 
                  rent={this.state.rent} 
                  sale={this.state.sale} 
                  addProperty={this.addProperty} 
                  updateProperty={this.updateProperty} 
                  deleteProperty={this.deleteProperty}
                  authenticationStatus={this.state.authenticationStatus}
                  updateAuthState={this.updateAuthState}
                  />
          break;
      default:
          view = <Home />
    }

    return view;
  }
}

export default App;
