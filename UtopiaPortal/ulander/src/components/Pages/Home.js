import React,{Component} from 'react';
import Header from '../Common/Header';
import image from  '../assets/img/header-bg.jpg';

class Home extends Component {
    render(){
        return(
          <Header
           title = "Welcome to Utopia"
           subtitle = "Nice to meet you!"
           bottonText = "Learn more"
           showButton ={true}
           link = '/services'
           image = {image}
           />
        )

    }
}

export default Home ;
 