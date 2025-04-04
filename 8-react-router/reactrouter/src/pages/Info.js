import { useParams } from "react-router-dom"

const Info = () => {

    const {id} = useParams();

  return (
    <div>
      <h1>Mais Informações do prodito: {id}</h1>
    </div>
  )
}

export default Info
