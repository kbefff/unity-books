
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navigation from './Navigation.js';

const About = () => (
    <div>
      <Navigation />
      <h2>About</h2>
        <p>"In 1998, I entered the 12 step world of recovery from alcoholism.  Since then, I have “joined” a few other recovery groups and, finding no local 12 step bookstores in Seattle, I have recently decided to open my own. Unity on Union Books.</p>
        <p>Fellowship is a vital part of my recovery.  At Unity on Union, I invite you to browse our selection of literature, have a coffee or tea and relax in our 1,200 foot space that is designed with Fellowship in mind!"</p>
    </div>
  )


export default About