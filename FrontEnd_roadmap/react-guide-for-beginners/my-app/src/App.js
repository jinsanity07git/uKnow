import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NameComponent from './components/NameComponent';

class App extends Component{


  constructor(props) {
    super(props);

    this.state = {
      array : ['welcome', 'to', 'my', 'course'],
      user_name : 'jinsanity'
    }

    this.handleClick = this.handleClick.bind(this)
  }  

componentDidMount(){
  console.log('obj')
}

console(obj){
  console.log(obj)
}

handleClick(){
      this.setState({
      user_name : "jinsanity07"
    });
}

 render() {
  var word = "as";
  var style = {fontSize: '40px'};
  const {array} = this.state ;


    return (


      <div>
          <p className= "text-large" style={style}>
            Edit and save to reload.
          <h5> {this.state.user_name}</h5> 
          </p>                

          {array.map(word => {
            return (
                <p key={word}> {word}</p>
              )
          })}

          <button onClick={this.handleClick}> 
            <NameComponent/> 
          </button>
      </div>
    );
  }
}

export default App;
