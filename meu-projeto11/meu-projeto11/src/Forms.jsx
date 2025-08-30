import { useEffect, useState } from "react";

function Forms() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [enviado, setEnviado] = useState(true);
  const status = document.getElementById("status");

  useEffect(() => {
    if (!enviado) {
      status.innerText = "Preencha todos os campos";
      status.style.color = "red";
    }
  });
  function formsEnviado(e) {
    e.preventDefault();
    if (!nome || !email || !senha) {
      setEnviado(false);
    } else {
      setEnviado(true);
      setNome("");
      setEmail("");
      setSenha("");
      status.innerText = "";
    }
  }
  return (
    <div>
      <h2>Formulário de entrada</h2>
      <form onSubmit={formsEnviado}>
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
      <p id="status"></p>
      <h2>Informações recebidas: </h2>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Senha: {senha}</p>
    </div>
  );
}

export default Forms;
