import navStyle from './navbar.module.css';
function Navbar(){
    return(
        <header className={navStyle.navbar}>
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