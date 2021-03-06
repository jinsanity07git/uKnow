
import React,{Component} from 'react';
import SingleService from './SingleService';


import {FormattedMessage} from 'react-intl';

const services =[

    {title: 'uDev' , icon : 'fa-code',  
    intro : '把你的知识和数据插上工具的翅膀 ',
    feature: '可编程',
    link: "http://utb.cloud/uDev/",
    description : 
    '一次部署,按需迭代,快速响应,引领未来' },

    {title: 'Utopia' ,  icon : 'fa-wrench'  ,  description : '量入为出,按需定制,只选对的,不选贵的 ',
    intro : '让App Free 装备为你服务',
    feature: '能拼接',
    link: "http://utb.cloud/Utopia/"},


    {title: 'uOS' ,  icon : 'fa-desktop'  ,  description : ' 项目数据用装备生成,所有结论用数据说话,数据装备在地图连通,一切细节则尽收眼底',
    intro : '可拼接、可编程、社交化、图形化的操作系统',
    feature: '善组织',
    link: "http://utb.cloud/uOS/"},


    {title: 'uCircle' , icon : 'fa-book' , description : '装备要迭代,项目会过去,唯从业人员之经验,乃平台的进步源泉' ,
    intro : '融合知识管理与专业社交',
    feature: '易分享',
    link: "http://utb.cloud/uKnow/"},
];


class Services extends Component {
    render(){

        const page = {
            // 墨色
            backgroundColor:'#121212',
          }
        const text = {
        // 
            color:'#FFFFFF',
        }
        return(
            <div>

                <section class="page-section" id="services" style= {page}>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase" style= {text}>   <FormattedMessage id='Nav.Services'/> </h2>
                        <h3 class="section-subheading " style= {text}>    <FormattedMessage id='Services.subheading'/>  </h3>
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