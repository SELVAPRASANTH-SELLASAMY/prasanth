import './App.css';
import { Navbar, Home, About, Skills, Services, Resume } from './components';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Resume/>
    </div>
  );
}

export default App;