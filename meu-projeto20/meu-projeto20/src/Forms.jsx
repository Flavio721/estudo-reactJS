import { useState } from "react";

function Forms() {
  const [listaUsuarios, setUsuario] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function adicionarUsuario(e) {
    e.preventDefault();
    const dadosUsuario = {
      nome: nome,
      email: email,
      senha: senha,
    };
    setUsuario(...listaUsuarios, dadosUsuario);
    setNome("");
    setEmail("");
    setSenha("");
  }
  return (
    <div>
      <h2>Registro de usuários</h2>
      <form onSubmit={adicionarUsuario}>
        <label htmlFor="inome">Nome</label>
        <input
          type="text"
          id="inome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="iemail">Email</label>
        <input
          type="email"
          id="iemail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="isenha">Senha</label>
        <input
          type="password"
          id="isenha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <h2>Lista de usuários</h2>
      <ul>
        {listaUsuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nome} {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Forms;
