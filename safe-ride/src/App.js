import api from "./api";
import { useState } from "react";

function App() {
  const [musicas, setMusicas] = useState([]);
  // criando state com valor de um vetor vazio;

  function listar() {
    api
      .get()
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setMusicas(response.data);
        // setando "musicas" com os mesmos dados recebidos pela resposta da requisição;
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }
  return (
    <>
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>
    </>
  );
}

export default App;
