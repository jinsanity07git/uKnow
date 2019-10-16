import React, { Component } from 'react';
import { Button, Navbar, Nav, Form,FormControl }  from 'react-bootstrap';
import Slider from './Slider';
import Profile from './Profile' ;


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      currentTab : 'profile'
    }
  }
  render() {
  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Usim</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Viewer</Nav.Link>
          <Nav.Link href="#features" onClick={() => this.setState({currentTab:'slider'})}>Editor</Nav.Link>
          <Nav.Link href="#pricing"  onClick={() => this.setState({currentTab:'profile'})}>Scenarios </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <div>
      {this.state.currentTab === 'slider' ? <Slider/> : false} 
      {this.state.currentTab === 'profile' ? <Profile/> : false} 

    </div>
    </div>


    );
  }
}

export default App;
