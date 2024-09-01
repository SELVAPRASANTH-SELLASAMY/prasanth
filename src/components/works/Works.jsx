import workStyle from './works.module.css'; 
import { RiInformation2Line, RiCodeSSlashLine } from "react-icons/ri";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import Lazyimage from '../lazyimage/Lazyimage';
import {cgs,M_cgs,alcaline,M_alcaline,zuko,M_zuko,portfolio,M_portfolio} from './workresources';
function Works(){
    const {worksRef} = useContext(AppContext);
    const workContent = [
        {
            image:cgs,
            thumb:M_cgs,
            heading:"Core Green Softwares landing page",
            definition:"Landing page with applicant management system",
            stack:"HTML,CSS,javascript,php,mysql,ajax",
            liveUrl:'https://coregreensoftwares.great-site.net/',
            repoUrl:'https://github.com/SELVAPRASANTH-SELLASAMY/Core-Green-Softwares.git'
        },
        {
            image:alcaline,
            thumb:M_alcaline,
            heading:"Alcaline technologies landing page",
            definition:"A responsive landing page",
            stack:"HTML,CSS,javascript",
            liveUrl:'https://selvaprasanth-sellasamy.github.io/Alkaline_technologies/',
            repoUrl:'https://github.com/SELVAPRASANTH-SELLASAMY/Alkaline_technologies.git'
        },
        {
            image:zuko,
            thumb:M_zuko,
            heading:"Zuko coffee",
            definition:"Attractive landing page for coffee shop",
            stack:"ReactJs,CSS,swiperJs",
            liveUrl:'https://selvaprasanth-sellasamy.github.io/zuko_coffee/',
            repoUrl:'https://github.com/SELVAPRASANTH-SELLASAMY/zuko_coffee.git'
        },
        {
            image:portfolio,
            thumb:M_portfolio,
            heading:"Portfolio",
            definition:"A portfolio with visually appealing animations",
            stack:"ReactJs,CSS,swiperJs",
            liveUrl:'https://selvaprasanth-sellasamy.github.io/portfolio/',
            repoUrl:'https://github.com/SELVAPRASANTH-SELLASAMY/portfolio.git'
        }
    ];

    const [filteredContents,setFilteredContents] = useState(workContent);
    const [activeTab,setActiveTab] = useState('All');
    useEffect(() => {
        if(activeTab === "All"){
            return setFilteredContents(workContent);
        }
        const filterOptions = activeTab.split("&").map(option => option.trim().toLowerCase().replaceAll(' ',''));
        setFilteredContents(workContent.filter((content) => {return content.stack.toLowerCase().trim().replaceAll(' ','').includes(filterOptions)}));
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[activeTab]);

    const redirect = (url) => {
        window.open(url,"_blank");
    }
    const goTo = (name) => {
        window.location.href = `/#work?name=${name}`;
    }
    
    return(
        <section name='works' ref={worksRef} className={workStyle.works}>
            <h2>My Works <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <ul>
                {
                    ['All','HTML & CSS','React Js','PHP & MySQL','JavaScript'].map((list,index)=>(
                        <li style={{backgroundColor: activeTab === list ? `var(--green)` : `var(--lightGreen)`,color: activeTab === list ? 'black' : `var(--green)`}} key={index} onClick={()=>setActiveTab(list)}>{list}</li>
                    ))
                }
            </ul>
            <div className={workStyle.workList}>
                {
                    filteredContents.map((content,index)=>(
                        <div key={index} className={workStyle.workDefinition}>
                            <div className={workStyle.figure}>
                                <Lazyimage componentClass={workStyle.img} placeholder={content.thumb} source={content.image}/>
                                <div className={workStyle.hoverContent}>
                                    <RiInformation2Line onClick={()=>goTo(content.heading.toLowerCase())}/>
                                    <HiArrowTopRightOnSquare onClick={() => redirect(content.liveUrl)}/>
                                    <RiCodeSSlashLine onClick={() => redirect(content.repoUrl)}/>
                                </div>
                            </div>
                            <h5>{content.heading}</h5>
                            <p>{content.definition}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
export default Works;