import { useEffect, useState } from 'react';
import navStyle from './navbar.module.css';
function Navbar(){
    const [changeBg,setChangeBg] = useState(false);
    const scrollEffect = {
        borderBottom :'.1rem solid rgba(255, 255, 255, 0.2)',
        backgroundColor: '#0f172acc',
        backdropFilter: 'blur(8px)'
    }
    const handleScrollEffect = () => {
        window.scrollY > 50 ? setChangeBg(true) : setChangeBg(false);
    }
    useEffect(()=>{
        window.onscroll = handleScrollEffect;
        return () => window.removeEventListener('scroll',handleScrollEffect);
    },[])
    return(
        <header style={changeBg ? scrollEffect : null} className={navStyle.navbar}>
            <h1>Prasanth</h1>
            <nav>
                <ol>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#home'>About</a></li>
                    <li><a href='#home'>Resume</a></li>
                    <li><a href='#home'>Works</a></li>
                    <li><a href='#home'>Blog</a></li>
                    <li><a href='#home'>Contact</a></li>
                </ol>
            </nav>
            <button>Hire me</button>
        </header>
    );
}
export default Navbar;