const TemplateExpression = () => {

    const nome = 'Romário'
    const data = {
        age: 37,
        job: 'Programmer',
    }

    return(
        <div>
            <h1>Olá, {nome}! Tudo bem?</h1>
            <p>Meu trabalho é: {data.job}</p>
            {/*Executa javascropt */}
            <p>{ 5 + 5}</p>
            <p>{console.log('JSX ')}</p>
        </div>
    )

}


export default TemplateExpression