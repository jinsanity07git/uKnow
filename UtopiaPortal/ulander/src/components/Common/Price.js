
import React,{Component} from 'react';
import PriceItem from './PriceItem';
// import SingleService from './SingleService';

import {FormattedMessage} from 'react-intl';

const services =[

    {title: '基础方案' , icon : 'fa-cogs',  button: '开始体验',

    description : 
    '一次部署,按需迭代,快速响应,引领未来' ,

    features : '500MB disk storage ,Up to 10 private maps, Up to 3 public maps,Up to 10 datasets, Basic support'
    },


    {title: '私有云部署' ,  icon : 'fa-cloud' ,button: '联系我们', 
    
    description : '量入为出,按需定制,只选对的,不选贵的 ',

    features : 'Custom disk storage ,Unlimited private maps,Unlimited public maps,Unlimited datasets, Enterprise support packages'
    
    },

    {title: '个人会员' ,  icon : 'fa-user'   ,button: '15元/月', 
    
    description : '量入为出,按需定制,只选对的,不选贵的 ',

    features : '5GB disk storage ,Up to 50 private maps, Up to 10 public maps,Up to 50 datasets, Membership support'
    },

    {title: '企业会员' ,  icon : 'fa-building'  ,button: '150元/月', 
    
    description : '量入为出,按需定制,只选对的,不选贵的 ',

    features : '50GB disk storage ,Up to 100 private maps, Up to 50 public maps,Up to 100 datasets, Membership support'
    },


];


class Price extends Component {
    render(){
        return(
            <div>

                <section class="page-section" id="services">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">   <FormattedMessage id='Nav.Priciing'/> </h2>
                        <h3 class="section-subheading text-muted">    <FormattedMessage id='Priciing.subheading'/>  </h3>
                        </div>
                    </div>
                    <div class="row text-center">
                        {services.map((service,index) => {
                            return <PriceItem
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

export default Price;