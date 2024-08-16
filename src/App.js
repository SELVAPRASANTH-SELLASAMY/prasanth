import './App.css';
import { Navbar, Home, About, Skills, Services, Resume, Works, Reviews, Blogs, Contact, Footer } from './components';
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;