import skillStyle from './skills.module.css';
import Skilltile from './Skilltile';
import Tech from './Tech';
function Skills(){
    const techArray = [
        {
            stack:"C",
            percent:75
        },
        {
            stack:"C++",
            percent:75
        },
        {
            stack:"Java",
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
            percent:60
        },
        {
            stack:"PHP",
            percent:50
        },
        {
            stack:"MySQL",
            percent:50
        },
        {
            stack:"MongoDB",
            percent:50
        }
    ];
    const skillArray = [
        {
            tech:"Front-end Development",
            percent:80
        },
        {
            tech:"Back-end Development",
            percent:65
        },
        {
            tech:"Database",
            percent:50
        }
    ]
    return(
        <section className={skillStyle.skill}>
            <h2>My Skills</h2>
            <div className={skillStyle.techContainer}>
                {
                    skillArray.map((tech,index)=>(
                        <Skilltile key={index} percent={tech.percent} tech={tech.tech}/>
                    ))
                }
            </div>
            <div className={skillStyle.progressBarContainer}>
                {
                    techArray.map((skill,index)=>(
                        <Tech key={index} percent={skill.percent} stack={skill.stack}/>
                    ))
                }
            </div>
        </section>
    );
}
export default Skills;