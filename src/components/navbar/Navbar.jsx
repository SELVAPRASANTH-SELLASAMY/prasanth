import { useEffect, useRef, useState } from 'react';
import navStyle from './navbar.module.css';
import { RiMenuFill } from "react-icons/ri";
function Navbar(){
    const [changeBg,setChangeBg] = useState(false);
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
    }

    useEffect(()=>{
        window.onscroll = handleScrollEffect;
        return () => window.removeEventListener('scroll',handleScrollEffect);
    },[])
    return(
        <header style={changeBg ? scrollEffect : null} className={navStyle.navbar}>
            <h1>Prasanth</h1>
            <nav ref={mobileNavbar}>
                <ol>
                    <li><span>Home</span></li>
                    <li><span>About</span></li>
                    <li><span>Resume</span></li>
                    <li><span>Works</span></li>
                    <li><span>Blog</span></li>
                    <li><span>Contact</span></li>
                </ol>
                <button>Hire me</button>
            </nav>
            <button>Hire me</button>
            <RiMenuFill className={navStyle.hamburger} onClick={handleMenubar}/>
        </header>
    );
}
export default Navbar;