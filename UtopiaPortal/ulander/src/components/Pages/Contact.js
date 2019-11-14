import React,{Component} from 'react';
import Field from "../Common/Filed";
import {withFormik} from 'formik';
import * as Yup from 'yup';



const fileds ={
    sections:[
       [   
            {name:'name', elementName:'input' ,type:'text', placeholder: 'Your Name '},
            {name:'email', elementName:'input' ,type:'email', placeholder: 'Your email'},
            {name:'phone', elementName:'input' ,type:'text', placeholder: 'Your phone number'},

        ],
        [
            {name:'message', elementName:'textarea' ,type:'text', placeholder: 'Your message'},
        ]
    ]


}


class Contact extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         name: ''    ,
    //         email: ''   ,
    //         phone: ''   ,
    //         message: '' ,
    //     }
    // }
     

    // submitForm = (e) => {
    //     alert ("Form submitted. Thank you!");
    // }

    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Contact Us</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
                    <div className="row">
                            {fileds.sections.map((section,sectionIndex)  => {

                                console.log("Rendering section", sectionIndex, "with", section);
                                return (

                                    <div className="col-md-6"  key = {sectionIndex}> 
                                        {section.map((filed,i) => {
                                            return <Field {...filed} 
                                                            key={i} 
                                                            value = {this.props.values[filed.name]}
                                                            name={filed.name}
                                                            onChange ={this.props.handleChange}
                                                            onBlur = {this.props.handleBlur}
                                                            touched = {(this.props.touched[filed.name])}
                                                            errors= {this.props.errors[filed.name]}
                                                            />

                                        })}
                                    </div>
                                )
                            })}

                      <div className="clearfix"></div>
                      <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button 
                        id="sendMessageButton" 
                        className="btn btn-primary btn-xl text-uppercase" 
                        type="submit"
                        // onClick = { e => this.submitForm(e) }
                        >Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        

        )

    }


}


export default withFormik({
    mapPropsToValues: () => ({
        name: ''  ,
        email:  ''  ,
        phone:  ''  ,
        message: ''  ,


    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3,'Come on bro, your name is longer than that').required('You must give us your name.'),
        email: Yup.string().email('You need to give us a valid email').required('We need you email'),

}),
    handleSubmit: (values,{setSubmitting}) => {
        alert ('submitted',JSON.stringify(values));
    }
})(Contact);