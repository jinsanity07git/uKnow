
import React,{Component} from 'react';
import SingleService from './SingleService';


import {FormattedMessage} from 'react-intl';

const services =[

    {title: 'uDev' , icon : 'fa-code',  
    intro : '在云开发中部署你的装备',
    feature: '可编程',
    link: "http://utb.cloud/uDev/",
    description : 
    '一次部署,按需迭代,快速响应,引领未来' },

    {title: 'Utopia' ,  icon : 'fa-wrench'  ,  description : '量入为出,按需定制,只选对的,不选贵的 ',
    intro : '在云商城中购买你的装备',
    feature: '能拼接',
    link: "http://utb.cloud/Utopia/"},


    {title: 'uOS' ,  icon : 'fa-desktop'  ,  description : ' 项目数据用装备生成,所有结论用数据说话,数据装备在地图连通,一切细节则尽收眼底',
    intro : '在云桌面中管理你的项目',
    feature: '善组织',
    link: "http://utb.cloud/uOS/"},


    {title: 'uCircle' , icon : 'fa-book' , description : '装备要迭代,项目会过去,唯从业人员之经验,乃平台的进步源泉' ,
    intro : '在云智库中分享你的经验',
    feature: '易分享',
    link: "http://utb.cloud/uKnow/"},
];


class Services extends Component {
    render(){

        const page = {
            // 苍白
            backgroundColor:'#d1d9e0',
          }
        return(
            <div>

                <section class="page-section" id="services" style= {page}>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">   <FormattedMessage id='Nav.Services'/> </h2>
                        <h3 class="section-subheading text-muted">    <FormattedMessage id='Services.subheading'/>  </h3>
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