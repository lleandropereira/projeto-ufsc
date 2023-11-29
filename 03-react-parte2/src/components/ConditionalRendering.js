import { useState } from "react"

const ConditionalRendering = () => {

    const [test] = useState(false);

    const [place, setPlace] = useState('UDESC');

    const handleClick = () => {
      if(place === 'UFSC') {
        setPlace('UDESC')
      } else {
        setPlace('UFSC')
      }
    }
  return (
    <div>
        <h1>Isto será exibido?</h1>
        {test && <p>Se a variável de teste for true, sim.</p>}
        {!test && <p>Se a variável de teste for false, sim.</p>}

        <h1>Teste da condição com IF Ternário</h1>
        
        {place === 'UFSC' ? (
          <p>O local é a UFSC.</p>
        ) : (
          <p>O local não é a UFSC.</p>
        )}

        <button onClick={() => setPlace('UFSC')}>Alterar local</button> {/*Usando função anonima*/}

        <button onClick={handleClick}>Alterar local</button>
    </div>
  )
}

export default ConditionalRendering