import { useState, useEffect } from "react";

function Relogio() {
  const [segundos, setSegundos] = useState(() => {
    const valorSalvo = localStorage.getItem("segundos");
    return valorSalvo ? Number(valorSalvo) : 0;
  });
  const [minutos, setMinutos] = useState(() => {
    const valorSalvo = localStorage.getItem("minutos");
    return valorSalvo ? Number(valorSalvo) : 0;
  });
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    if (rodando) {
      const timer = setInterval(() => {
        setSegundos((s) => s + 1);
      }, 1000);
      return () => clearInterval(timer); // A cada segundo vamos adicionar ao setSegundos 1
    }
  }, [rodando]);
  useEffect(() => {
    if (segundos > 60) {
      setMinutos(minutos + 1);
      setSegundos(0);
    }
  }, [segundos]);
  //   useEffect para guardar o valor de segundos no localStorage
  useEffect(() => {
    localStorage.setItem("segundos", Number(segundos));
  }, [segundos]);
  //   useEffect para guardar o valor de minutos no localStorage
  useEffect(() => {
    localStorage.setItem("minutos", minutos);
  }, [minutos]);

  function retomar() {
    setRodando(true);
  }
  return (
    <div>
      <h2>Cronômetro</h2>
      <p>
        {minutos}m:{segundos}s
      </p>
      <button onClick={retomar}>Começar</button>
    </div>
  );
}
export default Relogio;
