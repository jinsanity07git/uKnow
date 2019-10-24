import React, {Component } from 'react';

// import {Form, Button } from 'react-bootstrap'

import ReactSearchBox from 'react-search-box'
// import jsonData from '../data/capline_display.json';



// used in Profile.js

class SearchBox extends Component{  

    constructor(props) {
        super(props);

        this.state = {
            data : this.props.JsonData,
            Data : 2
        }

    this.updateValue = this.updateValue.bind(this)
    }


    updateValue(JsonData){

        const RawData = JsonData;
        const items = []
        for (var i = 0; i < RawData.length; i++) {
            // console.log(RawData[i]['properties']['LinkID'])
            items.push({key:i , value : RawData[i]['properties']['LinkID'], });
        }
        this.setState({Data: 5});
        console.log(typeof(this.state.data))
        console.log(typeof(items))
        console.log(this.state.Data)

    }   

    componentDidMount(){
        console.log('origin data')
        console.log(this.props.JsonData)
        // this.updateValue(this.props.JsonData)
        // console.log(this.state.data)

        // const RawData = this.props.JsonData;
        // // const Feature = RawData[0]
        // console.log(RawData.length + ' length')
        // // console.log(this.state.data)
        // console.log(RawData)
        // const items = []
        
        // for (var i = 0; i < RawData.length; i++) {
        //     console.log(RawData[i]['properties']['LinkID'])
        //     items.push({key:i , value : RawData[i]['properties']['LinkID'], });
        // }
        // console.log(items)
        // console.log('items')

        // this.setState({data: items},  () => {console.log(this.state.data)});
        // console.log('end')
        // this.updateValue(this.props.JsonData);
    }




render(){


    return (
        
        <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        data={this.state.data}
        callback={record => console.log(record)}
        // onSelect = {this.updateValue(this.props.JsonData)}
      />
    );
    }
}
export default SearchBox;
