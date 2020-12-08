import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarouselItem extends Component {
  handleClick(e, route) {
    e.preventDefault();
    this.context.router.history.push(route);
    localStorage.setItem('property-detail', JSON.stringify(this.props.details));
  }
  render() {
    return (
      <div className="item">
        <div className="contents">
          <img src={this.props.details.mainimg} alt="house" />
          <p>{this.props.details.title}</p>
          <h3>{this.props.details.price}</h3>
          <button onClick={(e) => this.handleClick(e, '/property-detail')} type="button" name="button">view more details</button>
        </div>
      </div>
    )
  }
}

export default CarouselItem;

CarouselItem.contextTypes = {
  router: PropTypes.object
}