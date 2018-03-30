

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/About.js';
import Navigation from './components/Navigation.js';
import Books from './components/books/Books.js';
import Contact from './components/Contact.js';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';




const App = () => (
 
  <Router>
    
    <div>
      <Navigation />
      <div className="container">
        {/* <div className="row">
            <div className="col-md-8">
                <ProductList />
            </div>
            <div className="col-md-4">
                <Cart />
            </div>
        </div> */}
        <Route exact path="/components/Home.js" component={Home}/>
        <Route exact path="/components/About.js" component={About}/>
        <Route exact path="/components/books/Books.js" component={Books}/>
        <Route exact path="/components/Contact.js" component={Contact}/>
      </div>
    </div>
  </Router>
)
export default App