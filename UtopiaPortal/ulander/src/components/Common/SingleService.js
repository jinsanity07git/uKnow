
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
        <p className="text-muted">{this.props.intro}</p>

        <p>

        <a class="btn btn-secondary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
        style={{fontSize : 18, fontStyle: 'italic' }}>
            {this.props.feature}
        </a>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body" style={{color : 'gray'}}>


                {this.props.description.split(',').map((item, key) => {
                    return <span key={key} >{item}<br/></span>
                    })}



            </div>
        </div>


        </div>

    )



}


}


export default SingleService;