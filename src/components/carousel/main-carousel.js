import React from 'react';
import Slider from 'react-slick';
import Search from '../search/search';
import './main-carousel.scss';
import slide from './slide1.jpg';

// TODO build up an array of slides

class MainCarousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
    };
    return (
      <div id="carousel-wrap">
        <div className="carousel">
          <Slider {...settings}>
            <div><img src={slide} alt="homes" /></div>
            <div><img src={slide} alt="homes" /></div>
            <div><img src={slide} alt="homes" /></div>
          </Slider>
        </div>
        <Search updateSearchResults={this.props.updateSearchResults} classList="search-component" />
      </div>
    );
  }
}

export default MainCarousel;