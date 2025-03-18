import styles from "./CarDetails.module.css"

const Cardetails = ({carro, marca}) => {
  return (
    <div>
      <h1 className={styles.car_details}>Detalhes</h1>
      <ul className={styles.car_details}>
        <h2>Carro</h2>
        <li>nome: {carro}</li>
        <li>marca: {marca}</li>
      </ul>
    </div>
  )
}

export default Cardetails
