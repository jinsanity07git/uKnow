
import React,{Component} from 'react';
import TeamMember from './TeamMember';

import img1 from '../assets/img/team/2.jpg';
import img2 from '../assets/img/team/WeijieTan.jpg';
import img3 from '../assets/img/team/XinyuLiu.jpeg';
import img4 from '../assets/img/team/XiangyongLuo.jpg';
import img5 from '../assets/img/team/ZihaoJin.jpg';
import img6 from '../assets/img/team/DahaiHan.jpg';
import {FormattedMessage} from 'react-intl';

const TeamMembers = [

    {name: '刘玥' ,title: '美国威斯康辛大学终身教授',image: img1 
    , description : '研究领域：公交线路优化，交通出行服务，交通数据分析'
    },

    {name: '谭玮杰' ,title: '博士研究生(美国威斯康辛大学)',image: img2 
    , description : '研究领域：，交通诊断，信号配时，交通统计应用'
    },

    {name: '刘心雨' ,title: '博士研究生(同济大学)',image: img3 
    , description : '研究领域：，公交线路优化，交通出行服务，交通数据分析'},

    {name: '韩大海' ,title: '博士研究生(美国威斯康辛大学)',image: img6 
    , description : '研究领域：，公交线网规划，灵活型公交系统设计，城市综合交通走廊规划与设计，交通信号控制与协调优化，交通大数据分析等。'},

    {name: '罗翔勇' ,title: '博士研究生(美国威斯康辛大学)',image: img4 
    , description : '研究领域：，交通诊断，交通数据分析， 数据可视化'},

    {name: '金子豪' ,title: '博士研究生(美国威斯康辛大学)',image: img5 
    , description : '研究领域：，微观交通仿真，交通出行服务，公交线网规划，交通数据分析'},

]



class Team extends Component {
    render(){
        return(
            <div>
                
                    <section className="bg-light page-section" id="team">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase"><FormattedMessage id='Nav.Team'/> </h2>
                            <h3 className="section-subheading text-muted"><FormattedMessage id='Team.subheading'/></h3>
                            </div>
                        </div>
                        <div className="row">
                        {TeamMembers.map((item,index)  => {
                        return  <TeamMember
                                    {...item} key={index}
                                />
                    
                        }
                        )}
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                            </div>
                        </div>
                        </div>
                    </section>                    


            </div>



        )



    }
}

export default Team;