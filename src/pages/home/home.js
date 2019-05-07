import React from 'react';
import Header from '../../components/header/header';
import MainCarousel from '../../components/carousel/main-carousel';
import FeatureCarousel from '../../components/feature-carousel/feature-carousel';
import Footer from '../../components/footer/footer';
import FeaturedLinks from './featured-links';
import base from '../../base';
import loader from './loader.svg';

class Home extends React.Component {
  componentWillMount() {
    function isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
    }

    if(isEmpty(this.props.forSale)) {
      base.fetch('sale', {
        context: this,
        asArray: true,
        then(data){
          this.props.updateNoState(false);
          this.featureCarousel = <FeatureCarousel 
                                  updateNoState={this.props.updateNoState} 
                                  forSale={this.props.forSale} />
        }
      });
    } else {
      this.featureCarousel = <FeatureCarousel 
                              updateNoState={this.props.updateNoState} 
                              forSale={this.props.forSale} />
    }
  }
  render() {
    const feature = this.featureCarousel || <div className="container"><div className="row"><div className="col-md-12"><img src={loader} alt="loader"/></div></div></div>
      return (
      <div>
        <Header />
        <MainCarousel updateSearchResults={this.props.updateSearchResults} />
        <main className="main" role="main">
          <FeaturedLinks />
          {feature}
        </main>
        <Footer />
        <button onClick={this.props.loadSampleData}>load samples</button>
      </div>
      )
  }
}

export default Home;
