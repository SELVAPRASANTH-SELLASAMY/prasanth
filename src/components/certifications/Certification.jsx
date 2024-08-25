import certifyStyle from './certification.module.css';
import jsbasic from './assets/jsbasic.png';
import java from './assets/java.png';
import sql from './assets/sql.png';
import jsintermediate from './assets/jsinter.png';
function Certification(){
    const content = [
        {
            image:jsintermediate,
            url:'https://www.hackerrank.com/certificates/266c974eb791'
        },
        {
            image:jsbasic,
            url:'https://www.hackerrank.com/certificates/7cbc01e55b39'
        },
        {
            image:java,
            url:'https://www.hackerrank.com/certificates/49244330f9ae'
        },
        {
            image:sql,
            url:'https://www.hackerrank.com/certificates/622bfcfa550c'
        }
    ];

    return(
        <section className={certifyStyle.certification}>
            <h2>My Certifications <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={certifyStyle.certificateContainer}>
                {
                    content.map(({image,url},index)=>(
                        <img loading='lazy' key={index} src={image} onClick={()=>window.open(url,"_blank","noreferrer noopener")} alt="certificate-image" />
                    ))
                }
            </div>
        </section>
    );
}
export default Certification;