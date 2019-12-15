import React,{Component} from 'react';
import Header from '../Common/Header';
import image from  '../assets/img/about.jpg';
import {FormattedMessage} from 'react-intl';

class About extends Component {
    render(){
        const text = {
            color:'#FFFFFF',
        }
        return(
            <div>

                <Header
                        // title = "Welcome to Utopia"
                        // subtitle = "Nice to meet you!"
                        // bottonText = "Learn more"
                        // showButton ={true}
                        link = '/about'
                        image = {image}
                        />



                <section className="page-section" id="about">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase" style={text}><FormattedMessage id='Nav.About' /></h2>
                            <h3 className="section-subheading " style={text}> <FormattedMessage id='About.subheading' /></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                    <h4>2016-2017</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                    </div>
                                    <div className="timeline-body">
                                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p> */}
                                    </div>
                                </div>
                                </li>
                                <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                    <h4>March 2018</h4>
                                    <h4 className="subheading">An Agency is Born</h4>
                                    </div>
                                    <div className="timeline-body">
                                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p> */}
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                    <h4>December 2019</h4>
                                    <h4 className="subheading">Transition to Full Service</h4>
                                    </div>
                                    <div className="timeline-body">
                                    {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p> */}
                                    </div>
                                </div>
                                </li>
                                {/* <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                    <h4>July 2014</h4>
                                    <h4 className="subheading">Phase Two Expansion</h4>
                                    </div>
                                    <div className="timeline-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                    </div>
                                </div>
                                </li> */}
                                <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>Be Part
                                    <br />Of Our
                                    <br/>Story!</h4>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </section>

            </div>
        

        )



    }
}

export default About;