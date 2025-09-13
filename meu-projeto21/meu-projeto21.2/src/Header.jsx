import { useUser } from "./authContext";

function Header() {
  const { user } = useUser();

  return (
    <header>
      <h2>Bem-vindo {user ? user.nome : "Visitante"}!</h2>
    </header>
  );
}
export default Header;
