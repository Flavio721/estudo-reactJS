import { useEffect, useState } from "react";

function ListaPiadas() {
  const [listaPiadas, setListaPiadas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro");
        }
        return res.json();
      })
      .then((dados) => {
        setListaPiadas(dados);
        setLoading(false);
      })
      .catch((error) => {
        setErro(error.message);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Lista de piadas</h2>
        <p>Carregando...</p>
      </div>
    );
  }
  if (erro) {
    return (
      <div>
        <h2>Erro na consulta: {erro}</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>Lista de piadas</h2>
      <ul>
        {listaPiadas.map((piada) => (
          <li key={piada.id}>
            {piada.setup} <br />
            {piada.punchline}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListaPiadas;
