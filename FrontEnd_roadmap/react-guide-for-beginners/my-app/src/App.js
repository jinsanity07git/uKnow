import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NameComponent from './components/NameComponent';
import {Nav,Navbar,NavDropdown,FormControl,Form,Button} from 'react-bootstrap';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class App extends Component{


  constructor(props) {
    super(props);

    this.state = {
      array : ['welcome', 'to', 'my', 'course'],
      user_name : 'jinsanity' ,
      selectedOption: null,
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
      user_name : "jinsanity 07"
    });
}



  handleChange(selectedOption){
    this.setState(
      // { selectedOption}
      { selectedOption : selectedOption ? selectedOption : 'no option' },
      // () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };


 render() {
  var word = "as";
  var style = {fontSize: '40px'};
  const {array} = this.state ;


    return (



      <div>

      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Select
        value={this.state.selectedOption}
        onChange={this.handleChange.bind(this)}
        options={options}
      />



          <p className= "text-large" style={style}>
            Edit and save to reload.
          <h5> {this.state.user_name}</h5> 
          </p>                

          {array.map(word => {
            return (
                <p key={word}>  {word}</p>
              )
          })}

          <button onClick={this.handleClick}> 
            <NameComponent  word = {this.state.user_name} />  
          </button>
          <NameComponent />  
      </div>
    );
  }
}

export default App;
