import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/sale" component={App}/>
      <Route path="/rent" component={App}/>
      <Route path="/search" component={App}/>
      <Route path="/company-profile" component={App}/>
      <Route path="/contact" component={App}/>
      <Route path="/calculator" component={App}/>
      <Route path="/admin" component={App}/>
      <Route path="/property-detail" component={App}/>
    </div>
  </Router>
)

render(<Root/>, document.querySelector('#root'))
