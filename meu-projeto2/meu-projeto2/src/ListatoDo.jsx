import { useState } from "react";

function ListatoDo() {
  const [listaTarefa, setTarefa] = useState([]);
  const [objetivo, setObjetivo] = useState("");
  const [statusConcluida, setStatusConcluida] = useState([]);
  const btnStyle = {
    backgroundColor: "red",
    padding: "5px",
    borderRadius: "10px",
    marginLeft: "10px",
    marginTop: "30px",
  };
  const divStyle = {
    marginLeft: "600px",
    border: "1px solid white",
    borderRadius: "10px",
    padding: "10px",
  };
  const inputStyle = {
    marginLeft: "10px",
    marginRight: "10px",
  };
  const btnConcluir = {
    backgroundColor: "green",
    padding: "5px",
    borderRadius: "10px",
    marginLeft: "10px",
    marginTop: "30px",
  };

  function adicionarTarefa(e) {
    e.preventDefault();
    setTarefa([...listaTarefa, objetivo]);
    setStatusConcluida([...statusConcluida, false]);
    setObjetivo("");
  }

  function removerTarefa(indexRemove) {
    const novaLista = listaTarefa.filter((_, index) => index !== indexRemove);
    setTarefa(novaLista);
  }

  function removerTudo() {
    const novaLista2 = [];
    setTarefa(novaLista2);
  }
  function concluirTarefa(index) {
    const novaStatus = [...statusConcluida];
    novaStatus[index] = !novaStatus[index];
    setStatusConcluida(novaStatus);
  }

  return (
    <div className="w-90 m-auto rounded-sm border-white border p-10">
      <form onSubmit={adicionarTarefa}>
        <label
          htmlFor="iobj"
          class="block font-medium text-gray-200 text-center text-lg"
        >
          Objetivo
        </label>
        <input
          type="text"
          id="iobj"
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-5 mb-5"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Enviar
        </button>
      </form>
      <ul>
        {listaTarefa.map((tarefa, index) => (
          <li
            key={index}
            style={{
              textDecoration: statusConcluida[index] ? "line-through" : "none",
            }}
          >
            {index + 1} - {tarefa}{" "}
            <button
              className="w-full py-2 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition"
              onClick={() => removerTarefa(index)}
            >
              Remover tarefa
            </button>{" "}
            <button
              className="w-full py-2 px-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
              onClick={() => concluirTarefa(index)}
            >
              Concluida
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListatoDo;
