import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageWrapper from './components/PapeWrapper';
import Home from './components/Pages/Home';


function App() {
  return (
    <div className="App">
        <PageWrapper>

          <Home />
        </PageWrapper>

        <h1>hello</h1>
    </div>
  );
}

export default App;
