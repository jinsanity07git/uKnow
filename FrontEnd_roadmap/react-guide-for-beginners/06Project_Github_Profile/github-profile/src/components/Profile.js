import React, {Component } from 'react';

import {Form, Button } from 'react-bootstrap'

class Profile extends Component{  

    constructor(props) {
        super(props);
        this.state = {
          userInfo : {} ,
          editing  :false 
        }
    }

    componentDidMount(){
        let header = new Headers({"Content-Type": "application/json", "Authorization": "token 7d96a3e665a87fc133e8dee0512b165e368a44a0"  })
        fetch('https://api.github.com/users/jinsanity07git',{
            method: 'GET',
            headers: header
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                userInfo :json
            });
          })
            .catch(error => {
                console.log(error)
            })

    }

    updateValue(type,event){
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo))
        userInfoCopy[type] = event.target.value;
        this.setState({userInfo: userInfoCopy});
    }
render(){
    return (
        <div >
    <p>Profile </p>

    <div className='container'>
            <Button variant="primary"
            onClick= {() => this.setState({editing: ! this.state.editing})} >
            Edit
            </Button>
            <hr></hr>
        {this.state.editing ?
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" 
                value={this.state.userInfo.login}
                onChange ={this.updateValue.bind(this, 'login')}
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                <hr />
                <Form.Label>Creation Date</Form.Label>
                <Form.Control type="text" placeholder="created_time" 
                value={this.state.userInfo.created_at}
                onChange ={this.updateValue.bind(this, 'created_at')}
                />

                <hr />
                <Form.Label>Followers </Form.Label>
                <Form.Control type="text" placeholder="created_time" 
                value={this.state.userInfo.followers}
                onChange ={this.updateValue.bind(this, 'followers')}
                />
            </Form.Group>
        :

        <p>
            Profile : {this.state.userInfo.login} 
        <hr />
            Creation Date: {this.state.userInfo.created_at}  

        <hr />
            Followers: {this.state.userInfo.followers}  
        </p>

        }

    </div>
        </div>
    );
    }
}
export default Profile;
