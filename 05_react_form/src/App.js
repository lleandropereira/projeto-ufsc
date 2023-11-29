import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Meu formulário:</h1>
      <Form user={{name: "Zé Ninguém", email: "ze@nin.guem"}}/>
    </div>
  );
}

export default App;
