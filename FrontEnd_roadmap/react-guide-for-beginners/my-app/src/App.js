import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NameComponent from './components/NameComponent';
import {Nav,Navbar,NavDropdown,FormControl,Form,Button,Table} from 'react-bootstrap';
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
      selectedOption: { value: '', label: '' },
      jsonList : [],
    }


    this.handleClick = this.handleClick.bind(this)
  }  

componentDidMount(){
  console.log('fetch')

  fetch('http://www.json-generator.com/api/json/get/bVDxTQSDQO?indent=2', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      // console.log(json)
      this.setState(
        {jsonList: json}
        )
    })
    .catch(error => console.log(error));
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
  const {jsonList} = this.state ;

  const selectList  = this.state.jsonList.map(item => {
      return {value : item.name, label: item.name}
  });

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
      <div className="Container">
        <div className="Row">
          <div className = "col-sm-4">
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChange.bind(this)}
              options={selectList}
            />
          </div>
         </div>

          <div className="Row">
          <div className = "col-sm-9">
                <hr/>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Company</th>
                  </tr>
                </thead>
                <tbody>
                      {this.state.jsonList.map(item => {
                        console.log(this.state.selectedOption.value )
                        if(this.state.selectedOption.value ==="" ||item.name === this.state.selectedOption.value){
                          return (
                              <tr>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.age}</td>
                                <td>@{item.company}</td>
                              </tr>
                        )
                        }

                      })}
                    </tbody>
      </Table>
      </div>
      </div>

      </div>






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
