import './App.css';
import { Navbar, Home, About, Skills, Services, Resume, Works, Reviews, Blogs } from './components';
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
    </div>
  );
}

export default App;