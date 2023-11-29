import { useState } from 'react';
import './Component01.css';

const Component01 = () => {

    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const handleNumber1 = (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setNumero1(value);
        } else {
            setNumero1(0); // Definir como 0 se não for um número válido
        }
    };

    const handleNumber2 = (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setNumero2(value);
        } else {
            setNumero2(0); // Definir como 0 se não for um número válido
        }
    };

    const handleAddition = () => {
        const result = numero1 + numero2;
        setResultado(result);
    };

    const handleSubtraction = () => {
        const result = numero1 - numero2;
        setResultado(result);
    };

    const handleMultiplication = () => {
        const result = numero1 * numero2;
        setResultado(result);
    };

    const handleDivision = () => {
        if (numero2 !== 0) { // Verificar se o divisor não é zero
            const result = numero1 / numero2;
            setResultado(result);
        } else {
            setResultado('Erro: Divisão por zero');
        }
    };
  
    return (
        <div>
            <h1 className='calc_titulo'>Calculadora Visual 1.0</h1>

            <fieldset className='calc_fieldset'>
                <legend>Minha Calculadora</legend>

                <div className='container'>
                    <div>
                        <input className='calc_input' type="text" id='num1' value={numero1} onChange={handleNumber1} />
                    </div>

                    <div>
                        <input className='calc_input' type="text" id='num2' value={numero2} onChange={handleNumber2} />
                    </div>

                    <div>
                        <button className='calc_btt_azul' onClick={handleAddition}>+</button>
                        <p></p>
                        <button className='calc_btt_verde' onClick={handleMultiplication}>x</button>
                    </div>

                    <div>
                        <button className='calc_btt_amarelo' onClick={handleSubtraction}>-</button>
                        <p></p>
                        <button className='calc_btt_vermelho' onClick={handleDivision}>/</button>
                    </div>

                    <div>
                        <label className='calc_label'>=</label>
                    </div>

                    <div>
                        <input className='calc_input_result' type="text" id='result' value={resultado} readOnly />
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default Component01;
