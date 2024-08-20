import { useRef } from 'react';
import serviceStyle from './services.module.css';
import { RiCodeSSlashLine, RiUploadCloud2Line } from "react-icons/ri";
import { useInView } from 'framer-motion';
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
    const serviceTileRef = useRef();
    const isServiceTileInView = useInView(serviceTileRef);
    const framerAnimation = {
        transform: isServiceTileInView ? 'translateY(0)' :'translateY(2.5rem)',
        transition:'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        opacity: isServiceTileInView ? 1 : 0,
        transitionDelay: 0
    }
    return(
        <section className={serviceStyle.services}>
            <h2>My Services <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={serviceStyle.serviceContainer}>
                {
                    serviceContent.map((serv,index)=>(
                        <div ref={serviceTileRef} key={index} className={serviceStyle.serviceTile} style={{...framerAnimation,transitionDelay:`calc(500ms + (250ms * ${index}))`}}>
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