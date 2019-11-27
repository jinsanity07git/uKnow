import React,{Component} from 'react';
import {Link } from 'react-router-dom'; 
// import {IntlProvider, FormattedMessage} from 'react-intl';
// import zh_CN from './locale/zh_CN';
// import en_US from './locale/en_US';
// import intl from 'intl';
// // addLocaleDate([...en,...zh]);

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
                  <Link className="navbar-brand js-scroll-trigger" to="/">Utopia</Link>
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      Menu
                      <i className="fas fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav text-uppercase ml-auto">
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/services">Services</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/team">Team</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
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
