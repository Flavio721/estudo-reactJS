import { useState } from "react";

function Botao() {
  const [corBtn, setCorBtn] = useState("blue");

  function mudarCor() {
    setCorBtn("red");
  }
  function mudarCorAzul() {
    setCorBtn("blue");
  }
  return (
    <div
      style={{
        backgroundColor: corBtn,
        padding: "10px",
        height: "200px",
        width: "500px",
      }}
    >
      <h2>Mude a cor dessa div com o botão abaixo</h2>
      <button onClick={mudarCor}>Mudar cor</button>
      <button onClick={mudarCorAzul}>Voltar para azul</button>
    </div>
  );
}

export default Botao;
