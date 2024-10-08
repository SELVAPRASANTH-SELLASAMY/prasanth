import { useEffect, useRef, useState } from 'react';
import skillStyle from './skills.module.css';
import useObserver from '../cutomhooks/useObserver';
function Skilltile({percent,tech}){
    const [percentage,setPercentage] = useState(0);
    const skillProgressbar = useRef();
    const handlePercent = () => {
        var temp = 0;
        const increment = () => {
            setPercentage(++temp);
            if(temp === percent){
                clearInterval(incrementInterval);
            }
        }
        const incrementInterval = setInterval(increment,15);
        return ()=> clearInterval(incrementInterval);
    }

    const interSect = useObserver([skillProgressbar],{threshold:.5});
    useEffect(()=>{
        if(interSect){
            handlePercent();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[interSect]);

    return(
        <div ref={skillProgressbar} className={skillStyle.skillTile}>
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