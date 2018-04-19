import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../component/Home';
import About from '../component/About';
import Topics from '../component/Topics';
import '../css/App.css';

export default class App extends Component {
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
            <h2>Welcome</h2>
            <img class="selfie" alt="Gaetano Zappi" src="https://avatars0.githubusercontent.com/u/17430491?s=460&v=4" />
          </div>
          <p className="App-intro">
            {this.state.fetching ? 'Fetching message from API' : this.state.message}
          </p>

            <hr />

            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
              </ul>

              <hr />

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
            </div>
          </div>
        </Router>
      );
    }
  }
