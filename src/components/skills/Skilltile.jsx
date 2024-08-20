import { useEffect, useRef, useState } from 'react';
import skillStyle from './skills.module.css';
import { useInView } from 'framer-motion';
function Skilltile({percent,tech,interSect,index}){
    const [percentage,setPercentage] = useState(0);
    const skillTileRef = useRef();
    const isSkillTileInView = useInView(skillTileRef,{once:false});
    const framerAnimation = {
        transform: isSkillTileInView ? 'translateY(0)' :'translateY(2.5rem)',
        transition:'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        opacity: isSkillTileInView ? 1 : 0,
        transitionDelay: 0
    }
    const handlePercent = () => {
        var temp = 0;
        const increment = () => {
            setPercentage(++temp);
            if(temp === percent){
                clearInterval(incrementInterval);
            }
        }
        const incrementInterval = setInterval(increment,15);
    }
    useEffect(()=>{
        if(interSect){
            handlePercent();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[interSect]);
    return(
        <div ref={skillTileRef} style={{...framerAnimation,transitionDelay:`calc(500ms + (250ms * ${index}))`}} className={skillStyle.skillTile}>
            <svg viewBox='0 0 200 125'>
                <circle className={skillStyle.staticCircle} cx={'50%'} cy={'50%'} r={45}></circle>
                <circle className={skillStyle.progressCircle} strokeDashoffset={2.8274 * (100 - percentage)} cx={'50%'} cy={'50%'} r={45}></circle>
                <text textAnchor='middle' dominantBaseline='middle' x={'50%'} y={'50%'}>{percentage}%</text>
            </svg>
            <p className={skillStyle.skillName}><strong>{tech}</strong></p>
        </div>
    );
}
export default Skilltile;