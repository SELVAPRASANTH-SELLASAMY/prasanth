import aboutStyle from './about.module.css';
import AboutImage from '../../assets/about-image.webp';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../App';
import { saveAs } from 'file-saver';
import resumeFile from './Resume.Selvaprasanth.pdf';
import { useInView } from 'framer-motion';
function About(){
    const [age,setAge] = useState("");
    const {aboutRef} = useContext(AppContext);
    const isAboutInView = useInView(aboutRef);
    const framerAnimation = {
        transform: isAboutInView ? 'translateY(0)' :'translateY(2.5rem)',
        transition:'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        opacity: isAboutInView ? 1 : 0,
        transitionDelay: 0
    }
    const handleDownload = () => {
        saveAs(resumeFile,'resume.selvaprasanth.pdf');
    }
    useEffect(()=>{
        const date = new Date();
        const year = date.getFullYear() - 2003;
        const month = Math.abs((date.getMonth() + 1) - 7);
        setAge(year+" years "+month+` month${month > 1 ? 's' : ""}`);
    },[]);
    return(
        <section name='about' ref={aboutRef} className={aboutStyle.about}>
            <h2>About Me <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={aboutStyle.info}>
                <div style={framerAnimation} className={aboutStyle.border}>
                    <span className={aboutStyle.bullet}></span>
                    <span className={aboutStyle.bullet}></span>
                    <span className={aboutStyle.bullet}></span>
                    <span className={aboutStyle.bullet}></span>
                    <img src={AboutImage} alt="About" />
                </div>
                <div style={{...framerAnimation,transitionDelay:'650ms'}} className={aboutStyle.details}>
                    <h3>Hi, I am <span>Selvaprasanth</span></h3>
                    <ul>
                        <li><strong>first name</strong><span>Selvaprasanth</span></li>
                        <li><strong>last name</strong><span>Sellasamy</span></li>
                        <li className={aboutStyle.age}><strong>age</strong><span>{age}</span></li>
                        <li><strong>nationality</strong><span>Indian</span></li>
                        <li><strong>languages</strong><span>English & tamil</span></li>
                        <li><strong>address</strong><span>Dindigul, Tamil nadu, India</span></li>
                    </ul>
                    <button onClick={handleDownload}>Download Resume</button>
                </div>
            </div>
        </section>
    );
}
export default About;