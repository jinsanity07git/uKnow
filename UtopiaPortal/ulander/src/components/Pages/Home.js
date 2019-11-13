import React,{Component} from 'react';
import Header from '../Common/Header';
import image from  '../assets/img/header-bg.jpg';
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';

class Home extends Component {
    render(){
        return(

          <div>
              <Header
              title = "Welcome to Utopia"
              subtitle = "Nice to meet you!"
              bottonText = "Learn more"
              showButton ={true}
              link = '/services'
              image = {image}
              />

              <Services/>
              <Portfolio/>

           </div>
        )

    }
}

export default Home ;
 