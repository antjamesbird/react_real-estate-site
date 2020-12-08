import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import 'property-teaser.scss';

class PropertyTeaser extends Component {
  constructor() {
    super();
    this.showPropertyDetail = this.showPropertyDetail.bind(this);
  }

  showPropertyDetail(e, route) {
    e.preventDefault();
    this.context.router.history.push(route);
    localStorage.setItem('property-detail', JSON.stringify(this.props.details));
  }

  render() {
    const mainImg = this.props.details.property_images ? <img src={this.props.details.property_images[0] || ''} alt="" /> : <div></div>;
    return (
      <div className="row">
        <div className="col-md-4 no-padding main-img">
          {mainImg}
        </div>
        <div className="col-md-8 no-padding">
          <h2 className="price">{this.props.details.price}</h2>
          <h3 className="title">{this.props.details.title}</h3>
          <p className="description">{this.props.details.description}</p>
          <button type="button" onClick={(e) => this.showPropertyDetail(e, '/property-detail')} name="button">view details</button>
        </div>
      </div>
    );
  }
}

export default PropertyTeaser;

PropertyTeaser.contextTypes = {
  router: PropTypes.object
}