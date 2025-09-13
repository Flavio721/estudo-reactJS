import { useUser } from "./Context";

function Header() {
  const { user } = useUser();

  return (
    <header>
      <h2>Bem-vindo {user}!</h2>
    </header>
  );
}
export default Header;
