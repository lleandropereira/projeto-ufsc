import Component02 from "./Component02"

const Component01 = () => {
  return (
    <div>    
       <h1 className="Titulo do meu Componente"> Meu primeiro componente React </h1>
       {console.log("Component 01: Mensagem de teste")}

       <Component02 />
    </div>
  )
}

export default Component01