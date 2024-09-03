import { useEffect, useRef, useState } from 'react';
import skillStyle from './skills.module.css';
function Tech({percent,stack}){
    const [percentage,setPercentage] = useState(0);
    const [interSect,setIntersect] = useState(false);
    const techProgressbar = useRef();
    const handlePercent = () => {
        var temp = 0;
        const increment = () => {
            setPercentage(++temp);
            if(temp === percent){
                clearInterval(incrementInterval);
            }
        }
        const incrementInterval = setInterval(increment,15);
        return () => clearInterval(incrementInterval);
    }

    useEffect(()=>{
        const Observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setIntersect(true);
                    Observer.unobserve(entry.target);
                }
            })
        },{threshold:1});
        techProgressbar.current && Observer.observe(techProgressbar.current);
        return () => Observer.disconnect();
    },[]);
    
    useEffect(()=>{
        if(interSect){
            handlePercent();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[interSect]);
    return(
        <div ref={techProgressbar} className={skillStyle.techStacks}>
            <label htmlFor="progress">
                {stack} - <span>({percentage}%)</span>
            </label>
            <progress id='progress' value={percentage} max={100}></progress>
        </div>
    );
}
export default Tech;