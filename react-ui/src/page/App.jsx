import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import News from '../components/News';
import Navbar from '../components/CustomNavbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/now" component={Home} />
        </div>
      </Router>
    );
  }
}
