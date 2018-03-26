

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/About.js';
import Navigation from './components/Navigation.js';
import Books from './components/Books.js';
import Contact from './components/Contact.js';



// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )


const App = () => (
 
  <Router>
    
    <div>
      <Route exact path="/components/Home.js" component={Home}/>
      <Route exact path="/components/About.js" component={About}/>
      <Route exact path="/components/Books.js" component={Books}/>
      <Route exact path="/components/Contact.js" component={Contact}/>
    </div>
  </Router>
)
export default App