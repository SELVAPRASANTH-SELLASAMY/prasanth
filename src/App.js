import './App.css';
import { Navbar, Home, About, Skills, Services, Resume, Works, Reviews, Blogs, Contact, Footer } from './components';
import { createContext, useRef } from 'react';
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
    <div className="App">
      <AppContext.Provider value={navReferences}>
        <Navbar/>
        <main>
          <Home/>
          <About/>
          <Skills/>
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
  );
}

export{AppContext};
export default App;