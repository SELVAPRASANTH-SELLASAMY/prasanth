import skillStyle from './skills.module.css';
import Skilltile from './Skilltile';
import Tech from './Tech';
function Skills(){
    const techArray = [
        {
            stack:"Java",
            percent:75
        },
        {
            stack:"C++",
            percent:65
        },
        {
            stack:"React Js",
            percent:70
        },
        {
            stack:"Node Js",
            percent:50
        },
        {
            stack:"HTML & CSS",
            percent:85
        },
        {
            stack:"JavaScript",
            percent:65
        },
        {
            stack:"MySQL",
            percent:45
        },
        {
            stack:"MongoDB",
            percent:75
        }
    ];
    const skillArray = [
        {
            tech:"Front-end Development",
            percent:80
        },
        {
            tech:"Back-end Development",
            percent:70
        },
        {
            tech:"Database",
            percent:65
        }
    ]
    return(
        <section className={skillStyle.skill}>
            <h2>My Skills <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={skillStyle.progressBarContainer}>
                {
                    skillArray.map((skill,index)=>(
                        <Skilltile key={index} percent={skill.percent} tech={skill.tech}/>
                    ))
                }
            </div>
            <div className={skillStyle.techContainer}>
                {
                    techArray.map((tech,index)=>(
                        <Tech key={index} percent={tech.percent} stack={tech.stack}/>
                    ))
                }
            </div>
        </section>
    );
}
export default Skills;