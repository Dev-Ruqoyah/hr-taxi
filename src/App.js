import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Component/navbar';
import HeroSection from './Component/HeroSection';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <HeroSection></HeroSection>
      </Router>
      
    </div>
  );
}

export default App;
