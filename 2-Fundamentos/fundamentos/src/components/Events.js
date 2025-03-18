const Events = () =>{



    const handleMyEvent = (e)=>{

        console.log(e)
        console.log('Evento ativado')
    }
    const rendlerSomething = (x) =>{
        if(x){
            return <h1>Posso renderizar isso...</h1>
        }else{
            return <h1>...ou isso.</h1>

        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}> Clique Aqui</button>
                <div>
                     <button onClick={()=> console.log('Clicou!!')}>Clique Aqui Também</button>
                </div>
            </div>
            {rendlerSomething(true)}
            {rendlerSomething(false)}
        </div>
    )
}

export default Events