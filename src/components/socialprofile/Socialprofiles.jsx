import socialStyle from './socialprofiles.module.css';
import React from 'react';
import { RiFacebookFill, RiTwitterXFill, RiGithubFill, RiLinkedinBoxFill, RiWhatsappFill } from "react-icons/ri";
function Socialprofiles(){
    const socialMediasArray = [<RiFacebookFill/>,<RiWhatsappFill/>,<RiTwitterXFill/>,<RiGithubFill/>,<RiLinkedinBoxFill/>];
    const renderSocialMedias = () => {
        const icons = socialMediasArray.map((icon,index)=>(
            <div key={index} className={socialStyle.mediaIcon}>
                {Array.from({length:2},(_,index)=>(
                    React.cloneElement(icon,{key:index})
                ))}
            </div>
        ));
        return [...icons];
    }
    return(
        <div className={socialStyle.socialMedias}>
            {renderSocialMedias()}
        </div>
    );
}
export default Socialprofiles;