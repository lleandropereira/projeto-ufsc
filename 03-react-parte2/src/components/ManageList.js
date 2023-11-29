import { useState } from "react"

const ManageList = () => {

    const [products] = useState(["Relógio", "Caneca", "Abajur", "Tapete", "SmartTV"]);

    const [students, setStudents] = useState([
        {id:0, registration: 123445, name: "Maria", age: 21},
        {id:1, registration: 123446, name: "João", age: 22},
        {id:2, registration: 123447, name: "Pedro", age: 23},
        {id:3, registration: 123448, name: "Fernanda", age: 24},
    ]);

    const deleteRandomStudent = () => {
        const randomNumber = Math.floor(Math.random() * 5);
        console.log(randomNumber);

        setStudents((prevStudents) => {
            return prevStudents.filter((student) => randomNumber !== student.id);
        });
    };

  return (
    <div>
        <ul className="list">
            {products.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {students.map((student) => (
                <li key={student.id}>{student.name} ({student.registration}) - {student.age}</li>
            ))}
        </ul>

        <button onClick={deleteRandomStudent}>Remover Estudante Aleatório</button>
    </div>
  )
}

export default ManageList