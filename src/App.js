import './App.css';
import { Navbar, Home, About, Skills, Services, Resume, Works } from './components';
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
    </div>
  );
}

export default App;