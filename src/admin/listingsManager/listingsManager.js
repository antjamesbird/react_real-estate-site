import React, { Component } from 'react';
import EditPropertyItem from './editPropertyItem';
import './listings.scss';

class ListingsManager extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e, key, type) {
    e.preventDefault();
    this.props.deleteProperty(type, key);
  }

  render() {
    return (
      <div className="col-sm-6">
        <h1>List of Properties</h1>
        <h2>Property For Sale</h2>
        <ul>
          {
            Object
              .keys(this.props.sale)
              .map(key => <div key={key}><h3>Web Reference: {this.props.sale[key].web_reference}</h3><EditPropertyItem key={key} name={key} updateProperty={this.props.updateProperty} details={this.props.sale[key]} /><button onClick={(e) => this.handleDelete(e, key, 'sale')}>Delete Listing</button></div>)
          }
        </ul>
        <h2>Property For Rent</h2>
          {
            Object
              .keys(this.props.rent)
              .map(key => <div key={key}><h3>Web Reference: {this.props.rent[key].web_reference}</h3><EditPropertyItem key={key} name={key} updateProperty={this.props.updateProperty} details={this.props.rent[key]} /><button onClick={(e) => this.handleDelete(e, key, 'rent')}>Delete Listing</button></div>)
          }
      </div>
    );
  }
}

export default ListingsManager;