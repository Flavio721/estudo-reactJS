import { useReducer } from "react";

// Reducer: Controla a adição e a remoção de elementos
function reducer(state, action) {
  switch (action.type) {
    case "adicionar":
      return [...state, action.name]; // Adicionará um novo item na lista
    case "remover":
      return state.filter((_, i) => i !== action.index); // Removerá um item da lista
    default:
      return state;
  }
}

function ListaUsuarios() {
  const [state, alterar] = useReducer(reducer, []); // Inicialmente a lista começa vazia

  return (
    <div>
      <h2>Lista de requisições de usuários</h2>
      <ul>
        <li>
          {" "}
          Livia{" "}
          <button onClick={() => alterar({ type: "adicionar", name: "Livia" })}>
            Adicionar
          </button>
        </li>
        <li>
          {" "}
          Flávio{" "}
          <button
            onClick={() => alterar({ type: "adicionar", name: "Flávio" })}
          >
            Adicionar
          </button>
        </li>
        <li>
          {" "}
          Pedro{" "}
          <button onClick={() => alterar({ type: "adicionar", name: "Pedro" })}>
            Adicionar
          </button>
        </li>
      </ul>
      <h2>Lista de usuários registrados</h2>
      <ul>
        {state.map((usuario, index) => (
          <li key={index}>
            {usuario}{" "}
            <button onClick={() => alterar({ type: "remover", index })}>
              Remover usuário
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListaUsuarios;
