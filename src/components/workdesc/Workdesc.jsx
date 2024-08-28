import workdescStyle from './workdesc.module.css';
import contents from './workdescriptions.json';
import {useSearchParams} from 'react-router-dom';
function Workdesc(){
    const [urlParams] = useSearchParams();
    const workName = urlParams.get('name');
    const referenceImage = urlParams.get('image');
    const splitContent = (workContent,splitter) => {
        return workContent.split(splitter);
    }
    return(
        <section className={workdescStyle.workdesc}>
            <h2>{workName} <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <img src={referenceImage} alt="reference-image" />
            <h5>Tech Stacks used:</h5>
            <ul className={workdescStyle.techstacks}>
                {
                    splitContent(contents[workName].stacks,",").map((stack,index)=>(
                        <li key={index}><p>{stack}</p></li>
                    ))
                }
            </ul>
            <h5>Description</h5>
            <ul>
                {
                    splitContent(contents[workName].content,">").map((content,index)=>(
                        <li key={index}><p>{content}</p></li>
                    ))
                }
            </ul>
        </section>
    );
}
export default Workdesc;