import Socialprofiles from '../socialprofile/Socialprofiles';
import footerStyle from './footer.module.css';
function Footer(){
    return(
        <footer>
            <Socialprofiles/>
            <p className={footerStyle.copyright}>&copy; 2024, All rights reserved <span>selvaprasanth.tech</span></p>
        </footer>
    );
}
export default Footer;