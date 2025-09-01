import { useState, useEffect } from "react";

function ListaUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro na busca dos usuários");
        }

        return res.json();
      })
      .then((dados) => {
        setUsuarios(dados);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErro(err.message);
      });
  }, []);

  if (loading) {
    return <p>Carregando lista de usuários...</p>;
  }
  if (erro) {
    return <p>Erro: {erro}</p>;
  }
  return (
    <div>
      <h2>Lista de usuários</h2>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuario;
