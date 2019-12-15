import React,{Component} from 'react';
import {Link } from 'react-router-dom'; 
import {FormattedMessage} from 'react-intl';
import img1 from './assets/img/utbLogo70.png';

class PageWrapper extends Component {



    render() {
        var divStyle = {
            backgroundColor :'#343a409e'
          };

        return (       
        <div>
            {/* <!-- Navigation --> */}
            
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={ divStyle}>
                  <div className="container">
                      
                  <Link className="navbar-brand js-scroll-trigger" to="/">
                  {/* <i class="fa fa-home" aria-hidden="true" style={{marginTop:10}}></i>  */}
                  <img src={img1} alt="" />
                  </Link>
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      Menu
                      <i className="fas fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav text-uppercase ml-auto">
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/services">
                                <FormattedMessage
                                id='Nav.Services'
                                defaultMessage='服务'
                                />
                            </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/portfolio">
                                <FormattedMessage
                                id='Nav.Portfolio'
                                defaultMessage='案例'
                                />
                              </Link>
                      </li>

                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/about">
                                <FormattedMessage
                                        id='Nav.About'
                                        defaultMessage='关于'
                                        />
                            </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/pricing">
                                <FormattedMessage
                                        id='Nav.Priciing'
                                        defaultMessage='价格'
                                        />
                            </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/team">
                                <FormattedMessage
                                id='Nav.Team'
                                defaultMessage='团队'
                                />
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/contact">
                              
                          <FormattedMessage
                                id='Nav.Contact'
                                defaultMessage='联系我们'
                                />
                          </Link>
                      </li>
                      </ul>
                  </div>
                  </div>
              </nav>


            {this.props.children}
      </div>
      )
 
    }
}

export default PageWrapper;
