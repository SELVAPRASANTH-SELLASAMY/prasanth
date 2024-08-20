import homeStyle from './home.module.css';
import avatar from '../../assets/avatar.jpg';
import { RiArrowDownLine} from "react-icons/ri";
import { useEffect, useRef, useState, useContext } from 'react';
import Socialprofiles from '../socialprofile/Socialprofiles';
import { AppContext } from '../../App';
import { useInView } from 'framer-motion';
function Home(){
    const {homeRef,aboutRef} = useContext(AppContext);
    const content = ['Selvaprasanth','Full-stack Developer'];
    const typingCursor = useRef();
    const [contentState,setContentState] = useState("");
    const isHomeInView = useInView(homeRef,{once:false});
    const framerAnimation = {
        transform: isHomeInView ? 'translateY(0)' :'translateY(2.5rem)',
        transition:'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        opacity: isHomeInView ? 1 : 0,
        transitionDelay: 0
    }
    const handleType = () => {
        let contentIndex = 0;
        let wordIndex = 0;
        let deleteInterval;
        const type = () => {
            if(wordIndex === content[contentIndex].length - 1){
                clearInterval(typingInterval);
                typingCursor.current && typingCursor.current.classList.add(homeStyle.pausetyping);
                setTimeout(()=>{
                    typingCursor.current && typingCursor.current.classList.remove(homeStyle.pausetyping);
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
    const scrollDown = () => {
        aboutRef.current.scrollIntoView({behavior:"smooth"});
    }
    useEffect(()=>{
        handleType();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return(
        <section name='home' ref={homeRef} className={homeStyle.home}>
            <figure style={framerAnimation}>
                <img src={avatar} alt="Avatar" />
            </figure>
            <h1 style={{...framerAnimation,transitionDelay:'650ms'}}>Hi, I am <span>{contentState}<span ref={typingCursor}  className={homeStyle.typingCursor}>|</span> </span></h1>
            <p style={{...framerAnimation,transitionDelay:'800ms'}}>I am a full-stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <Socialprofiles framerAnimation={framerAnimation}/>
            <p style={{...framerAnimation,transitionDelay:'1100ms'}} className={homeStyle.scrollDown} onClick={scrollDown}><span><RiArrowDownLine/></span>Scroll down</p>
        </section>
    );
}
export default Home;