import React, {Component} from 'react';


class NameComponent extends Component{


  constructor(props) {
    super(props);
    this.state = {
      name_displayed : 'first name',
    };
  }

componentDidMount(){
  console.log("NameComponent did mounted")
}

componentDidUpdate(){
  console.log("  changed")
}

componentWillReceiveProps(nextProps){
    console.log(nextProps)
  if(this.props.word !== nextProps.word){
    if (nextProps.word.indexOf(' ')>-1 ){
      this.setState({
        name_displayed: "Full Name"
      })
      }
    else {
      this.setState({
           name_displayed: "first name"
         }
        )
    }
 
  }
}

 render() {
  const {word}           = this.props;
  const {name_displayed} = this.state;
  var style = {fontSize: '20px'};

    return (

      <div>
          <p className= "text-large" style={style}>
          {name_displayed}
          </p>
          <h3>
          {word ? word : "no user here"}
          </h3>
   
      </div>
    );
  }
}

export default NameComponent;
