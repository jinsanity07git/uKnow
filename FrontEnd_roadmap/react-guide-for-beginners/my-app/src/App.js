import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NameComponent from './components/NameComponent';

class App extends Component{

componentDidMount(){
  console.log('obj')
}

console(obj){
  console.log(obj)
}

 render() {
  var word = "as";
  var style = {fontSize: '40px'};

  var array = ['welcome', 'to', 'my', 'course'];
  var arrayToRender = [];
  array.forEach(function(word) {
    arrayToRender.push(<p> {word}</p>)


  });

    return (

      <div>
          <p className= "text-large" style={style}>
            Edit and save to reload.

          </p>                
              <button onClick={this.console(arrayToRender[1])}> 
            <NameComponent/> 
          </button>
      </div>
    );
  }
}

export default App;
