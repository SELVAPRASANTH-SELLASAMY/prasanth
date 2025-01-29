import contactStyle from './contact.module.css';
import { RiPhoneLine, RiMailLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { AppContext } from '../../App';
import { useContext, useRef, useState } from 'react';
import Loader from '../loader/Loader';
import Axios from 'axios';
import useFormval from '../cutomhooks/useFormval';
function Contact(){
    const {contactRef} = useContext(AppContext);
    const [loading,setLoading] = useState(false);
    const [formState,setFormState] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });
    const warning = useRef();
    const emailForm = useRef();

    function respond(res,msg = "OOPS! Something went wrong."){
        setLoading(false);
        warning.current.innerText = res.status === 200 ? "Got your message. I'll get you back soon!" : msg;
        warning.current.style.color = res.status === 200 ? 'var(--green)' : 'red';
        warning.current.style.top = '.5rem';
        if(res.status !== 200){console.log(res)}
        setTimeout(()=>{
            warning.current.style.top = '-1.5rem';
            if(res.status === 200){resetForm(emailForm.current);}
        },3000);
    }

    const resetForm = (form) => {
        form.reset();
    }

    const Handlesubmit = () => {
        const isValidForm = useFormval(formState);
        if(!isValidForm.valid){
            return respond("",isValidForm.response);
        }
        return sendMail();
    }

    const sendMail = () => {
        setLoading(true);
        Axios.post("https://jarvis-r2p3.onrender.com/portfolio/sendEmail",formState)
        .then((res)=>{
            respond(res);
        })
        .catch((error)=>{
            respond(error);
        });
    }

    return(
        <section name='contact' ref={contactRef} className={contactStyle.contact}>
            <h2>Contact Me <span className='bottomLine'><span className='movingBall'></span></span></h2>
            <div className={contactStyle.contactInformation}>
                <h4>Contact Information</h4>
                <p className={contactStyle.slogan}>Let's talk about a project. If you want a scalable, responsive & visually appealing application then why are you waiting? contact me through the below details or just hit a message in the form. I'll get in touch with you soon. <span className='bottomLine'><span className='movingBall'></span></span></p>
                <div className={contactStyle.details}>
                    <figure>
                        <RiPhoneLine/>
                    </figure>
                    <div className={contactStyle.phone}>
                        <h5>Contact on phone</h5>
                        <address>
                            <a href='tel:+919003413727'>+91 9003413727</a>
                            <a href='tel:+918903543348'>+91 8903543348</a>
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
                            <a href="mailto:selvaprasanths.20mech@kongu.edu" target='_blank' rel='noreferrer noopener'>selvaprasanths.20mech@kongu.edu</a>
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
            <form ref={emailForm} name='contact' noValidate>
                <label htmlFor="name">Name <span>*</span></label>
                <input onChange={(e)=>setFormState({...formState,name:e.target.value})} type="text" id='name' name='name' autoComplete='off' placeholder='Enter your name'/>
                <label htmlFor="email">Email <span>*</span></label>
                <input onChange={(e)=>setFormState({...formState,email:e.target.value})} type="email" id='email' name='email' autoComplete='off' placeholder='Enter your email'/>
                <label htmlFor="subject">Subject <span>*</span></label>
                <input onChange={(e)=>setFormState({...formState,subject:e.target.value})} type="text" id='subject' name='subject' autoComplete='off' placeholder='Enter the subject'/>
                <label htmlFor="message">Message <span>*</span></label>
                <textarea onChange={(e)=>setFormState({...formState,message:e.target.value})} name="message" id="message" placeholder='Enter your message'></textarea>
                <button onClick={Handlesubmit} type='button'>Send mail</button>
                <p ref={warning} className={contactStyle.warn}>All the fields are required to be filled!</p>
                {loading ? <Loader/> : null}
            </form>
        </section>
    );
}
export default Contact;