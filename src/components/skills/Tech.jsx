import { useEffect, useState } from 'react';
import skillStyle from './skills.module.css';
function Tech({percent,stack,interSect}){
    const [percentage,setPercentage] = useState(0);
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
        <div className={skillStyle.techStacks}>
            <label htmlFor="progress">
                {stack} - <span>({percentage}%)</span>
            </label>
            <progress id='progress' value={percentage} max={100}></progress>
        </div>
    );
}
export default Tech;