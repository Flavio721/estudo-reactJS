import { useState } from "react";

function Citacoes() {
  // Variáveis necessárias
  const [listaCitacoes, setListaCitacoes] = useState([]);
  const [citacoes, setCitacoes] = useState("");
  const [escolhida, setEscolhida] = useState("");
  // Funções necessárias
  function enviarCitacao(e) {
    e.preventDefault();
    setListaCitacoes([...listaCitacoes, citacoes]);
    setCitacoes("");
  }
  function sortearFrase() {
    const numeroEscolhido = Math.floor(Math.random() * listaCitacoes.length);
    setEscolhida(listaCitacoes[numeroEscolhido]);
  }
  //  Retorno HTML
  return (
    <div>
      <h2>Escreva uma frase abaixo</h2>
      <form onSubmit={enviarCitacao}>
        <input
          type="text"
          id="ifra"
          value={citacoes}
          onChange={(e) => setCitacoes(e.target.value)}
        />
        <button type="submit">Enviar para lista</button>
      </form>
      <ul>
        {listaCitacoes.map((citacao, index) => (
          <li key={index}>{citacao}</li>
        ))}
      </ul>
      <h2>Sorteie uma de suas frases</h2>
      <button onClick={sortearFrase}>Sortear</button>
      <p>{escolhida}</p>
    </div>
  );
}

export default Citacoes;
