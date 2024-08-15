import contactStyle from './contact.module.css';
import { RiPhoneLine, RiMailLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
function Contact(){
    return(
        <section className={contactStyle.contact}>
            <h2>Contact Me</h2>
            <div className={contactStyle.contactInformation}>
                <h5>Contact Information</h5>
                <p className={contactStyle.slogan}>Let's talk a project. If you want scalable, responsive & visually appealing application then why are you waiting? contact me through the below details or just hit a message in the form. I'll get in touch with you soon.</p>
                <div className={contactStyle.details}>
                    <figure>
                        <RiPhoneLine/>
                    </figure>
                    <div className={contactStyle.phone}>
                        <h5>Contact on phone</h5>
                        <address>+91 9003413727</address>
                        <address>+91 8903543348</address>
                    </div>
                </div>
                <div className={contactStyle.details}>
                    <figure>
                        <RiMailLine/>
                    </figure>
                    <div className={contactStyle.email}>
                        <h5>Contact on mail</h5>
                        <address>prasanthsamy61@gmail.com</address>
                        <address>dvlpr.prasanth@gmail.com</address>
                    </div>
                </div>
                <div className={contactStyle.details}>
                    <figure>
                        <SlLocationPin/>
                    </figure>
                    <div className={contactStyle.address}>
                        <h5>Contact address</h5>
                        <address>3/188, Palani, Dindigul, Tamil nadu, India</address>
                    </div>
                </div>
            </div>
            <form>
                
            </form>
        </section>
    );
}
export default Contact;