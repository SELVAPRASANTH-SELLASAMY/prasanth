import serviceStyle from './services.module.css';
import { RiCodeSSlashLine, RiUploadCloud2Line } from "react-icons/ri";
function Services(){
    const serviceContent = [
        {
            image: <RiCodeSSlashLine/>,
            serviceName: "Web development",
            content: "Crafting responsive, user-focused websites with clean code and modern web technologies to bring your digital vision to life."
        },
        {
            image: <RiUploadCloud2Line/>,
            serviceName: "API development",
            content: "Building robust, efficient APIs that seamlessly connect and power your applications with clean, scalable code."
        }
    ];
    return(
        <section className={serviceStyle.services}>
            <h2>My Services <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={serviceStyle.serviceContainer}>
                {
                    serviceContent.map((serv,index)=>(
                        <div key={index} className={serviceStyle.serviceTile}>
                            <div className={serviceStyle.serielNumber}>{(index+1).toString().padStart(2,'0')}</div>
                            <figure>
                                {serv.image}
                            </figure>
                            <h4>{serv.serviceName}</h4>
                            <p>{serv.content}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
export default Services;