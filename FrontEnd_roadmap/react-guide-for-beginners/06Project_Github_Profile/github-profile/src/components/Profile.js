import React, {Component } from 'react';

import {Form, Button } from 'react-bootstrap'
import jsonData from '../data/capline_display.json';
import SearchBox from './SearchBox' ;


// const loadData = () => JSON.parse(JSON.stringify(jsonData));

class Profile extends Component{  

    constructor(props) {
        super(props);
        this.state = {
          userInfo : jsonData.features ,
          Num      : 1,
          SelFeat  : jsonData.features[1]  ,
          SelProp  : jsonData.features[1].properties,
          editing  :false,
          ButtonT   : {'false': "Edit", 'true': "Save"},

        }


        this.ParsingKV= this.ParsingKV.bind(this);
    }

    componentDidMount(){
        console.log(this.state.userInfo)
        console.log(this.state.SelProp.LinkID)
        console.log(this.state.userInfo.length)

        // jsonData.
        // let header = new Headers({"Content-Type": "application/json", "Authorization": "token 7d96a3e665a87fc133e8dee0512b165e368a44a0"  })
        // fetch('../data/data.json')
        // .then(response => response.json())
        // .then(json => {
        //     console.log(json)
        //     this.setState({
        //         userInfo :json
        //     });
        //   })
        //     .catch(error => {
        //         console.log(error)
        //     })

    }

    updateValue(type,event){
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.SelProp))
        userInfoCopy[type] = event.target.value;
        this.setState({SelProp: userInfoCopy});
    }

    ParsingKV(JsonData){
// 提前解析json obj 成为 search box 的{key value}格式的item 
        var RawData = JsonData;
        const items = []
        for (var i = 0; i < RawData.length; i++) {
            // console.log(RawData[i]['properties']['LinkID'])
            items.push({key:i , value : RawData[i]['properties']['LinkID'], });
        }
        return items;
    }

render(){
    return (
        <div >
    <h2>Editor </h2>
    <div className='container'>
        <h3>Link SearchBox</h3>
            <div className='row'>
                <SearchBox
                JsonData = {this.ParsingKV(this.state.userInfo)}
                />
            </div>
    </div>
    
    <hr></hr>
    <div className='container'>
            <Button variant="primary"
            onClick= {() => this.setState({editing: ! this.state.editing})} >
            {this.state.ButtonT[this.state.editing]}
            </Button>
            {/* <hr></hr> */}
        {this.state.editing ?
            // this.setState({ButtonT: "Save"})

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Link Geometry</Form.Label>
                <Form.Control readOnly type="text" placeholder="Enter name" 
                defaultValue={this.state.SelFeat.geometry.coordinates}
                // onChange ={this.updateValue.bind(this, 'login')}
                />
                <Form.Text className="text-muted">
                up node [ latitue, longitute]   +  down node [ latitue, longitute] .
                </Form.Text>
                <hr />
                <h3>Properties</h3>
                <Form.Label>LinkID</Form.Label>
                <Form.Control type="text" placeholder="created_time" 
                value={this.state.SelProp.LinkID}
                onChange ={this.updateValue.bind(this, 'LinkID')}
                />

                <hr />
                <Form.Label>Link Length </Form.Label>
                <Form.Control type="text" placeholder="created_time" 
                value={this.state.SelProp['Link Length']}
                onChange ={this.updateValue.bind(this, 'Link Length')}
                />
            </Form.Group>
        :

        <p>
            Link Geometry :  {this.state.SelFeat.geometry.coordinates} 
            <br></br>
            LinkID: {this.state.SelProp.LinkID}  
            <br></br>
            Link Length: {this.state.SelProp['Link Length'] }  
            <br></br>
            Travel Distance Total: {this.state.SelFeat.properties['Travel Distance Total'] }  
            <br></br>
            Trips: {this.state.SelFeat.properties['Trips'] }  
        </p>



        }

    </div>
        </div>
    );
    }
}
export default Profile;
