import './App.css';
import Fortaleza from "./assets/fortaleza.jpeg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManagerData from './components/ManagerData';
import ShowUsersName from './components/ShowUsersName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Conteiner from './components/Conteiner';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {
  const name = "Romário"
  //const [userName] = useState("Maria")

  const cars = [
    {id:1, marca:"VW", cor:"Branca", km:0, estado: true},
    {id:2, marca:"Honda", cor:"Verde", km:10000, estado: false},
    {id:3, marca:"GM", cor:"Vermelha", km:0, estado: true},
  ]

function showMessage(){
  alert("Função ativada")
  console.log("Função do componente pai...")
}

const [message, setMessage] = useState("")

const handleMessage = (msg) =>{
setMessage(msg)
};

const persons = [
  {id:1, nome: "Francisco", idade:37, profissao: "Engenheiro de Dados"},
  {id:2, nome: "Senior", idade:57, profissao: "Dev"},
  {id:3, nome: "Junior", idade:17, profissao: "QA"}
]

  return (
    <div className="App">
        <h1>Avançando em React</h1>
        {/*Imagem de public */}
        <div>
          <h2>Linda cidade à noite</h2>
          <img src="city.jpg" alt="Cidade a noite" />
        </div>
        {/*Imagem de assets*/}
        <div>
          <h2>Cidade de Fortaleza à noite</h2>
          <img src={Fortaleza} alt="Cidade de Fortaleza à noite" />
        </div>
        <ManagerData/>
        <ListRender/>
        <ConditionalRender/>
        {/*props */}
        <ShowUsersName name = {name}/>
        {/*destructuring props */}
        <CarDetails marca = "GM" km={40000} cor="Branco" estado = {false}/>
        {/*reraproveitando */}
        <CarDetails marca = "Fiat" km={0} cor="Preto" estado = {true}/>
        <CarDetails marca = "Toyota" km={400000} cor="Vermelho" estado = {false}/>
        {/*Loop em objetos de lista */}
        {cars.map((car) => (
          <CarDetails key={car.id}
           marca={car.marca}
           cor={car.cor}
           km={car.km}
           estado={car.estado}/>
        ))}
        {/*Fragment */}
        <Fragments propFragment = "Teste"/>
        {/*Children */}
        <Conteiner>
          <p>Texto do conteiner</p>
        </Conteiner>
        {/*Executar função */}
        <ExecuteFunction myFunction={showMessage} />
        {/*Lift */}
        <Message msg={message} />
        <ChangeMessageState changeMessage={handleMessage} />
        {/*Dersafio */}
        {persons.map((pes) =>(
          <UserDetails 
          key={pes.id}
          nome={pes.nome}
          idade={pes.idade}
          prof={pes.profissao}
          
          />
        ))}
    </div>
  );
}

export default App;
