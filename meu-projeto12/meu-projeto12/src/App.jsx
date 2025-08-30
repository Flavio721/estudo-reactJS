import { useState } from "react";
import Card from "./Card";
import Botao from "./Botao";
function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  function formsCompleto(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h2>Preencha o formulário para criar seu personagem</h2>
      <form onSubmit={formsCompleto}>
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

        <label htmlFor="iavatar">Avatar</label>
        <input
          type="text"
          id="iavatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <Card nome={nome} email={email} avatar={avatar} />
      <Botao />
    </div>
  );
}

export default App;
