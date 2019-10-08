import React, {Component} from 'react';


class NameComponent extends Component{

componentDidMount(){
  console.log("NameComponent did mounted")
}

 render() {
  var word = "hello Jinsanity";
  var style = {fontSize: '20px'};
    return (

      <div>
          <p className= "text-large" style={style}>
            NameComponent.
          </p>
          <h3>
          {word}
          </h3>
   
      </div>
    );
  }
}

export default NameComponent;
