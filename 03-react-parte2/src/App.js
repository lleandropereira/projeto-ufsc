// import logo from './logo.svg';
import './App.css';
// import Picture from './components/Picture';
import ManageData from './components/ManageData';
import ManageList from './components/ManageList';
import ConditionalRendering from './components/ConditionalRendering';
import ShowUserData from './components/ShowUserData';
import { useState } from 'react';
import ShowUserData2 from './components/ShowUserData2';
import ShowUserData3 from './components/ShowUserData3';
import ContainerComponent from './components/ContainerComponent';
import DoSomething from './components/DoSomething';

function App() {

  const userAge = 22;
  const [course] = useState('Ciência da Informação')

  const [students] = useState([
    {id:0, registration: 123445, name: "Maria", age: 21},
    {id:1, registration: 123446, name: "João", age: 22},
    {id:2, registration: 123447, name: "Pedro", age: 23},
    {id:3, registration: 123448, name: "Fernanda", age: 24},
  ]);

  const writeMessage = () => {

    const currentDate = new Date()

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    const currentDateTime = currentDate.toLocaleDateString('pt-br', options)
    console.log('O botão foi clicado.' + currentDateTime);
  };

  return (
    <div className="Images">
      <div>
        {/* <Picture /> */}
      </div>
      <div>
        <ManageData />
        <br /><br />
        <ManageList />
        <ConditionalRendering />
        <ShowUserData name='Zé Ninguém' age={userAge} course={course}/>
        <ShowUserData2 name='Fula de Tal' age={19} course={course} freshman={true} />
        <ShowUserData2 name='Maria' age={20} course={course} freshman={true} />
        <ShowUserData2 name='João' age={21} course={course} freshman={false} />
        <ShowUserData2 name='Beltrano' age={22} course={course} freshman={false} />
        <ShowUserData2 name='Maria Ninguém' age={23} course={course} freshman={true} />
      </div>
      {students.map((student) => (
        <ShowUserData3 
        key={student.id}
        name={student.name}
        age={student.age}
        registration={student.registration}
        />
      ))}
      <ContainerComponent number={25}>
        <p>Conteúdo extra do meu componente contâiner</p>
        <p>1+1=2</p>
      </ContainerComponent>
      <ContainerComponent number={12}>
        <p>Conteúdo extra do meu componente contâiner02</p>
        <p>1+2=3</p>
      </ContainerComponent>
      <ContainerComponent number={7}>
        <p>Conteúdo extra do meu componente contâiner03</p>
        <p>1+3=4</p>
      </ContainerComponent>
      <ContainerComponent number={3}>
        <p>Conteúdo extra do meu componente contâiner04</p>
        <p>1+4=5</p>
      </ContainerComponent>
      <DoSomething myComand={writeMessage}/>
    </div>
  );
}

export default App;
