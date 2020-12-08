import React, { Component } from 'react';
// import base from '../../base';
import firebase from 'firebase';

class Capture extends Component {
  constructor() {
    super();
    this.createProperty = this.createProperty.bind(this);
    this.handleImgUpload = this.handleImgUpload.bind(this);
  }

  componentWillMount () {
    this.propertyImages = [];
  }

  handleImgUpload(e) {
    document.getElementById('progressBar').setAttribute('value', '0');
    const file = this.upload.files[0];
    const storageRef = firebase.storage().ref(`propertyImages/${file.name}`);
    const task = storageRef.put(file);

    task.then((response) => {
      this.propertyImages.push(response.a.downloadURLs[0]);
    });

    task.on('state_changed',
      function progress(snapshot) {
        const loaderProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        document.getElementById('progressBar').setAttribute('value', loaderProgress);
      },

      function error(error) {
        alert('there was an error uploading the file');
      }
    )
  }

  createProperty(e) {
    e.preventDefault();
    const property = {
      web_reference: this.web_reference.value,
      price: this.price.value,
      city: this.city.value,
      suburb: this.suburb.value,
      title: this.title.value,
      description: this.description.value,
      type: this.type.value,
      propertyType: this.propertyType.value,
      erf_size: this.erf_size.value,
      floor_size: this.floor_size.value,
      levies: this.levies.value,
      rates_and_taxes: this.rates_and_taxes.value,
      listing_date: this.listing_date.value,
      bedrooms: this.bedrooms.value,
      bathrooms: this.bathrooms.value,
      kitchen: this.kitchen.value,
      lounge: this.lounge.value,
      dining_room: this.dining_room.value,
      garage: this.garage.value,
      garden: this.garden.value,
      pool: this.pool.value,
      outbuilding: this.outbuilding.value,
      // mainimg: this.mainimg.value,
      property_images: this.propertyImages,
      agents_name: this.agents_name.value,
      agents_number: this.agents_number.value,
      agents_email: this.agents_email.value
    }
    const type = this.type.value.toLowerCase();
    this.props.addProperty(property, type);
    this.propForm.reset();
  }

  render() {
    return (
      <div className="col-sm-6">
        <h1>Capture a new listing</h1>
          <form id="captureForm" ref={(input) => this.propForm = input} onSubmit={(e) => this.createProperty(e)}>
            <div className="form-group col-sm-12">
              <label htmlFor="web_reference">Web Reference</label>
              <br />
              <input placeholder="enter a web reference" ref={(input) => this.web_reference = input} className="form-control" id="web_reference" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="property-type">Type</label>
                <select className="form-control" ref={(input) => this.propertyType = input} id="property-type" name="property-type" >
                  <option>House</option>
                  <option>Apartment / Flat</option>
                  <option>Townhouse</option>
                  <option>Vacant Land / Plot</option>
                  <option>Farm</option>
                  <option>Commercial Property</option>
                  <option>Industrial Property</option>
                </select>
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="price">Price</label>
              <br />
              <input className="form-control" ref={(input) => this.price = input} id="price" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="city">City</label>
              <br />
              <input className="form-control" ref={(input) => this.city = input} id="city" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="suburb">Suburb</label>
              <br />
              <input className="form-control" ref={(input) => this.suburb = input} id="suburb" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="title">Title</label>
              <br />
              <input className="form-control" ref={(input) => this.title = input} id="title" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="Description">Description</label>
              <br />
              <textarea className="form-control" ref={(input) => this.description = input} name="Description" id="Description" cols="30" rows="5"></textarea>
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="type">Type</label>
                <select className="form-control" ref={(input) => this.type = input} id="type" name="type" >
                  <option>Rent</option>
                  <option>Sale</option>
                </select>
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="erf_size">Erf Size</label>
              <br />
              <input className="form-control" ref={(input) => this.erf_size = input} id="erf_size" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="floor_size">Floor Size</label>
              <br />
              <input className="form-control" ref={(input) => this.floor_size = input} id="floor_size" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="levies">Levies</label>
              <br />
              <input className="form-control" ref={(input) => this.levies = input} id="levies" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="rates_and_taxes">Rates and Taxes</label>
              <br />
              <input className="form-control" ref={(input) => this.rates_and_taxes = input} id="rates_and_taxes" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="listing_date">Listing Date</label>
              <br />
              <input className="form-control" ref={(input) => this.listing_date = input} id="listing_date" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="Bedrooms">Bedrooms</label>
                <input className="form-control" ref={(input) => this.bedrooms = input} id="Bedrooms" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="Bathrooms">Bathrooms</label>
              <input className="form-control" ref={(input) => this.bathrooms = input} id="Bathrooms" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="Kitchen">Kitchen</label>
              <input className="form-control" ref={(input) => this.kitchen = input} id="kitchen" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="lounge">Lounge</label>
              <input className="form-control" ref={(input) => this.lounge = input} id="lounge" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="dining_room">Dining Room</label>
              <input className="form-control" ref={(input) => this.dining_room = input} id="dining_room" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="garage">Garage</label>
              <input className="form-control" ref={(input) => this.garage = input} id="garage" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="garden">Garden</label>
              <input className="form-control" ref={(input) => this.garden = input} id="garden" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="pool">Pool</label>
              <input className="form-control" ref={(input) => this.pool = input} id="pool" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="outbuilding">Outbuilding</label>
              <input className="form-control" ref={(input) => this.outbuilding = input} id="outbuilding" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="price">Upload Images</label>
              <br />
              <input className="form-control" onChange={(e) => this.handleImgUpload(e)} ref={(input) => this.upload = input} id="upload" type="file" />
              <progress id="progressBar" max="100" value="0"></progress>
            </div>
            {/*<div className="form-group col-sm-12">
              <label htmlFor="price">Main Image</label>
              <br />
              <input className="form-control" ref={(input) => this.mainimg = input} id="mainImage" type="text" />
            </div>*/}
            {/*<div className="form-group col-sm-12">
              <label htmlFor="property_images">Property Images<br/></label>
              <br />
              <textarea className="form-control" ref={(input) => this.property_images = input} disabled id="property_images" type="text"></textarea>
            </div>*/}
            <div className="form-group col-sm-12">
              <label htmlFor="agents_name">Agents Name</label>
              <br />
              <input className="form-control" ref={(input) => this.agents_name = input} id="agents_name" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="agents_number">Agents Number</label>
              <br />
              <input className="form-control" ref={(input) => this.agents_number = input} id="agents_number" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <label htmlFor="agents_email">Agents Email</label>
              <br />
              <input className="form-control" ref={(input) => this.agents_email = input} id="agents_email" type="text" />
            </div>
            <div className="form-group col-sm-12">
              <br/>
              <button className="btn btn-outline-primary btn-block" type="submit">Add Property</button>
            </div>
          </form>
      </div>
    );
  }
}

export default Capture;