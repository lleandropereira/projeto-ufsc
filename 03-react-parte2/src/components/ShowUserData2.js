const ShowUserData2 = ({name, age, course, freshman}) => {
  return (
 <div>
    <h1>Detalhes dos estudantes</h1>
    <h3>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Curso: {course}</li>
            <li>{freshman ? (<p>É calouro</p>) : (<p>Não é calouro</p>)}</li>
        </ul>
    </h3>
 </div>
  )}

export default ShowUserData2