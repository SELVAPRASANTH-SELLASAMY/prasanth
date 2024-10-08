import X_cgs from '../../assets/cgs-max.png';
import XM_cgs from '../../assets/lazy_sources/cgs-max.png';
import X_alcaline from '../../assets/alcaline-max.png';
import XM_alcaline from '../../assets/lazy_sources/alcaline-max.png';
import X_zuko from '../../assets/zukoCoffee-max.png';
import XM_zuko from '../../assets/lazy_sources/zukoCoffee-max.png';
import X_portfolio from '../../assets/portfolio-max.png';
import XM_portfolio from '../../assets/lazy_sources/portfolio-max.png';
const resource = {
    "portfolio":{
        content:"This is my responsive portfolio build by using ReactJS framework.> I have included some small animations in this web app.> For contact field the input element from the form is collected and stored in MongoDB database with the help of API that is build using NodeJS. >I'm planning to build an integrated app which acts like messenger. >If the users send contact message via contact field the message will be received by this web app. >Also, I have a plan to implement notification section in which my replies for the particular contact message will appear.",
        stacks:"ReactJS, CSS, MongoDB, NodeJS",
        thumb:XM_portfolio,
        image:X_portfolio
    },
    "core green softwares landing page":{
        content:"This work includes a simple front-end UI that is responsive for all devices. > Users or Job applicants can create new accounts by entering their details like username, email, mobile number, etc.., > Once the details are entered. A simple validation will validate fields like mobile number, email, and password. The username is unique and the user can't create multiple accounts with the same username. > Applicants can log in using their username and password. > Once they log in their session will remain active for the next 1 hour. > After that the cookie containing user information will expire and users will be asked to log in again.> User information stored in the cookie was encrypted using CryptoJS AES encryption. > On the profile page users can apply for any one open position. Then the application has been reviewed by the admin and the application status will be updated by admin.> According to the application status user information fields like bank information, personal information, education details, etc.., are displayed and users can fill in those details for admin review. > Users can update their information, password, and profile photo. > Users are facilitated to delete their accounts by entering the right password. > Admin panel can be accessed by the below credentials.> password - 000_Destruction_0 > Username - admin@cgs.com",
        stacks:"HTML, CSS, JavaScript, PHP, MySQL, JQuery AJAX",
        thumb:XM_cgs,
        image:X_cgs
    },
    "alcaline technologies landing page":{
        content:"A landing page developed using HTML, CSS & Javascript. >Used CSS grid & flexbox in order to ensure page responsiveness. >Added an infinite carousel by using Javascript. >Implemented infinite scrolling animation using CSS animation & Javascript cloneNode.",
        stacks:"HTML, CSS, SwiperJS",
        thumb:XM_alcaline,
        image:X_alcaline
    },
    "zuko coffee":{
        content:"A Web application built using ReactJS & CSS for frontend. >Components are marked up with semantic tags and styled with css modules. >Conditional styling has been implemented for the Navbar component using the useEffect hook. >Responsiveness is ensured with grid & flexbox design. >A carousel with page indicator is implemented in the OurStory component. >Scroll snap has been added for better functioning while scrolling the items inside the containers. >The backend works aren't completed yet and are initiated using NodeJS and MongoDB.",
        stacks:"ReactJS, CSS, SwiperJS",
        thumb:XM_zuko,
        image:X_zuko
    }
}
export {resource};