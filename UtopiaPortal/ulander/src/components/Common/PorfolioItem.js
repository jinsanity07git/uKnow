import React,{Component} from 'react';




class PortfolioItem extends Component {
    render(){
      const PorfolioHover = {
        background:'44CEF6',
        width: '100%' ,
        height: '100%',

        "&:hover": {
          // color: "#efefef",
          // WebkitTransform: "scale(1.3)",
          // transform: "scale(1.3)",
          opacity: 0.6
        },

      }

      const text = {
        // 
            color:'#FFFFFF',
        }
          return(

                  <div className="col-md-4 col-sm-6 portfolio-item"  >
                    <a className="portfolio-link"  href= {this.props.link} target="_blank" >
                      <div className="portfolio-hover" style={PorfolioHover}>
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x" style={{color:'#efefef'}}></i>
                        </div>
                      </div>
                      <img className="img-thumbnail "   src={this.props.image} style={{width: 400, height: 200 }}/>
                    </a>
                    <div className="portfolio-caption" style={{backgroundColor:"#27272780", color : '#FFFFFF'}}>
                      <h4  >{this.props.title}</h4>
                      <p className="text" style={{ color : '#14ffec'}} >{this.props.subtitle}</p>
                    </div>
                  </div>
                )

    }
}

export default PortfolioItem;