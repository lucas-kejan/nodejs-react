import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  changeTitle(title){
    document.title = title;
  }

  componentDidMount() {
    fetch('/api')
    .then(response => {
      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }
      return response.json();
    })
    .then(json => {
      this.changeTitle(json.message);
      this.setState({
        message: json.message,
        fetching: false
      });
    }).catch(e => {
      this.setState({
        message: `API call failed: ${e}`,
        fetching: false
      });
    })
  }

  render() {
    return (
    <Router>
    <div className="App">
    <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome gh to React!.</h2>
    </div>
    <p className="App-intro">
    {'This is o '}
    <a href="https://github.com/mars/heroku-cra-node">
    {'create-react-app with a custom Node/Express server'}
    </a><br/>
    </p>
    <p className="App-intro">
    {this.state.fetching
      ? 'Fetching message from API'
      : this.state.message}
      </p>

      <ul>
      <li><Link to="/">Home</Link></li>
      <li><a href="/about">About</a></li>
      <li><Link to="/books">Books</Link></li>
      </ul>

      </div>
      </Router>
    );
  }
}

export default App;
