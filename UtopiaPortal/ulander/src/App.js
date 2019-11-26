import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageWrapper from './components/PapeWrapper';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Team from './components/Common/Team';
import Portfolio from './components/Common/Portfolio';
import Services from './components/Common/Services';

import Footer from './components/Common/Footer';
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

            <Route
             path ="/contact"
             component={Contact}
             /> 

            <Route
             path ="/team"
             component={Team}
            />   


            <Route
             path ="/portfolio"
             component={Portfolio}
            />   

            <Route
             path ="/services"
             component={Services}
            />   


          {/* <Home /> */}
        </PageWrapper>
      </Router>
        
        <Footer/>
    </div>
  );
}

export default App;
