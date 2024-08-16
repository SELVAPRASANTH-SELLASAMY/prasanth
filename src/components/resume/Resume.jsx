import resumeStyle from './resume.module.css';
import { RiBook2Line, RiShoppingBagLine } from "react-icons/ri";
function Resume(){
    const educationContent = [
        {
            year:"2020 - 2024",
            field:"Bachelor of Engineering",
            org:"Kongu Engineering College, Erode.",
            info:`Started my Engineering journey in "Mechanical Engineering" stream. Equiped leadership ability, problem solving ability & fluent communication skill through participation in coding contests, paper presentation & Other club activities such as NSS. I've completed the degree with the CGPA of 7.96.`
        },
        {
            year:"2018 - 2020",
            field:"HSC",
            org:"Sri Renugadevi hr.sec.school, Dindigul.",
            info:`Pursued higher education in "Computer Science" department. My first knowledge about computers starts here. I've completed it with the percentage of 74.17%`
        },
        {
            year:"2017 - 2018",
            field:"SSLC",
            org:"Sri Renugadevi hr.sec.school, Dindigul.",
            info:`Obtained logical thinking & mathematical knowledge. I've completed it with the percentage of 82.4%`
        }
    ];
    const experienceContent = [
        {
            year:"2024",
            field:"Software Engineer Intern",
            org:"Applied Materials India Pvt Ltd.",
            info:"Got this Intern cum Fulltime opportunity via college placement. During this period (Mar 2024 - May 2024) I've worked as a part of QA department in which I've explored various manual testing tools used by AMAT. I've also involved in few Java automation tasks."
        }
    ]
    return(
        <section className={resumeStyle.resume}>
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