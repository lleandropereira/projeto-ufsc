import logo from './logo.svg';
import './App.css';
import MyComponentTest from './components/MyComponentTest';
import { useState } from 'react';
import CustomComponent from './components/CustomComponent';

function App() {
  
  const bTeste = false;
  const [strTest] = useState('Estilizar');
  const [greenTitle] = useState(true);

  return (
    
    <div className="App">
      {/* CSS Global */}
      <h1>Título incluído no App.js</h1>
      {/* CSS de Componente */}
      <MyComponentTest />
      <p>Parágrafo do App.js</p>
      {/* CSS Inline */}
      <p style={{color: '#ea5f08', background: '#06f1e2', padding: '50px'}}>Novo parágrafo do App.js, desta vez com Css Inline</p>
      <p style={{color: '#cc6a6a', background: '#6acc85', padding: '20px'}}>Novo parágrafo do App.js, desta vez com Css Inline</p>

      <p style={bTeste ? 
        {color: '#d205f7', background: 'yellow'}
       : 
        {color: '#5e0217', background: '#bb9a86'}
      }>Novo parágrafo do App.js, deste vez com o CSS Inline Dinâmico</p>

      <p style={!bTeste ? 
        {color: '#d205f7', background: 'yellow'}
       : 
        {color: '#5e0217', background: '#bb9a86'}
      }>Novo parágrafo do App.js, deste vez com o CSS Inline Dinâmico</p>

      <p style={strTest === 'Estilizar' 
        ? {color: '#df0347', background: 'magenta'}
        : null
      }>Novo parágrafo do App.js, deste vez com o CSS Inline Dinâmico</p>

      <p style={strTest !== 'Estilizar' 
        ? {color: '#df0347', background: 'magenta'}
        : null
      }>Novo parágrafo do App.js, deste vez com o CSS Inline Dinâmico</p>

      {/* CSS Inline com classe dinâmico*/}

      <p className={greenTitle
        ? 'green-title' : 'title'}
        >Novo parágrafo do App.js, deste vez com o CSS Inline com classe dinâmica.</p>

      <p className={!greenTitle
        ? 'green-title' : 'title'}
        >Novo parágrafo do App.js, deste vez com o CSS Inline com classe dinâmica.</p>
      
      {/* Módulos CSS */}
        <CustomComponent />
    </div>
  );
}

export default App;
