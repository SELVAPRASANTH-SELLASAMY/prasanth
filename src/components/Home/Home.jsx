import homeStyle from './home.module.css';
import avatar from '../../assets/avatar.jpg';
import { RiArrowDownLine} from "react-icons/ri";
import { useEffect, useRef, useState } from 'react';
import Socialprofiles from '../socialprofile/Socialprofiles';
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
                typingCursor.current && typingCursor.current.classList.add(homeStyle.pausetyping);
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
    useEffect(()=>{
        handleType();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return(
        <section className={homeStyle.home}>
            <figure>
                <img src={avatar} alt="Avatar" />
            </figure>
            <h1>Hi, I am <span>{contentState}</span><span ref={typingCursor}  className={homeStyle.typingCursor}>|</span></h1>
            <p>I am a full-stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <Socialprofiles/>
            <p className={homeStyle.scrollDown}><span><RiArrowDownLine/></span>Scroll down</p>
        </section>
    );
}
export default Home;