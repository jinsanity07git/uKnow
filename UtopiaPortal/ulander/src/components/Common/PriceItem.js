
import React,{Component} from 'react';


class PriceItem extends Component {
    

render(){

    return(

        
        <div className="col-md-6">


            <div class="card" style={{margin:'5px' , width: '30rem' ,textAlign: 'center',backgroundColor:'#a29b7c'}}>
                {/* <img src="..." class="card-img-top" alt="..."/>
             */}
                <div class="card-img-top">
                    <span className="fa-stack fa-4x" style={{alignContent:'center',margin:'5px'}}>
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`}></i>
                    </span>
                </div>
                <br/>
                <div class="card-body" >
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.description}</p>
                    
                    <div class=" mb-3" style={{margin:'auto' , width: '60%' ,textAlign: 'left', backgroundColor:'#a29b7c'}}>
                        <div class="card-text" style={{margin:'auto'}}>
                            {this.props.features.split(',').map((item, key) => {
                            return <li key={key} >{item}<br/></li>
                            })}
                            <br/>
                        </div>
                    </div>


                    <a href="#" class="btn btn-primary">{this.props.button}</a>
                </div>
            </div>


        </div>

    )



}


}


export default PriceItem;