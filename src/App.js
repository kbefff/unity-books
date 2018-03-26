

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/About.js';
import Navigation from './components/Navigation.js';
import Books from './components/books/Books.js';
import Contact from './components/Contact.js';




const App = () => (
 
  <Router>
    
    <div>
      <Navigation />
      <div className="container">
        <Route exact path="/components/Home.js" component={Home}/>
        <Route exact path="/components/About.js" component={About}/>
        <Route exact path="/components/books/Books.js" component={Books}/>
        <Route exact path="/components/Contact.js" component={Contact}/>
      </div>
    </div>
  </Router>
)
export default App