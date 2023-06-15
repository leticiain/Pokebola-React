import Counter from "./Counter";
import Form from "./Form";
import Header from "./Header";
import Pokedex from "./Pokedex";

function App() {

  return ( 
    <div className="App">

      <Header />


      <div className="container-fluid">
        <div className="row">

          <div className="col-sm">
            <h1>Olá Mundo!</h1>
            <Form botao="Enviar" idBotao="1" />
          </div>

          <div className="col-sm">
            <Counter />
          </div>

        </div>
      </div>

      
      <Pokedex />
      
    </div>
  );
}

export default App;