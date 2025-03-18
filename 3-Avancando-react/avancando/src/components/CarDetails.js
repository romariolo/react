
const CarDetails = ({marca, km, cor, estado}) => {
  return (
    <div>
      <h2>Detalhes do Carro</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>KM: {km}</li>
        <li>Cor: {cor}</li>
        {estado && <p>Esse veículo é ZERO KM</p>}
      </ul>
    </div>
  )
}

export default CarDetails
