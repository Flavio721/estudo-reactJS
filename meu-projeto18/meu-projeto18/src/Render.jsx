import { useRef, useState } from "react";

function Render() {
  const renderCount = useRef(0);
  const [contador, setContador] = useState(0);

  renderCount.current++;

  return (
    <div>
      <h2>Teste</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>{contador}</p>
    </div>
  );
}
export default Render;
