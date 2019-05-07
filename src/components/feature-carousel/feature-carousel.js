import React, { Component } from 'react';
import CarouselItem from './carousel-item';
import Slider from 'react-slick';
import './feature.scss';

class FeatureCarousel extends Component {

  componentWillMount() {
    this.settings = {
      dots: false,
      arrows: true,
      autoplay: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      fade: false
    };

    this.slidesToShow = Object
                      .keys(this.props.forSale)
                      .map(key => <div key={key}><CarouselItem key={key} details={this.props.forSale[key]} /></div>)
    this.slider = <Slider {...this.settings}>{this.slidesToShow}</Slider>

  }
  render() {
    const featuresHomes = this.slider
    return (
       <div className="row">
          <div className="container">
            <h1>Featured Properties</h1>
            <div className="propertyCarousel">
              {
                featuresHomes
              }
            </div>
          </div>
        </div>
    )
  }
}

export default FeatureCarousel;