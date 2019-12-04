
import React,{Component} from 'react';


class PriceItem extends Component {
    

render(){

    return(

        
        <div className="col-md-6">


            <div class="card" style={{margin:'5px' , width: '30rem' ,textAlign: 'center'}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">开始体验</a>
                </div>
            </div>


        </div>

    )



}


}


export default PriceItem;