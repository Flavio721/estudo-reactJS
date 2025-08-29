import Contador from "./Contador";
import { useState } from "react";
import Card from "./Card";

function App() {
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const divStyle = {
    marginLeft: "400px",
    border: "1px solid white",
    borderRadius: "10px",
    padding: "10px",
  };

  return (
    <div style={divStyle}>
      <Contador />
      <h2>Escreva sua mensagem: </h2>
      <form>
        <label htmlFor="iass">Asunto: </label>
        <input
          type="text"
          id="iass"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
        />
        <label htmlFor="imsg">Mensagem: </label>
        <input
          type="text"
          id="imsg"
          value={mensagem}
          onChange={(m) => setMensagem(m.target.value)}
        />
      </form>
      <Card assunto={assunto} mensagem={mensagem} />
    </div>
  );
}

export default App;
