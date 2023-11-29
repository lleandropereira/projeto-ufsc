import { useState } from 'react';
import './Form.css';


const Form = ({user}) => {

    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const handleName = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    };

    console.log(name, email);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Envio de formulário');
        console.log(name, email);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    value={name}
                    onChange={handleName}/>
            </div>
            
            {/*Tag label envelopando o input*/}
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    name="email"
                    placeholder="Digite o seu email"
                    value={email}
                    onChange = {
                        (e) => setEmail(e.target.value)
                    }/>
            </label>
            <input 
                type="submit"
                value="Enviar!" />
        </form>
    </div>
  )
}

export default Form