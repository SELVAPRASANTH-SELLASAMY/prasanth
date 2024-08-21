import { useEffect, useState } from 'react';
import skillStyle from './skills.module.css';
function Skilltile({percent,tech,interSect}){
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
        return ()=> clearInterval(incrementInterval);
    }
    useEffect(()=>{
        if(interSect){
            handlePercent();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[interSect]);
    return(
        <div className={skillStyle.skillTile}>
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