import { useState } from "react";

const ManageData = () => {

    let someData = 10;
    const [number, setNumber] = useState(30);

    console.log('someData' + someData);
    console.log('number' + number);

  return (
    <div>
        <div className="container">
            <p>Valor: {number}</p>
            <button onClick={() => {
                setNumber(number + 1); 
                console.log('number' + number);
             }}
            >Alterar o valor</button>
        </div>

        <div></div>
    </div>
  )
}

export default ManageData