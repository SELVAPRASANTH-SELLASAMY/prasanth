import './App.css';
import { Navbar, Home, About, Skills, Services } from './components';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
    </div>
  );
}

export default App;