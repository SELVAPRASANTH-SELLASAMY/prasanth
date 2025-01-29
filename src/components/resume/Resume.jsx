import resumeStyle from './resume.module.css';
import { RiBook2Line, RiShoppingBagLine } from "react-icons/ri";
import { AppContext } from '../../App';
import { useContext } from 'react';
function Resume(){
    const {resumeRef} = useContext(AppContext);
    const educationContent = [
        {
            year:"2020 - 2024",
            field:"Bachelor of Engineering",
            org:"Kongu Engineering College",
            info:"Erode, Tamil Nadu, India."
        },
        {
            year:"2018 - 2020",
            field:"HSC (+2)",
            org:"Sri Renugadevi higher secondary school",
            info:"Dindigul, Tamil Nadu, India."
        },
        {
            year:"2017 - 2018",
            field:"SSLC",
            org:"Sri Renugadevi higher secondary school",
            info:"Dindigul, Tamil Nadu, India."
        }
    ];
    const experienceContent = [
        {
            year:"2024",
            field:"Software Engineer Intern",
            org:"Applied Materials India Pvt Ltd.",
            info:"Chennai, Tamil Nadu, India."
        }
    ];
    return(
        <section name='resume' ref={resumeRef} className={resumeStyle.resume}>
            <h2>My Resume <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={resumeStyle.resumeWrapper}>
                <div className={resumeStyle.education}>
                    <h4><span>{<RiBook2Line/>}</span>Edcational Qualification</h4>
                    {
                        educationContent.map((education,index)=>(
                            <div key={index} className={resumeStyle.timeline}>
                                <span className={resumeStyle.year}>{education.year}</span>
                                <span className={resumeStyle.activity}>
                                    <h5 className={resumeStyle.field}>{education.field}</h5>
                                    <p className={resumeStyle.orgName}>{education.org}</p>
                                    <p className={resumeStyle.activityInfo}>{education.info}</p>
                                </span>
                            </div>
                        ))
                    }
                </div>
                <div className={resumeStyle.experience}>
                    <h4><span>{<RiShoppingBagLine/>}</span>Working Experience</h4>
                    {
                        experienceContent.map((education,index)=>(
                            <div key={index} className={resumeStyle.timeline}>
                                <span className={resumeStyle.year}>{education.year}</span>
                                <span className={resumeStyle.activity}>
                                    <h5 className={resumeStyle.field}>{education.field}</h5>
                                    <p className={resumeStyle.orgName}>{education.org}</p>
                                    <p className={resumeStyle.activityInfo}>{education.info}</p>
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
export default Resume;