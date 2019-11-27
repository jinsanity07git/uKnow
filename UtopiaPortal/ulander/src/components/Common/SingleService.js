
import React,{Component} from 'react';


class SingleService extends Component {

render(){

    return(
        <div className="col-md-3">
        <a href= {this.props.link} target="_blank">
            <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`}></i>
            </span>
        </a>
        <h4 className="service-heading">{this.props.title}</h4>
        <p className="text-muted">{this.props.description}</p>
        </div>

    )



}


}


export default SingleService;