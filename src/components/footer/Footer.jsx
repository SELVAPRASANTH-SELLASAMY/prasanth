import Socialprofiles from '../socialprofile/Socialprofiles';
import footerStyle from './footer.module.css';
function Footer(){
    return(
        <footer>
            <Socialprofiles/>
            <p className={footerStyle.copyright}>&copy; {new Date().getFullYear()}, All rights reserved <a href='https://prasanth.software'>prasanth.software</a></p>
        </footer>
    );
}
export default Footer;