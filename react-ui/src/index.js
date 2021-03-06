import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';
import './css/index.css';

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}
render(App)
