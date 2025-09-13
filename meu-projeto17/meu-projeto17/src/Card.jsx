import { useEffect, useState } from "react";

function Card() {
  const [cliques, setCliques] = useState(() => {
    const valorSalvo = localStorage.getItem("cliques");
    return valorSalvo ? Number(valorSalvo) : 0;
  });

  function aumentarCliques() {
    setCliques(cliques + 1);
  }
  useEffect(() => {
    localStorage.setItem("cliques", Number(cliques));
  }, [cliques]);
  useEffect(() => {});
  return (
    <div>
      <h2>Clique no botão abaixo</h2>
      <button onClick={aumentarCliques}>Clique aqui</button>
      <p>Você clicou {cliques} vezes</p>
    </div>
  );
}
export default Card;
