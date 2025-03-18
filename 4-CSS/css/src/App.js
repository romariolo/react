import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import React, { useState } from 'react';
import Title from './components/Title';

function App() {
  let n = 1
  const [name] = useState("Romário")
  const redTitle = true
  const [color, setColor] = useState("blue")

  const changeColor = () =>{
    setColor("red")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*CSSn Global */}
        <h1>React com CSS</h1>
        {/*CSS de Componente */}
        <MyComponent />
        <p>parágrafo do App.js</p>
        {/*CSS Inline */}
        <p style={{color:"red", padding: "25px", backgroundColor: "white"}} >Parágrafo estilizado inline</p>
        {/*CSS inline dinâmico */}
        <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"}) } >CSS Dinâmico</h2>
        <h2 style={name === "Romário"? ({color: "blue", backgroundColor: "gray"}) : null } >CSS Dinâmico</h2>
        {/*Classe dinâmica */}
        <h2 className={redTitle ? "red-title": "title"} >Classe dinâmica</h2>
        <Title/>
        <button onClick={changeColor}>Mudar cor</button>
        <p style={{color:color}}>Mudar de cor</p>
      </header>
    </div>
  );
}

export default App;
