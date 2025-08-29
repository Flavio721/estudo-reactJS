import { useEffect, useState } from "react";

function Cronometro() {
  const [cronometro, setCronometro] = useState(0);
  const [rodando, setRodando] = useState(false);
  // Estilos CSS dos componentes
  const btnComecarStyle = {
    backgroundColor: "green",
    padding: "10px",
    borderRadius: "10px",
    marginLeft: "10px",
    marginRight: "10px",
  };
  const btnPararStyle = {
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "10px",
    marginLeft: "70px",
  };
  const btnZerarStyle = {
    backgroundColor: "gray",
    padding: "10px",
    borderRadius: "10px",
  };
  const divStyle = {
    border: "1px solid white",
    borderRadius: "10px",
    width: "400px",
    height: "400px",
    marginLeft: "500px",
  };
  const textStyle = {
    textAlign: "center",
    marginBottom: "50px",
    marginTop: "50px",
    fontSize: "1.5em",
  };
  useEffect(() => {
    if (rodando) {
      const timer = setInterval(() => {
        setCronometro((s) => s + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [rodando]);

  function comecarCronometro() {
    setRodando(true);
  }
  function pausarCronometro() {
    setRodando(false);
  }
  function zerarCronometro() {
    setCronometro(0);
  }
  return (
    <div style={divStyle}>
      <h2 style={textStyle}>Cronometro</h2>
      <p style={textStyle}>{cronometro}s</p>
      <button onClick={pausarCronometro} style={btnPararStyle}>
        Pausar
      </button>
      <button onClick={comecarCronometro} style={btnComecarStyle}>
        Começar
      </button>
      <button onClick={zerarCronometro} style={btnZerarStyle}>
        Zerar
      </button>
    </div>
  );
}

export default Cronometro;
