import React,{Component} from 'react';
import Header from '../Common/Header';
import image from  '../assets/img/Walden_Lake.jpg';
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';

import {FormattedMessage} from 'react-intl';

class Home extends Component {
    render(){
        return(

          <div>

              <Header
              title = {<FormattedMessage id='Home.Title' defaultMessage='UTB'/>}
              subtitle = {<FormattedMessage id='Home.subtitle' />}
              bottonText = {<FormattedMessage id='Home.bottonText' defaultMessage='"Learn more"'/>} 
              showButton ={true}
              link = '/services'
              image = {image}
              />

              <Services/>
              <Portfolio/>
              <Team/>




           </div>
        )

    }
}

export default Home ;
 