import './App.css';
import Component01 from './components/Component01';
import Component02 from './components/Component02';
import Calculation from './components/Calculation';

function App() {
  return (
    <div className="ReactBasico">
      <h1>React Básico</h1>
        <Component02 />
        <Component01 />
        
        <Calculation />
    </div>
  );
}

export default App;
