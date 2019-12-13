
import React,{Component} from 'react';
import {FormattedMessage} from 'react-intl';




class TeamMember extends Component {

render(){

    return(
        <div className="col-sm-4">
        <div className="team-member">
            <img className="mx-auto rounded-circle" src={this.props.image} alt="" />
            {/* <h4>{this.props.name}</h4> */}
            <h4>
                <a class="btn btn-secondary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                    style={{fontSize : 18, fontStyle: 'italic' ,backgroundColor:"#549688"}}>
                        {this.props.name}
                        {/* <FormattedMessage id='Team.button'/> */}
                </a>

                
            </h4>
            <p className="text-white">
                {this.props.title} 
                <span> </span>
                <li className="list-inline-item">
                        <a href={this.props.uCircle} target="_blank">
                            <i class="fa fa-address-book" aria-hidden="true"></i>
                        </a>
                </li>
            </p>




            <div class="collapse" id="collapseExample">
                <div class="card card-body" style={{backgroundColor:"#065279", color : '#bacac6'}}>

                    {this.props.description.split('，').map((item, key) => {
                        return <span key={key} >{item}<br/></span>
                        })}

                </div>
            </div>

        </div>
        </div>
    )



}


}


export default TeamMember;