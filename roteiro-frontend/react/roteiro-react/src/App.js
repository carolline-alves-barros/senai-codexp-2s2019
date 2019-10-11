import React from "react";
import "./App.css";

// importar o componente de Rodapé
import Rodape from './componentes/Rodape/Rodape'

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Rodape />
      {/* <footer>Escola SENAI de Informática</footer> */}
    </div>
  );
}

export default App;
