import { useState, useEffect } from "react";

function Cronometro() {
  const [segundos, setSegundos] = useState(() => {
    const valorSalvo = localStorage.getItem("segundos");
    return valorSalvo ? Number(valorSalvo) : 0;
    // Ao usar o ? : 0, se valorSalvo estiver vazio/null, ele iguala a 0, se possuir valor, ele iguala ao valor da variável
  });
  const [rodando, setRodando] = useState(false); // Alterna o pause do cronômetro

  useEffect(() => {
    if (rodando) {
      const timer = setInterval(() => {
        setSegundos((s) => s + 1);
      }, 1000);
      return () => clearInterval(timer); // A cada segundo vamos adicionar ao setSegundos 1
    }
  }, [rodando]);
  useEffect(() => {
    localStorage.setItem("segundos", segundos); // Ao aumentar o valor de segundos, guardamos o novo valor no localstorage
  }, [segundos]);

  function zerarCronometro() {
    setSegundos(0);
    setRodando(false);
    localStorage.setItem("segundos", 0); // Para zerar o cronômetro, é preciso alterar o valor que está no localStorage, já que é em base nele em que colocamos o valor de segundos
  }
  function pararCronometro() {
    setRodando(false);
  }
  function retomarCronometro() {
    setRodando(true);
  }

  return (
    <div>
      <h2>Cronometro</h2>
      <p>{segundos}</p>
      <button onClick={pararCronometro}>Parar</button>
      <button onClick={retomarCronometro}>Continuar</button>
      <button onClick={zerarCronometro}>Zerar</button>
    </div>
  );
}
export default Cronometro;
