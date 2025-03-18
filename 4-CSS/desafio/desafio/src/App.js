import logo from './logo.svg';
import './App.css';
import Cardetails from './components/Cardetails';

function App() {
  
  const cars = [
    {id:1, nome:"Jetta", marca:"VW"},
    {id:2, nome:"Pálio", marca:"FIAT"},
    {id:3, nome:"Cruze", marca:"GM"}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1 class="titulo">Desafio</h1>
        {cars.map((carros) => (
          <Cardetails 
          key={carros.id}
          carro={carros.nome}
          marca={carros.marca}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
