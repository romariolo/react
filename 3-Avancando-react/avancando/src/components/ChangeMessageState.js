

const ChangeMessageState = ({changeMessage}) => {

    const messages = ["oi", "Olá", "Blz"]

  return (
    <div>
      <button onClick={() => changeMessage(messages[0])}>1</button>
      <button onClick={() => changeMessage(messages[1])}>2</button>
      <button onClick={() => changeMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState
