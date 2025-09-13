import { useReducer } from "react";

function contador(state, action) {
  switch (action.type) {
    case "adicionar":
      return { count: state.count + 1 };
    case "diminuir":
      return { count: state.count - 1 };
    case "zerar":
      return { count: 0 };
    default:
      return state;
  }
}
function Contador() {
  const [state, alterar] = useReducer(contador, { count: 0 });

  return (
    <div>
      <h2>Contador</h2>
      <p>{state.count}</p>
      <button onClick={() => alterar({ type: "adicionar" })}>
        Adicionar 1
      </button>
      <button onClick={() => alterar({ type: "diminuir" })}>Diminuir 1</button>
      <button onClick={() => alterar({ type: "zerar" })}>Zerar</button>
    </div>
  );
}
export default Contador;
