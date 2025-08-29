import { useState } from "react";

function ListatoDo() {
  const [listaTarefa, setTarefa] = useState([]);
  const [objetivo, setObjetivo] = useState([]);
  const [statusConcluida, setStatus] = useState([false]);

  function adicionarEvento(e) {
    e.preventDefault();
    setTarefa([...listaTarefa, objetivo]);
    setStatus([...statusConcluida, false]);
    setObjetivo("");
  }
  function removerEvento(indexRemove) {
    const novaLista = listaTarefa.filter((_, index) => index !== indexRemove);
    setTarefa(novaLista);
  }
  function tarefaConcluida(index) {
    const novaStatus = [...statusConcluida];
    novaStatus[index] = !novaStatus[index];
    setStatus(novaStatus);
  }

  return (
    <div className="w-90 m-auto rounded-lg shadow-2xl border-white border p-10 h-auto display: flex flex-col flex-wrap">
      <form onSubmit={adicionarEvento}>
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
      <ul className="mt-10">
        <h2 className="text-center text-white text-lg">Lista de tarefas</h2>
        {listaTarefa.map((tarefa, index) => (
          <li
            key={index}
            style={{
              textDecoration: statusConcluida[index] ? "line-through" : "none",
            }}
            className="text-white mt-10"
          >
            {index + 1} - {tarefa}{" "}
            <button
              className="w-w-32 py-2 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition ml-10 mr-10"
              onClick={() => removerEvento(index)}
            >
              Remover tarefa
            </button>
            <button
              className=" py-2 px-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition w-32 mt-5"
              onClick={() => tarefaConcluida(index)}
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
