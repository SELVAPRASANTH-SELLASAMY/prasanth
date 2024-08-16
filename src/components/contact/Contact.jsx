import contactStyle from './contact.module.css';
import { RiPhoneLine, RiMailLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
function Contact(){
    return(
        <section className={contactStyle.contact}>
            <h2>Contact Me <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={contactStyle.contactInformation}>
                <h4>Contact Information</h4>
                <p className={contactStyle.slogan}>Let's talk a project. If you want scalable, responsive & visually appealing application then why are you waiting? contact me through the below details or just hit a message in the form. I'll get in touch with you soon. <span className='bottomLine'><span className='movingBall'></span></span></p>
                <div className={contactStyle.details}>
                    <figure>
                        <RiPhoneLine/>
                    </figure>
                    <div className={contactStyle.phone}>
                        <h5>Contact on phone</h5>
                        <address>
                            <p>+91 9003413727</p>
                            <p>+91 8903543348</p>
                        </address>
                    </div>
                </div>
                <div className={contactStyle.details}>
                    <figure>
                        <RiMailLine/>
                    </figure>
                    <div className={contactStyle.email}>
                        <h5>Contact on mail</h5>
                        <address>
                            <a href="mailto:prasanthsamy61@gmail.com" target='_blank' rel='noreferrer noopener'>prasanthsamy61@gmail.com</a>
                            <a href="mailto:dvlpr.prasanth@gmail.com" target='_blank' rel='noreferrer noopener'>dvlpr.prasanth@gmail.com</a>
                        </address>
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
            <form name='contact' noValidate>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' autoComplete='off' placeholder='Enter your name'/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' autoComplete='off' placeholder='Enter your email'/>
                <label htmlFor="subject">Subject</label>
                <input type="text" id='subject' name='subject' autoComplete='off' placeholder='Enter the subject'/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder='Enter your message'></textarea>
                <button type='button'>Send mail</button>
            </form>
        </section>
    );
}
export default Contact;