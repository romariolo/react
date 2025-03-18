import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>My Form</h2>
        <MyForm user = {{name: "Lopes", email: "lopes@mail", bio:"Cloud Developer", role:"admin"}}/>
      </header>
     
    </div>
  );
}

export default App;
