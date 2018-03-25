import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Navigation from './components/Navigation.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
