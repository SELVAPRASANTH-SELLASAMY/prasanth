import workStyle from './works.module.css';
import sampImage from '../../assets/wp3890158-captain-america-4k-wallpapers.jpg';
import { RiImageLine, RiCodeSSlashLine } from "react-icons/ri";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
function Works(){
    const workContent = [
        {
            image:sampImage,
            heading:"Candle",
            definition:"Creative candle light",
            stack:"HTML & CSS",
            liveUrl:'https://google.com',
            repoLink:'https://github.com'
        }
    ];
    return(
        <section className={workStyle.works}>
            <h2>My Works</h2>
            <ul>
                <li className={workStyle.activeTab}>All</li>
                <li>HTML & CSS</li>
                <li>React Js</li>
                <li>PHP</li>
                <li>Node Js</li>
            </ul>
            <div className={workStyle.workList}>
                {
                    workContent.map((content)=>(
                        <div className={workStyle.workDefinition}>
                            <figure>
                                <img src={content.image} alt={content.heading}/>
                                <div className={workStyle.hoverContent}>
                                    <RiImageLine/>
                                    <HiArrowTopRightOnSquare/>
                                    <RiCodeSSlashLine/>
                                </div>
                            </figure>
                            <h5>{content.heading}</h5>
                            <p>{content.definition}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
export default Works;