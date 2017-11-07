import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import 'antd/dist/antd.css';
import { DatePicker, message } from 'antd';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    this.setState({ date });
  }
  render() {
    return (
      <div className="App">
      	<DatePicker onChange={value => this.handleChange(value)} />
        <p className="App-intro">
          To get started, edit <code>{this.state.date.toString()}</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
