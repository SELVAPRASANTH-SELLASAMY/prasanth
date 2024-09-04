import { useEffect, useRef, useState } from 'react';
import skillStyle from './skills.module.css';
import useObserver from '../cutomhooks/useObserver';
function Tech({percent,stack}){
    const [percentage,setPercentage] = useState(0);
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

    const interSect = useObserver([techProgressbar],{threshold:1});
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