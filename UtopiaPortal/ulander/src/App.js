import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageWrapper from './components/PapeWrapper';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <PageWrapper>

            <Route
             exact = {true}
             path ="/"
             component={Home}
             />

            <Route
             path ="/about"
             component={About}
             />

          {/* <Home /> */}
        </PageWrapper>
      </Router>
        <h1>hello</h1>
    </div>
  );
}

export default App;
