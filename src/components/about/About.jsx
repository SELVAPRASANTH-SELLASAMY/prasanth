import aboutStyle from './about.module.css';
import AboutImage from '../../assets/about-image.webp';
import { useEffect, useState } from 'react';
function About(){
    const [age,setAge] = useState("");
    useEffect(()=>{
        const date = new Date();
        const year = date.getFullYear() - 2003;
        const month = Math.abs((date.getMonth() + 1) - 7);
        setAge(year+" years "+month+` month${month > 1 ? 's' : ""}`);
    },[]);
    return(
        <section className={aboutStyle.about}>
            <h2>About Me <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={aboutStyle.info}>
                <div className={aboutStyle.border}>
                    <span className={aboutStyle.bullet}></span>
                    <span className={aboutStyle.bullet}></span>
                    <span className={aboutStyle.bullet}></span>
                    <span className={aboutStyle.bullet}></span>
                    <img src={AboutImage} alt="About" />
                </div>
                <div className={aboutStyle.details}>
                    <h3>Hi, I am <span>Selvaprasanth</span></h3>
                    <ul>
                        <li><strong>first name</strong><span>Selvaprasanth</span></li>
                        <li><strong>last name</strong><span>Sellasamy</span></li>
                        <li className={aboutStyle.age}><strong>age</strong><span>{age}</span></li>
                        <li><strong>nationality</strong><span>Indian</span></li>
                        <li><strong>languages</strong><span>English & tamil</span></li>
                        <li><strong>address</strong><span>Dindigul, Tamil nadu, India</span></li>
                    </ul>
                    <button>Download Resume</button>
                </div>
            </div>
        </section>
    );
}
export default About;