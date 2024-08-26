import './App.css';
import { Navbar, Home, About, Skills, Services, Resume, Works, Reviews, Blogs, Contact, Footer, Certification } from './components';
import { createContext, useRef } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
const AppContext = createContext();
function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const worksRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();
  const navReferences = {aboutRef,homeRef,resumeRef,worksRef,blogRef,contactRef};
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>selvaprasanth.tech</title>
          <meta name='description' content="Hi, I'm Prasanth a passionate full-stack developer belonging from Palani, Dindigul, Tamil Nadu, India. Skilled in ReactJS, CSS, HTML, JavaScript, C++, Java. A 2024 passed-out Mechanical engineering graduate from Kongu Engineering College, Perundurai, Erode, Tamil Nadu, India. Open to work in Coimbatore, Chennai, Bangalore, and Hyderabad."/>
          <meta name='keywords' content="sp.tech, sp tech, selvaprasanth tech, selvaprasanth.tech, Full-stack development, web development,UI development, ReactJS, Selvaprasanth's project, selvaprasanth portfolio, selva's portfolio"/>
          <meta name='author' content='Selvaprasanth'/>
        </Helmet>
        <AppContext.Provider value={navReferences}>
          <Navbar/>
          <main>
            <Home/>
            <About/>
            <Skills/>
            <Certification/>
            <Services/>
            <Resume/>
            <Works/>
            <Reviews/>
            <Blogs/>
            <Contact/>
          </main>
          <Footer/>
        </AppContext.Provider>
      </div>
    </HelmetProvider>
  );
}

export{AppContext};
export default App;