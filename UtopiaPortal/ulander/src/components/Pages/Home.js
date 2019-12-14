import React,{Component} from 'react';
import Header from '../Common/Header';
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';

import image1 from  '../assets/img/intersection.jpeg';
import image2 from  '../assets/img/services.jpg';
import image3 from  '../assets/img/utb_header.png';
import image4 from  '../assets/img/utb_headerNoBg.png';


import {FormattedMessage} from 'react-intl';

class Home extends Component {
    render(){
        return(

          <div>
              <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={image1} class="d-block w-100 h-40"  alt="..." style={{height:'650px'}}/>
                      <div class="carousel-caption d-none d-md-block" style={{color:"#f2fdff"}}>
                        <h1>{<FormattedMessage id='Home.Title1' />}</h1>
                        <h4>{<FormattedMessage id='Home.subtitle1' />}</h4>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={image2} class="d-block w-100" alt="..." style={{height:'650px'}}/>
                      <div class="carousel-caption d-none d-md-block">
                        <h1>{<FormattedMessage id='Home.Title2' />}</h1>
                          <h4>{<FormattedMessage id='Home.subtitle2' />}</h4>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={image4} class="d-block w-100" alt="..." style={{height:'650px'}}/>
                      <div class="carousel-caption d-none d-md-block">
                          <h1>{<FormattedMessage id='Home.Title3' />}</h1>
                          <h4>{<FormattedMessage id='Home.subtitle3' />}</h4>
                      </div>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>    
            </div>    
              {/* <Header
              title = {<FormattedMessage id='Home.Title' defaultMessage='UTB'/>}
              subtitle = {<FormattedMessage id='Home.subtitle' />}
              bottonText = {<FormattedMessage id='Home.bottonText' defaultMessage='"Learn more"'/>} 
            //   showButton ={true}
              link = '/services'
              image = {image}
              /> */}

              <Services/>
              <Portfolio/>
              <Team/>




           </div>
        )

    }
}

export default Home ;
 