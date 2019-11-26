
import React,{Component} from 'react';
import SingleService from './SingleService';


const services =[

    {title: 'uOS' ,  icon : 'fa-desktop'  ,  description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    link: "http://utb.cloud/uOS/"},
    {title: 'Utopia' ,  icon : 'fa-wrench'  ,  description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    link: "http://utb.cloud/Utopia/"},
    {title: 'uDev' , icon : 'fa-code',  description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' ,
    link: "http://utb.cloud/uDev/"},
    {title: 'uKnow' , icon : 'fa-book' , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' ,
    link: "http://utb.cloud/uKnow/"},
];


class Services extends Component {
    render(){
        return(
            <div>
                
                <section class="page-section" id="services">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">Services</h2>
                        <h3 class="section-subheading text-muted">Four core components enpower your project.</h3>
                        </div>
                    </div>
                    <div class="row text-center">
                        {services.map((service,index) => {
                            return <SingleService
                                    {...service} key = { index}
                            
                                    />
                        })}
                    </div>
                    </div>
                </section>



            </div>



        )



    }
}

export default Services;