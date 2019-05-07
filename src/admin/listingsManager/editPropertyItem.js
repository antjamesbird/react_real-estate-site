import React, { Component } from 'react';

class EditPropertyItem extends Component {
  constructor() {
    super();
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e, val) {
    e.preventDefault();
    const property = this.props.details;
    const updatedProperty = {
      ...property,
      [this[val].id]: this[val].value
    };
    const type = this.props.details.type.toLowerCase();
    const name = this.props.name;

    this.props.updateProperty(type, name, updatedProperty);
  }

  render() {
    const properties = Object.keys(this.props.details);
    const listItems = properties.map((val) =>
      <div key={val} className="edit-form-group">
        <label htmlFor={val}>{val}</label>
        <input ref={(input) => this[val] = input} id={val} type="text" onBlur={(e) => this.handleUpdate(e, val)} defaultValue={this.props.details[val]}/>
      </div>
    );
    return (
      <div className="item-wrapper">     
          {listItems}
      </div>
    );
  }
}

export default EditPropertyItem;