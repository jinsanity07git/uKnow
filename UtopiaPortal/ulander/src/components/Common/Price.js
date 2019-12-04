
import React,{Component} from 'react';
import PriceItem from './PriceItem';
// import SingleService from './SingleService';

import {FormattedMessage} from 'react-intl';

const services =[

    {title: '基础方案' , icon : 'fa-code',  

    description : 
    '一次部署,按需迭代,快速响应,引领未来' },


    {title: '私有云部署' ,  icon : 'fa-wrench'  ,  
    
    description : '量入为出,按需定制,只选对的,不选贵的 '
    },

    {title: '个人会员' ,  icon : 'fa-wrench'  ,  
    
    description : '量入为出,按需定制,只选对的,不选贵的 '
    },

    {title: '企业会员' ,  icon : 'fa-wrench'  ,  
    
    description : '量入为出,按需定制,只选对的,不选贵的 '
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