import React from 'react';
import homeStyle from './home.module.css';
import avatar from '../../assets/avatar.jpg';
import { RiFacebookFill, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill, RiArrowDownLine, RiWhatsappFill } from "react-icons/ri";
import { useEffect, useRef, useState } from 'react';
function Home(){
    const content = ['Selvaprasanth','Full-stack Developer'];
    const typingCursor = useRef();
    const [contentState,setContentState] = useState("");
    const handleType = () => {
        let contentIndex = 0;
        let wordIndex = 0;
        let deleteInterval;
        const type = () => {
            if(wordIndex === content[contentIndex].length - 1){
                clearInterval(typingInterval);
                typingCursor.current.classList.add(homeStyle.pausetyping);
                setTimeout(()=>{
                    typingCursor.current.classList.remove(homeStyle.pausetyping);
                    deleteInterval = setInterval(Delete,50);
                },3000);
            }
            setContentState(content[contentIndex].slice(0,wordIndex+1));
            ++wordIndex;
        }
        const Delete = () => {
            if(wordIndex === 0){
                clearInterval(deleteInterval);
                contentIndex = contentIndex === (content.length - 1) ? 0 : ++contentIndex;
                typingInterval = setInterval(type,150);
            }
            setContentState(content[contentIndex].slice(0,wordIndex));
            --wordIndex;
        }
        let typingInterval = setInterval(type,150);

        return () => {
            typingInterval && clearInterval(typingInterval);
            deleteInterval && clearInterval(deleteInterval);
        }
    }
    const socialMediasArray = [<RiFacebookFill/>,<RiWhatsappFill/>,<RiTwitterXFill/>,<RiGithubFill/>,<RiLinkedinBoxFill/>];
    const renderSocialMedias = () => {
        const icons = socialMediasArray.map((icon,index)=>(
            <div key={index} className={homeStyle.mediaIcon}>
                {Array.from({length:2},(_,index)=>(
                    React.cloneElement(icon,{key:index})
                ))}
            </div>
        ));
        return [...icons];
    }
    useEffect(()=>{
        handleType();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return(
        <section className={homeStyle.home}>
            <img src={avatar} alt="Avatar" />
            <h1>Hi, I am <span>{contentState}</span><span ref={typingCursor}  className={homeStyle.typingCursor}>|</span></h1>
            <p>I am a full-stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <div className={homeStyle.socialMedias}>
                {renderSocialMedias()}
            </div>
            <p className={homeStyle.scrollDown}><span><RiArrowDownLine/></span>Scroll down</p>
        </section>
    );
}
export default Home;