import { useState } from "react";
import Input from "./Input";

function Usuario() {
  const [listaUsuario, setListaUsuario] = useState([]);
  const [usuarioNome, setUsuarioNome] = useState("");
  const [usuarioEmail, setUsuarioEmail] = useState("");
  const [usuarioSenha, setUsuarioSenha] = useState("");

  function adicionarUsuario(e) {
    e.preventDefault();
    const novoUsuario = {
      nome: usuarioNome,
      email: usuarioEmail,
      senha: usuarioSenha,
    };
    setListaUsuario([...listaUsuario, novoUsuario]);
    setUsuarioEmail("");
    setUsuarioNome("");
    setUsuarioSenha("");
  }
  function removerUsuario(indexRemove) {
    const novaListaUsuario = listaUsuario.filter(
      (_, index) => index !== indexRemove
    );
    setListaUsuario(novaListaUsuario);
  }

  return (
    <div className="bg-white">
      <h2>Registro de novos usuários</h2>
      <form onSubmit={adicionarUsuario}>
        <Input
          label="Nome do usuário:"
          type="text"
          placeholder="Insira o nome do usuário"
          value={usuarioNome}
          onChange={(e) => setUsuarioNome(e.target.value)}
        />
        <Input
          label="Email do usuário:"
          type="email"
          placeholder="Insira o email do usuário"
          value={usuarioEmail}
          onChange={(e) => setUsuarioEmail(e.target.value)}
        />
        <Input
          label="Senha do usuário:"
          type="password"
          placeholder="Insira a senha do usuário"
          value={usuarioSenha}
          onChange={(e) => setUsuarioSenha(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {listaUsuario.map((usuario, index) => (
          <li key={index}>
            {usuario.nome} {usuario.email}
            <button onClick={() => removerUsuario(index)}>
              Remover usuário
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuario;
