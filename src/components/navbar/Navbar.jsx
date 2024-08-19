import { useContext, useEffect, useRef, useState } from 'react';
import navStyle from './navbar.module.css';
import { RiMenuFill } from "react-icons/ri";
import { AppContext } from '../../App';
function Navbar(){
    const [changeBg,setChangeBg] = useState(false);
    const [activeWindow,setActiveWindow] = useState('Home');

    const mobileNavbar = useRef();
    const scrollEffect = {
        borderBottom :'.1rem solid rgba(255, 255, 255, 0.2)',
        backgroundColor: '#0f172acc',
        backdropFilter: 'blur(8px)'
    }
    const handleScrollEffect = () => {
        window.scrollY > 50 ? setChangeBg(true) : setChangeBg(false);
    }

    const handleMenubar = () => {
        mobileNavbar.current.classList.toggle(navStyle.showNavbar);
        const hideNavbar = () => mobileNavbar.current.classList.remove(navStyle.showNavbar);
        mobileNavbar.current.onclick = hideNavbar;
        return ()=> window.removeEventListener('click',hideNavbar);
    }

    const {aboutRef,homeRef,resumeRef,worksRef,blogRef,contactRef} = useContext(AppContext);

    const handleNavigation = (reference) => {
        reference.current.scrollIntoView({behavior:"smooth"});
    }

    useEffect(()=>{
        const Observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setActiveWindow(entry.target.getAttribute('name'));
                }
            });
        },{threshold:.5, rootMargin:"40px"});
        [aboutRef,homeRef,resumeRef,worksRef,blogRef,contactRef].forEach(section=>{
            Observer.observe(section.current);
        });
        return ()=> Observer.disconnect();
    },[aboutRef,homeRef,resumeRef,worksRef,blogRef,contactRef]);

    useEffect(()=>{
        window.onscroll = handleScrollEffect;
        return () => window.removeEventListener('scroll',handleScrollEffect);
    },[])
    return(
        <header style={changeBg ? scrollEffect : null} className={navStyle.navbar}>
            <h1>Prasanth</h1>
            <nav ref={mobileNavbar}>
                <ol>
                    <li className={activeWindow === 'home' ? navStyle.active : null} onClick={()=>handleNavigation(homeRef)}><span>Home</span></li>
                    <li className={activeWindow === 'about' ? navStyle.active : null} onClick={()=>handleNavigation(aboutRef)}><span>About</span></li>
                    <li className={activeWindow === 'resume' ? navStyle.active : null} onClick={()=>handleNavigation(resumeRef)}><span>Resume</span></li>
                    <li className={activeWindow === 'works' ? navStyle.active : null} onClick={()=>handleNavigation(worksRef)}><span>Works</span></li>
                    <li className={activeWindow === 'blogs' ? navStyle.active : null} onClick={()=>handleNavigation(blogRef)}><span>Blog</span></li>
                    <li className={activeWindow === 'contact' ? navStyle.active : null} onClick={()=>handleNavigation(contactRef)}><span>Contact</span></li>
                    <button>Hire me</button>
                </ol>
            </nav>
            <button>Hire me</button>
            <RiMenuFill className={navStyle.hamburger} onClick={handleMenubar}/>
        </header>
    );
}
export default Navbar;