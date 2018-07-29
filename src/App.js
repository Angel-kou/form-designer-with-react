import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: false,
      list: [],
      count: 0,
      isPreview: false
    };
  }

  addFieldType = () => {
    var choosed = this.refs.myText1.checked;

    console.log('kmj', choosed);
    const count = this.state.count++;
    this.state.list.push(count);

    this.setState({
      choose: choosed,
      list: this.state.list,
      count: this.state.count
    });
  };

  deleteFieldType = key => {
    const res = this.state.list.filter(item => item !== key);
    this.setState({
      list: res
    });
  };

  changeState = () => {
    this.setState({
      isPreview: !this.state.isPreview
    });
  };

  render() {
    return (
      <div className="App">
        <h3>表单设计器</h3>

        <input
          type="button"
          className="btn btn-primary"
          id="preview"
          ref="stateBtn"
          value={this.state.isPreview ? 'Edit' : 'Preview'}
          onClick={this.changeState}
        />

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          id="add"
          hidden={this.state.isPreview}
        >
          +
        </button>
        <div>
          <div>
            {this.state.list.map(item => (
              <Item
                key={item}
                data={item}
                choosed={this.state.choose}
                delete={this.deleteFieldType}
                isClearShow={this.state.isPreview}
              />
            ))}
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Select Field Type
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    defaultChecked="checked"
                    ref="myText1"
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Text Input
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                    ref="myText2"
                  />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    Date Picker
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.addFieldType}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
