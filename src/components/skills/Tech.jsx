import { useEffect, useRef, useState } from 'react';
import skillStyle from './skills.module.css';
import { useInView } from 'framer-motion';
function Tech({percent,stack,interSect,index}){
    const [percentage,setPercentage] = useState(0);
    const techRef = useRef();
    const isTechTileInView = useInView(techRef,{once:false});
    const framerAnimation = {
        transform: isTechTileInView ? 'translateY(0)' :'translateY(2.5rem)',
        transition:'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        opacity: isTechTileInView ? 1 : 0,
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
        <div ref={techRef} style={{...framerAnimation,transitionDelay:`calc(500ms + (250ms * ${index}))`}} className={skillStyle.techStacks}>
            <label htmlFor="progress">
                {stack} - <span>({percentage}%)</span>
            </label>
            <progress id='progress' value={percentage} max={100}></progress>
        </div>
    );
}
export default Tech;