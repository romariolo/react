import {useState} from 'react'
const ManagerData = () => {

    let someData = 10
    console.log(someData)

    const [number, setnumber] = useState(15);
    console.log(number)



  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={()=> (someData = 15)}>Mudar valor</button>
        </div>
        <div>
            <p>Valor de State: {number}</p>
            <button onClick={() => setnumber(33)}>Mudar State</button>
            
        </div>
      
    </div>
  )
}

export default ManagerData
