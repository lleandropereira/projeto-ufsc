const ShowUserData3 = ({name, age, registration}) => {
  return (
    <div>
        <h1>Informação sobre dos estudantes:</h1>
    <h3>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Matrícula: {registration}</li>
        </ul>
    </h3>
    
    </div>
    
  )
}

export default ShowUserData3