const Challenge = () =>{

    const numero1 = 10
    const numero2 = 9

    const somarNumeros = () =>{
        return console.log(numero1 + numero2)
    }

    return(

        <div>
            <div><h1>Número 1 : {numero1}</h1></div>
            <div><h1>Número 2 : {numero2}</h1></div>
            <div><button onClick={somarNumeros}>Somar Números</button></div>
        </div>
    )
    
}

export default Challenge