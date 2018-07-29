import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: false,
      key: -1
    };
  }

  componentDidMount() {
    this.setState({
      type: this.props.choosed,
      key: this.props.id
    });
    console.log(this.state.type);
  }

  deleteItem = () => {
    console.log('kmj----------dele', this.props.data);
    this.props.delete(this.props.data);
  };

  render() {
    return this.state.type ? (
      <div id="list" key={this.props.data}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Text"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            id="inputType"
          />
          <span className="input-group-append" id="clear">
            <span
              className="input-group-text"
              id="basic-addon2"
              hidden={this.props.isClearShow}
              onClick={this.deleteItem}
            >
              X
            </span>
          </span>
        </div>
      </div>
    ) : (
      <div id="list">
        <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Text"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            id="inputType"
          />
          <span className="input-group-append" id="clear">
            <span
              className="input-group-text"
              id="basic-addon2"
              onClick={this.deleteItem}
              hidden={this.props.isClearShow}
            >
              X
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Item;
