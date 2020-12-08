import React, { Component } from 'react';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import Footer from '../../components/footer/footer';
import './contact.scss';

class ContactView extends Component {
  componentWillUnmount() {
    delete window.currentWebRef;
  }

  componentWillMount() {
    if (window.currentWebRef) {
      this.commentText = `Please contact me regarding web reference ${window.currentWebRef}`
    } else {
      this.commentText = 'Please contact me regarding property related services.'
    }
  }

  render() {
    const iFrameStyle = {
      border: '0'
    };
    return (
      <div>
        <Header />
        <Search updateSearchResults={this.props.updateSearchResults} classList="search-component no-carousel" />
        <main className="main noBorderTop" role="main">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.315592964824!2d30.873478314946322!3d-29.912815332126733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6552232d950d1%3A0x9b6c8e355ef23f8!2s27+Trisula+Ave%2C+Arena+Park%2C+Chatsworth%2C+4092!5e0!3m2!1sen!2sza!4v1495719024135" width="100%" height="400" frameBorder="0" style={iFrameStyle} allowFullScreen></iframe>
          <div className="container">
            <div className="row contactDetails">
              <div className="col-sm-12 col-md-6">
                <h1>Home Specialist Premier Property</h1>
                <h3>Physical Address</h3>
                <p>27 Trisula Avenue<br />Arena Park<br />Chatsworth</p>
                <h3>Contact Details</h3>
                <p><strong>Tel:</strong>031 404 2564
                <br /><strong>Cell:</strong>076 256 6711
                <br /><strong>Fax:</strong>086 263 1247
                <br /><strong>Email:</strong><a href="mailto:homespecialistinfo@gmail.com">homespecialistinfo@gmail.com</a></p>
              </div>
              <div className="col-sm-12 col-md-6">
                <h1>Send Message:</h1>
                <form name="contactform">
                  <div className="form-group">
                    <label className="control-label" htmlFor="name">Name:</label>
                    <div>
                      <input required ref={(input) => this.name = input} className="form-control" id="name" name="name" placeholder="Enter Your Name" type="text" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="email">Email Address:</label>
                    <div>
                      <input ref={(input) => this.email = input} className="form-control" name="email" pattern="^([a-zA-Z0-9]+[a-zA-Z0-9_\-\.]*)@(([a-zA-Z0-9]+[a-zA-Z0-9-]+\.)|([a-zA-Z0-9]+\.))+([a-zA-Z]{2,10})$" id="email" placeholder="Enter your email address" type="email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="mobile">Mobile Number:</label>
                    <div>
                      <input ref={(input) => this.mobile = input} className="form-control" name="mobile" id="mobile" placeholder="Enter number" type="number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="comments">Comments:</label>
                    <div>
                      <textarea ref={(input) => this.comments = input} name="comments" className="form-control" id="comments" value={this.commentText} type="number"></textarea>
                    </div>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ContactView;
