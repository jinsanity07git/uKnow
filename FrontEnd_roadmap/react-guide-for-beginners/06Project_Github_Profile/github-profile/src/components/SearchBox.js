import React, {Component } from 'react';

import {Form, Button } from 'react-bootstrap'

import ReactSearchBox from 'react-search-box'
import { constants } from 'fs';
// import jsonData from '../data/capline_display.json';



// used in Profile.js

class SearchBox extends Component{  

    constructor(props) {
        super(props);

        this.state = {
            data : this.props.JsonData,
            value :'(1,5)',
            key: 0,
        }

    this.updateValue = this.updateValue.bind(this)
    }


    updateValue(event){
        // var userInfoCopy = JSON.parse(JSON.stringify(this.state.SelProp))
        console.log(event)
        // var Boxvalue = event.target.value;
        this.setState({value: event});

        const feature = this.state.data;
        const len = feature.length;
        var keyNum = 0;
        for (var i = 0; i < len; i++) { 
            if (feature[i].value === event ){
                keyNum = i
            } 

        }
        this.setState({key: keyNum});

        console.log('keyNum: ' + keyNum)

    }
    // getKeyfrom

    componentDidMount(){
        // console.log('origin data')
        // console.log(this.props.JsonData)
        // console.log('value')
        // console.log(this.state.value)
    }

    componentDidUpdate(){   
        console.log('updtated value')
        console.log(this.state.value)
        console.log('updtated key')
        console.log(this.state.key)
    }


render(){


    return (
        <div className='container'>
            <div className='row'>
            <ReactSearchBox
        placeholder="Input Link ID eg.(1,5)"
        value="Doe"
        data={this.state.data}
        callback={record => console.log(record)}
        // onSelect = {this.updateValue(this.props.JsonData)}
        onChange ={this.updateValue.bind(this)}
      />
      </div>
      <div className='row'>
        <Button variant="outline-success"
        onClick = {() => this.props.sendData(this.state.key)}
        >
            Select
        </Button>
      </div>
            

      </div>
    );
    }
}
export default SearchBox;
