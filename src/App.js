import './App.css';
import { Navbar, Home, About, Skills, Services, Resume, Works, Reviews, Blogs, Contact } from './components';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Resume/>
      <Works/>
      <Reviews/>
      <Blogs/>
      <Contact/>
    </div>
  );
}

export default App;