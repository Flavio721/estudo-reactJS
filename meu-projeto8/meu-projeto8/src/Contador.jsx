import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  //   Estilos CSS dos componentes
  const btnAumentarStyle = {
    backgroundColor: "green",
    padding: "10px",
    color: "white",
    borderRadius: "10px",
  };
  const btnDiminuirStyle = {
    backgroundColor: "red",
    padding: "10px",
    color: "white",
    borderRadius: "10px",
  };
  const caixaStyle = {
    marginLeft: "600px",
    border: "1px solid white",
    borderRadius: "10px",
    padding: "10px",
  };
  const contadorStyle = {
    textAlign: "center",
    fontSize: "1.5em",
  };

  function contadorAumentando() {
    setContador(contador + 1);
  }
  function contadorDiminuindo() {
    setContador(contador - 1);
  }
  return (
    <div style={caixaStyle}>
      <h2 style={contadorStyle}>Contador</h2>
      <p style={contadorStyle}>{contador}</p>
      <button onClick={contadorAumentando} style={btnAumentarStyle}>
        Adicionar 1
      </button>
      <button onClick={contadorDiminuindo} style={btnDiminuirStyle}>
        Subtrair 1
      </button>
    </div>
  );
}

export default Contador;
